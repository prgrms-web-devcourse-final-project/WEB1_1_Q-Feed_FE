import Header from '@/components/common/Header';
import { QuestionCard } from '@/pages/Main/components/QuestionCard/QuestionCard';
import { PopularPostSlider } from '@/pages/Main/components/PopularPostSlider/PopularPostSlider';
import { ProfileSlider } from '@/pages/Main/components/ProfileSlider/ProfileSlider';
import { dummyData } from '@/mocks/dummyPosts';
import { userProfileData } from '@/mocks/dummyUserProfiles';
import AnswerCard from '@/pages/Main/components/AnswerCard/AnswerCard';
import { Body, Container, PostWrapper, ProfileSlideWrapper, Title } from '@/pages/Main/styles';
import { useFetchQuestion } from '@/pages/AnswerDetail/hooks/useFetchQuestion';
// import { CommentItemList } from '@/pages/AnswerDetail/components/CommentItemList/CommentItemList';
import { formatDate } from '@/pages/Main/formatDate';
import { useFetchMyAnswer } from '@/pages/Main/hooks/useGetMyAnswer';
// import { useFetchFeedAnswers } from '@/pages/Main/hooks/useFetchFeed';
// import InfiniteScroll from 'react-infinite-scroll-component';

const Main = () => {
  // const navigate = useNavigate();
  // const [activeCategory, setActiveCategory] = useState(categories[0]);
  // const [isDragging, setIsDragging] = useState(false);
  // const [startX, setStartX] = useState(0);
  // const [scrollLeft, setScrollLeft] = useState(0);
  // const categoryRef = useRef<HTMLDivElement>(null);
  const { data: todayQuestion } = useFetchQuestion(1);
  const { data: myAnswer } = useFetchMyAnswer(todayQuestion?.questionId || 0);
  // const {
  //   data: feedAnswersData,
  //   // fetchNextPage,
  //   // hasNextPage,
  // } = useFetchFeedAnswers({
  //   category: categories.indexOf(activeCategory) + 1,
  //   size: 2,
  // });

  // const flattenedComments = useMemo(
  //   () =>
  //     feedAnswersData?.pages.flatMap((page) =>
  //       page.answers.map((answer) => ({
  //         id: answer.answerId.toString(),
  //         content: answer.content,
  //         author: answer.authorNickname,
  //         createdAt: answer.createdAt,
  //         likeCount: answer.likeCount,
  //       }))
  //     ) || [],
  //   [feedAnswersData]
  // );

  // const handleCategoryChange = (category: string, isSelected: boolean) => {
  //   if (isSelected) {
  //     setActiveCategory(category);
  //     console.log('Selected category:', category);
  //   }
  // };
  // const handleLikeComment = (commentId: string, isLiked: boolean, count: number) => {
  //   console.log(`Comment ${commentId} liked: ${isLiked}, count: ${count}`);
  // };

  // const handleReplyClick = (commentId: string) => {
  //   console.log(`Reply clicked for comment ${commentId}`);
  //   navigate(`/post/${commentId}/${activeCategory}}`);
  // };

  // const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
  //   setIsDragging(true);
  //   if (categoryRef.current) {
  //     setStartX(e.pageX - categoryRef.current.offsetLeft);
  //     setScrollLeft(categoryRef.current.scrollLeft);
  //   }
  // };

  // const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
  //   if (!isDragging) return;
  //   e.preventDefault();
  //   if (categoryRef.current) {
  //     const x = e.pageX - categoryRef.current.offsetLeft;
  //     const walk = x - startX;
  //     categoryRef.current.scrollLeft = scrollLeft - walk;
  //   }
  // };

  // const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
  //   setIsDragging(false);
  //   console.log(e);
  // };

  // const handleMouseUp = (e: React.MouseEvent<HTMLDivElement>) => {
  //   setIsDragging(false);
  //   console.log(e);
  // };

  return (
    <Container>
      <Header />
      {/* <CategorySection
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
      </CategorySection> */}

      <Body>
        <QuestionCard
          date={formatDate(todayQuestion?.createdAt || '2024.11.28')}
          question={todayQuestion?.content || '오늘의 질문은??'}
        />
        <AnswerCard
          date={formatDate(myAnswer?.createdAt || '2024.12.09')}
          answer={myAnswer?.answerContent || ''}
        />

        <PostWrapper>
          <Title>지금 뜨는 인기 답변</Title>
          <PopularPostSlider popularPosts={dummyData} />
        </PostWrapper>

        <ProfileSlideWrapper>
          <Title>친구 추천</Title>
          <ProfileSlider initialProfiles={userProfileData} />
          <Title>최근 등록된 답변</Title>
        </ProfileSlideWrapper>
        {/*
        <CommentListWrapper>
          <InfiniteScroll
            dataLength={flattenedComments.length}
            next={fetchNextPage}
            hasMore={hasNextPage || false}
            loader={<h4>Loading...</h4>}
          >
            <CommentItemList
              comments={flattenedComments}
              onLikeComment={handleLikeComment}
              onReplyClick={handleReplyClick}
            />
          </InfiniteScroll>
        </CommentListWrapper> */}
      </Body>
    </Container>
  );
};

export default Main;
