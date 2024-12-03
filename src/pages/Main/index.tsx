import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CategoryButton from '@/components/ui/CategoryButtons/CategoryButton';
import Header from '@/components/common/Header';
import { QuestionCard } from '@/pages/Main/components/QuestionCard/QuestionCard';
import { PopularPostSlider } from '@/pages/Main/components/PopularPostSlider/PopularPostSlider';
import { ProfileSlider } from '@/pages/Main/components/ProfileSlider/ProfileSlider';
import { dummyComments } from '@/mocks/dummyComments';
import { categories } from '@/pages/Main/type/category';
import { dummyData } from '@/mocks/dummyPosts';
import { userProfileData } from '@/mocks/dummyUserProfiles';
import { CommentItemList } from '@/pages/AnswerDetail/components/CommentItemList/CommentItemList';
import AnswerCard from '@/pages/Main/components/AnswerCard/AnswerCard';
import {
  Body,
  CategoryList,
  CategorySection,
  CommentListWrapper,
  Container,
  PostWrapper,
  ProfileSlideWrapper,
  Title,
} from '@/pages/Main/styles';

const Main = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const categoryRef = useRef<HTMLDivElement>(null);

  const handleCategoryChange = (category: string, isSelected: boolean) => {
    if (isSelected) {
      setActiveCategory(category);
      console.log('Selected category:', category);
      navigate(`/question/${category}`);
    }
  };
  const handleLikeComment = (commentId: string, isLiked: boolean, count: number) => {
    console.log(`Comment ${commentId} liked: ${isLiked}, count: ${count}`);
  };

  const handleReplyClick = (commentId: string) => {
    console.log(`Reply clicked for comment ${commentId}`);
    navigate(`/post/${commentId}`);
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
          {categories.map((category) => (
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
          date="2024.11.28"
          question="오늘 당장 해외여행을 떠날수 있다면 어디로 갈건가요!?"
        />
        <AnswerCard date="2024.11.28" answer="독일 크리스마스 마켓 구경하고싶어요🎄" />

        <PostWrapper>
          <Title>지금 뜨는 인기 답변</Title>
          <PopularPostSlider popularPosts={dummyData} />
        </PostWrapper>

        <ProfileSlideWrapper>
          <Title>친구 추천</Title>
          <ProfileSlider initialProfiles={userProfileData} />
          <Title>최근 등록된 답변</Title>
        </ProfileSlideWrapper>

        <CommentListWrapper>
          <CommentItemList
            comments={dummyComments}
            onLikeComment={handleLikeComment}
            onReplyClick={handleReplyClick}
          />
        </CommentListWrapper>
      </Body>
    </Container>
  );
};

export default Main;
