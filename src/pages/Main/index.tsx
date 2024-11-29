import { useRef, useState } from 'react';
import styled from '@emotion/styled';
import theme from '@/styles/theme';
import CategoryButton from '@/components/ui/CategoryButtons/CategoryButton';
import Header from '@/components/common/Header';
import { QuestionCard } from '@/pages/Main/components/QuestionCard/QuestionCard';
import { AnswerCard } from '@/pages/Main/components/AnswerCard/AnswerCard';
import { PopularPostSlider } from '@/pages/Main/components/PopularPostSlider/PopularPostSlider';
import { ProfileSlider } from '@/pages/Main/components/ProfileSlider/ProfileSlider';
import { CommentList } from '@/components/ui/CommentList/CommentList';
import { dummyComments } from '@/pages/Main/type/dummyComments';
import { dummyData } from '@/pages/Main/type/dummyPosts';
import { userProfileData } from '@/pages/Main/type/dummyUserProfiles';
import { categories } from '@/pages/Main/type/category';

export const Main = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const categoryRef = useRef<HTMLDivElement>(null);

  const handleCategoryChange = (category: string, isSelected: boolean) => {
    if (isSelected) {
      setActiveCategory(category);
      console.log('Selected category:', category);
    }
  };
  const handleLikeComment = (commentId: string, isLiked: boolean, count: number) => {
    console.log(`Comment ${commentId} liked: ${isLiked}, count: ${count}`);
  };

  const handleReplyClick = (commentId: string) => {
    console.log(`Reply clicked for comment ${commentId}`);
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
        <AnswerCard answer="독일 크리스마스 마켓 구경하고싶어요🎄" />

        <PostWrapper>
          <Title>지금 뜨는 인기 답변</Title>
          <PopularPostSlider popularPosts={dummyData} />
        </PostWrapper>

        <ProfileSlideWrapper>
          <Title>친구 추천</Title>
          <ProfileSlider initialProfiles={userProfileData} />
        </ProfileSlideWrapper>

        <CommentListWrapper>
          <Title>최근 등록된 답변</Title>
          <CommentList
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

const Container = styled.div`
  background: ${theme.colors.background};
  padding-bottom: 5.25rem; //footer-height
  min-height: 100vh;
  position: relative;
`;

const CategorySection = styled.div`
  padding: 1rem 0;
  overflow-x: auto;
  white-space: nowrap;
  cursor: grab;
  user-select: none;

  &:active {
    cursor: grabbing;
  }

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const CategoryList = styled.div`
  display: flex;
  gap: 0.5rem;
  padding: 0 1rem;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.25rem;
  margin-top: 1.25rem;
  width: 100%;
  overflow-x: hidden;
`;

const PostWrapper = styled.div`
  width: 100%;
  margin-left: 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ProfileSlideWrapper = styled.div`
  width: 100%;
  padding: 0 25px;
`;

const Title = styled.h1`
  width: 100%;
  font-family: ${theme.typography.header1.fontFamily};
  color: ${theme.colors.primary};
  font-size: 20px;
  font-weight: bold;
  text-align: left;
`;

const CommentListWrapper = styled.div`
  width: 100%;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
