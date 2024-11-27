import styled from '@emotion/styled';
import theme from '@/styles/theme';
import { SelectableHobbyTags } from '@/components/ui/HobbyTag/SelectableHobbyTags';
import GroupStateCheckBox from '@/pages/QSpaceMain/components/GroupStateCheckBox/GroupStateCheckBox';
import { QSpace } from '@/components/ui/QSpace/QSpace';
import FloatingButton from '@/pages/QSpaceMain/components/FloatingButton/FloatingButton';

const categories = ['전체', '여행', '스포츠', '패션', '문화', '맛집', '기타'];

const QSpaceMainPage = () => {
  const handleTagSelection = (selectedTags: string[]) => {
    console.log('Selected categories:', selectedTags);
  };

  const handleRecruitingChange = (isChecked: boolean) => {
    console.log('Recruiting filter:', isChecked);
  };

  // 임시 데이터
  const spaces = [
    {
      imageUrl: '/api/placeholder/100/100',
      title: '제주도 맛집 토론방',
      description: '제주도의 숨은 맛집 얘기해요!',
      memberCount: 133,
      isRecruiting: true,
      lastUpdated: '방금 전 게시',
    },
    {
      imageUrl: '/api/placeholder/100/100',
      title: '제주도 맛집 토론방',
      description: '제주도의 숨은 맛집 얘기해요!',
      memberCount: 133,
      isRecruiting: false,
      lastUpdated: '1시간 전 대화',
    },
    {
      imageUrl: '/api/placeholder/100/100',
      title: '제주도 맛집 토론방',
      description: '제주도의 숨은 맛집 얘기해요!',
      memberCount: 133,
      isRecruiting: true,
      lastUpdated: '방금 전 게시',
    },
  ];

  return (
    <Container>
      <CategorySection>
        <SelectableHobbyTags tags={categories} onSelectionChange={handleTagSelection} />
      </CategorySection>
      <FilterSection>
        <Title>이런 스페이스 어때요?</Title>
        <GroupStateCheckBox initialChecked={false} onChange={handleRecruitingChange} />
      </FilterSection>

      <QSpaceList>
        {spaces.map((space, index) => (
          <QSpace
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
    </Container>
  );
};

export default QSpaceMainPage;

const Container = styled.div`
  max-width: 768px;
  margin: 0 auto;
  padding: 1rem;
`;

const CategorySection = styled.div`
  padding: 1rem 0;
  overflow-x: auto;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const FilterSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
`;

const Title = styled.h1`
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
