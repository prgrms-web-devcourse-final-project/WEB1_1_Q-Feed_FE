import React from 'react';
import Header from '@/components/common/Header';
import { QuestionCard } from '@/pages/Main/components/QuestionCard/QuestionCard';
import { PopularPostSlider } from '@/pages/Main/components/PopularPostSlider/PopularPostSlider';
import { ProfileSlider } from '@/pages/Main/components/ProfileSlider/ProfileSlider';
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
import { getTodayDate } from '@/pages/Main/util/formatDate';
import { useFetchMyAnswer } from '@/pages/Main/hooks/useGetMyAnswer';
import { useEffect, useRef, useState } from 'react';
import { categories, Category, CATEGORY_QUESTION_MAP } from '@/constants/categories';
import CategoryButton from '@/components/ui/CategoryButtons/CategoryButton';
import { useGetRecommendation } from '@/pages/Main/hooks/useGetRecommendation';
import { useUserStore } from '@/store/userStore';
import { useNavigation } from '@/hooks/useNavigation';
import { useGetTrendingPosts } from '@/pages/Main/hooks/useGetTrendPosts';
import { PopularPost } from '@/pages/Main/type/popularPosts';
import { CommentItemList } from '@/pages/AnswerDetail/components/CommentItemList/CommentItemList';
import { useGetComments } from '@/pages/Main/hooks/useGetFeedAnswerList';
import InfiniteScroll from 'react-infinite-scroll-component';
import { QFeedLoadingSpinner } from '@/components/ui/QFeedLoadingSpinner/QFeedLoadingSpinner';
import { useCategoryQuestion } from '@/pages/AnswerDetail/hooks/useCategoryQuestion';
import { useLikeFeed } from '@/pages/Main/hooks/useLikeFeed';
import { useCancelLike } from '@/pages/Main/hooks/useCancelLikeFeed';

const Main = () => {
  const { gotoQuestionPage, gotoDetailPage } = useNavigation();
  const [activeCategory, setActiveCategory] = useState(Category.TRAVEL);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isQLoading, setIsLoading] = useState(false);

  const categoryRef = useRef<HTMLDivElement>(null);
  const { data: todayQuestion } = useCategoryQuestion(CATEGORY_QUESTION_MAP[activeCategory] || 1);
  const { data: myAnswer, isLoading: isAnswerLoading } = useFetchMyAnswer(
    todayQuestion?.questionId || 1
  );
  const { userId: followerId } = useUserStore();
  const { data: recommendList, isLoading } = useGetRecommendation(followerId || '');
  const { data: trendList } = useGetTrendingPosts(CATEGORY_QUESTION_MAP[activeCategory] || 1);

  const { mutate: likeFeed } = useLikeFeed();
  const { mutate: cancleLikeFeed } = useCancelLike();

  const {
    data: commentsList,
    fetchNextPage,
    hasNextPage,
    isFetching,
  } = useGetComments({
    categoryId: CATEGORY_QUESTION_MAP[activeCategory] || 1,
  });

  const flattenedComments = React.useMemo(() => {
    if (hasNextPage) {
      fetchNextPage();
    }

    if (!commentsList?.pages) return [];

    return commentsList.pages.flatMap((page) => (Array.isArray(page) ? page : []));
  }, [commentsList]);

  interface TrendingAnswersResponse {
    trendingAnswers: PopularPost[];
  }

  function isTrendingAnswersResponse(data: unknown): data is TrendingAnswersResponse {
    if (typeof data !== 'object' || data === null) return false;

    const trendingAnswers = (data as Record<string, unknown>)['trendingAnswers'];

    return (
      trendingAnswers !== undefined &&
      Array.isArray(trendingAnswers) &&
      trendingAnswers.length > 0 &&
      trendingAnswers.every(
        (item) =>
          typeof item === 'object' && item !== null && 'answerId' in item && 'content' in item
      )
    );
  }
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
        <QFeedLoadingSpinner />
      </Container>
    );
  }

  const handleReplyClick = (commentId: string) => {
    const questionContent = todayQuestion?.content || '기본 질문 내용';
    const questionQueryParam = encodeURIComponent(questionContent);
    gotoDetailPage(commentId, questionQueryParam);
  };

  const handleLikeClick = (commentId: string, isLiked: boolean, count: number) => {
    console.log(count);

    if (isLiked) {
      likeFeed(commentId);
    } else {
      cancleLikeFeed(commentId);
    }
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

        {isAnswerLoading ? (
          <QFeedLoadingSpinner />
        ) : (
          myAnswer?.answerContent &&
          myAnswer.answerId && (
            <AnswerCard
              category={activeCategory}
              answer={myAnswer?.answerContent || `${activeCategory}에 대한 나의 답변`}
              answerId={myAnswer?.answerId.toString()}
            />
          )
        )}

        {isTrendingAnswersResponse(trendList) && (
          <PostWrapper>
            <Title>지금 뜨는 인기 답변</Title>
            <PopularPostSlider
              todayQuestion={todayQuestion?.content || '질문 로드에 실패했어요'}
              popularPosts={trendList.trendingAnswers}
            />
          </PostWrapper>
        )}

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
          {flattenedComments && <Title>최근 등록된 답변</Title>}
        </ProfileSlideWrapper>

        <CommentListWrapper>
          <InfiniteScroll
            dataLength={flattenedComments.length}
            next={fetchNextPage}
            hasMore={hasNextPage || false}
            loader={isFetching ? <QFeedLoadingSpinner /> : null}
            endMessage={
              flattenedComments.length > 0 && (
                <div style={{ textAlign: 'center', padding: '10px' }}>
                  더 이상 불러올 게시글이 없습니다.
                </div>
              )
            }
          >
            <CommentItemList
              comments={flattenedComments}
              onReplyClick={handleReplyClick}
              onLikeComment={handleLikeClick}
            />
          </InfiniteScroll>
        </CommentListWrapper>
      </Body>
    </Container>
  );
};

export default Main;
