import Header from '@/components/common/Header';
import { QuestionCard } from '@/pages/Main/components/QuestionCard/QuestionCard';
import { PopularPostSlider } from '@/pages/Main/components/PopularPostSlider/PopularPostSlider';
import { ProfileSlider } from '@/pages/Main/components/ProfileSlider/ProfileSlider';
import { dummyData } from '@/mocks/dummyPosts';
import AnswerCard from '@/pages/Main/components/AnswerCard/AnswerCard';
import {
  Body,
  CategoryList,
  CategorySection,
  Container,
  PostWrapper,
  ProfileSlideWrapper,
  Title,
} from '@/pages/Main/styles';
import { useFetchQuestion } from '@/pages/AnswerDetail/hooks/useFetchQuestion';
import { getTodayDate } from '@/pages/Main/util/formatDate';
import { useFetchMyAnswer } from '@/pages/Main/hooks/useGetMyAnswer';
import { useEffect, useRef, useState } from 'react';
import { categories, Category, CATEGORY_QUESTION_MAP } from '@/constants/categories';
import CategoryButton from '@/components/ui/CategoryButtons/CategoryButton';
import { useGetRecommendation } from '@/pages/Main/hooks/useGetRecommendation';
import { useUserStore } from '@/store/userStore';
import { useNavigation } from '@/hooks/useNavigation';
import LoadingSpinner from '@/components/ui/LoadingSpinner/LoadingSpinner';

const Main = () => {
  const { gotoQuestionPage } = useNavigation();
  const [activeCategory, setActiveCategory] = useState(Category.TRAVEL);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isQLoading, setIsLoading] = useState(false);

  const categoryRef = useRef<HTMLDivElement>(null);
  const { data: todayQuestion } = useFetchQuestion(CATEGORY_QUESTION_MAP[activeCategory] || 1);
  const { data: myAnswer, isLoading: isAnswerLoading } = useFetchMyAnswer(
    todayQuestion?.questionId || 1
  );
  const { userId: followerId } = useUserStore();
  const { data: recommendList, isLoading } = useGetRecommendation(followerId || '');

  useEffect(() => {
    if (isAnswerLoading) {
      setIsLoading(true);
      return () => setIsLoading(false);
    }
    if (myAnswer?.answerContent === undefined) {
      gotoQuestionPage(activeCategory);
    }
  }, [todayQuestion, myAnswer, activeCategory, gotoQuestionPage, isAnswerLoading]);

  const handleCategoryChange = (category: string, isSelected: boolean) => {
    if (isSelected) {
      const validCategory = Object.values(Category).find((validCat) => validCat === category);
      if (validCategory) {
        setActiveCategory(validCategory);
      }
    }
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    if (categoryRef.current) {
      setStartX(e.pageX - categoryRef.current.offsetLeft);
      setScrollLeft(categoryRef.current.scrollLeft);
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    e.preventDefault();
    if (categoryRef.current) {
      const x = e.pageX - categoryRef.current.offsetLeft;
      const walk = x - startX;
      categoryRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(false);
    console.log(e);
  };

  const handleMouseUp = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(false);
    console.log(e);
  };

  if (isQLoading) {
    return (
      <Container>
        <Header />
        <LoadingSpinner />
      </Container>
    );
  }

  return (
    <Container>
      <Header />
      <CategorySection
        ref={categoryRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        <CategoryList>
          {categories.slice(1).map((category) => (
            <CategoryButton
              key={category}
              label={category}
              initialSelected={category === activeCategory}
              onChange={(isSelected) => handleCategoryChange(category, isSelected)}
            />
          ))}
        </CategoryList>
      </CategorySection>

      <Body>
        <QuestionCard
          date={getTodayDate()}
          question={todayQuestion?.content || `${activeCategory}질문 - 로딩 오류`}
        />
        <AnswerCard answer={myAnswer?.answerContent || `${activeCategory}에 대한 나의 답변`} />

        <PostWrapper>
          <Title>지금 뜨는 인기 답변</Title>
          <PopularPostSlider popularPosts={dummyData} />
        </PostWrapper>

        <ProfileSlideWrapper>
          {!isLoading &&
            recommendList &&
            Array.isArray(recommendList) &&
            recommendList.length >= 1 && (
              <div>
                <Title>친구 추천</Title>
                <ProfileSlider
                  initialProfiles={recommendList}
                  onProfilesChange={(newProfiles) => {
                    return newProfiles.length === 0 ? null : undefined;
                  }}
                />
              </div>
            )}
          <Title>최근 등록된 답변</Title>
        </ProfileSlideWrapper>
      </Body>
    </Container>
  );
};

export default Main;
