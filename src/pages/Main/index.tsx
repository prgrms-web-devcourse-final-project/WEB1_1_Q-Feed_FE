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
// import { CommentItemList } from '@/pages/AnswerDetail/components/CommentItemList/CommentItemList';
import { formatDate, getTodayDate } from '@/pages/Main/util/formatDate';
import { useFetchMyAnswer } from '@/pages/Main/hooks/useGetMyAnswer';
// import InfiniteScroll from 'react-infinite-scroll-component';
// import { useNavigate } from 'react-router';
import { useRef, useState } from 'react';
import { categories } from '@/constants/categories';
import CategoryButton from '@/components/ui/CategoryButtons/CategoryButton';
// import { useFetchFeedAnswers } from '@/pages/Main/hooks/useFetchFeed';
// import { CommentItemList } from '@/pages/AnswerDetail/components/CommentItemList/CommentItemList';
// import { dummyCommentList } from '@/mocks/dummyComments';
import { useGetRecommendation } from '@/pages/Main/hooks/useGetRecommendation';
import { useUserStore } from '@/store/userStore';

const Main = () => {
  // const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState(categories[1]);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const categoryRef = useRef<HTMLDivElement>(null);
  const { data: todayQuestion } = useFetchQuestion(1);
  const { data: myAnswer } = useFetchMyAnswer(todayQuestion?.questionId || 0);
  // const { data: commentList } = useFetchFeedAnswers({
  //   category: 1,
  //   size: 40, // 댓글 수에 맞게 조정
  // });
  const { userId: followerId } = useUserStore();
  const { data: recommendList, isLoading } = useGetRecommendation(followerId || '');

  const handleCategoryChange = (category: string, isSelected: boolean) => {
    if (isSelected) {
      setActiveCategory(category);
      console.log('Selected category:', category);
    }
  };
  // const handleLikeComment = (commentId: string, isLiked: boolean, count: number) => {
  //   console.log(`Comment ${commentId} liked: ${isLiked}, count: ${count}`);
  // };

  // const handleReplyClick = (commentId: string) => {
  //   console.log(`Reply clicked for comment ${commentId}`);
  //   navigate(`/post/${commentId}/${activeCategory}}`);
  // };

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

  const date = new Date();
  const formattedDate: string = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
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
          question={todayQuestion?.content || '오늘의 질문은??'}
        />
        <AnswerCard
          date={formatDate(myAnswer?.createdAt || formattedDate)}
          answer={myAnswer?.answerContent || ''}
        />

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

        {/* <CommentListWrapper>
          <CommentItemList
            comments={dummyCommentList}
            onLikeComment={handleLikeComment}
            onReplyClick={handleReplyClick}
          />
        </CommentListWrapper> */}

        {/* <CommentListWrapper>
          <CommentItemList
            comments={commentList?.pages.flatMap((page) => page.answers) || []}
            onLikeComment={handleLikeComment}
            onReplyClick={handleReplyClick}
          />
        </CommentListWrapper> */}
      </Body>
    </Container>
  );
};

export default Main;
