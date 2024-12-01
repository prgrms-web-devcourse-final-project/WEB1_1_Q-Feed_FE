import { useState } from 'react';
import styled from '@emotion/styled';
import theme from '@/styles/theme';
import GroupStateCheckBox from '@/pages/QSpaceMain/components/GroupStateCheckBox/GroupStateCheckBox';
import FloatingButton from '@/pages/QSpaceMain/components/FloatingButton/FloatingButton';
import CategoryButton from '@/components/ui/CategoryButtons/CategoryButton';
import Header from '@/components/common/Header';
import QSpaceCard from '@/components/ui/QSpaceCard/QSpaceCard';

const categories = ['전체', '여행', '스포츠', '패션', '문화', '맛집', '기타'];

const QSpaceMainPage = () => {
  const [activeCategory, setActiveCategory] = useState('전체');

  const handleCategoryChange = (category: string, isSelected: boolean) => {
    if (isSelected) {
      setActiveCategory(category);
    }
  };

  const handleRecruitingChange = (isChecked: boolean) => {
    console.log('Recruiting filter:', isChecked);
  };

  // 임시 데이터
  const spaces = [
    {
      imageUrl: '/src/assets/img/sample-image.jpg',
      title: '제주도 맛집 토론방',
      description: '제주도의 숨은 맛집 얘기해요!',
      memberCount: 133,
      isRecruiting: true,
      lastUpdated: '방금 전 게시',
    },
    {
      imageUrl: '/src/assets/img/sample-image.jpg',
      title: '제주도 맛집 토론방',
      description: '제주도의 숨은 맛집 얘기해요!',
      memberCount: 133,
      isRecruiting: false,
      lastUpdated: '1시간 전 대화',
    },
    {
      imageUrl: '/src/assets/img/sample-image.jpg',
      title: '제주도 맛집 토론방',
      description: '제주도의 숨은 맛집 얘기해요!',
      memberCount: 133,
      isRecruiting: true,
      lastUpdated: '방금 전 게시',
    },
  ];

  return (
    <Container>
      <Header />
      <CategorySection>
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
        <FilterSection>
          <Title>이런 스페이스 어때요?</Title>
          <GroupStateCheckBox initialChecked={false} onChange={handleRecruitingChange} />
        </FilterSection>
        <QSpaceList>
          {spaces.map((space, index) => (
            <QSpaceCard
              key={index}
              imageUrl={space.imageUrl}
              title={space.title}
              description={space.description}
              memberCount={space.memberCount}
              isRecruiting={space.isRecruiting}
              lastUpdated={space.lastUpdated}
            />
          ))}
        </QSpaceList>
        <FloatingButton onClick={() => console.log('Create new space')} />
      </Body>
    </Container>
  );
};

const Container = styled.div`
  margin: 0 auto;
`;

const Body = styled.div`
  padding: 0 1rem;
  background-color: ${theme.colors.background};
  height: 100vh;
`;

const CategorySection = styled.div`
  padding: 1rem 0;
  overflow-x: auto;
  white-space: nowrap;
`;

const CategoryList = styled.div`
  display: flex;
  gap: 0.5rem;
  padding: 0 1rem;
`;

const FilterSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0;
`;

const Title = styled.h2`
  font-size: 1.25rem;
  font-weight: bold;
  margin: 1rem 0;
  color: ${theme.colors.black};
`;

const QSpaceList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export default QSpaceMainPage;
