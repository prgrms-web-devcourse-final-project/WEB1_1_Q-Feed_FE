import { useState } from 'react';
import CategoryButton from '@/components/ui/CategoryButtons/CategoryButton';
import Header from '@/components/common/Header';
import QSpaceCard from '@/components/ui/QSpaceCard/QSpaceCard';

import {
  Body,
  CategoryList,
  CategorySection,
  Container,
  FilterSection,
  QSpaceList,
  Title,
} from '@/pages/QSpace/QSpaceMain/styles';
import { useGroups } from '@/pages/QSpace/hooks/useGroups';
import { GROUP_KEYS } from '@/api/queryKeys';
import GroupStateCheckBox from '@/pages/QSpace/QSpaceMain/components/GroupStateCheckBox/GroupStateCheckBox';
import FloatingButton from '@/pages/QSpace/QSpaceMain/components/FloatingButton/FloatingButton';

const categories = ['전체', '여행', '스포츠', '패션', '문화', '맛집', '기타'];
const categoryIdMap: Record<string, number> = {
  전체: GROUP_KEYS.CATEGORIES.ALL,
  여행: GROUP_KEYS.CATEGORIES.TRAVEL,
  스포츠: GROUP_KEYS.CATEGORIES.SPORTS,
  패션: GROUP_KEYS.CATEGORIES.FASHION,
  문화: GROUP_KEYS.CATEGORIES.CULTURE,
  맛집: GROUP_KEYS.CATEGORIES.FOOD,
  기타: GROUP_KEYS.CATEGORIES.OTHER,
};

const QSpaceMainPage = () => {
  const [activeCategory, setActiveCategory] = useState('전체');
  const [showRecruiting, setShowRecruiting] = useState(false);

  const { data: groups, isLoading, error } = useGroups(categoryIdMap[activeCategory]);

  const handleCategoryChange = (category: string, isSelected: boolean) => {
    if (isSelected) {
      setActiveCategory(category);
    }
  };

  const handleRecruitingChange = (isChecked: boolean) => {
    setShowRecruiting(isChecked);
  };

  const filteredGroups = groups?.filter((group) => !showRecruiting || group.isOpen);

  const formatLastUpdated = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60));

    if (diffInMinutes < 60) {
      return '방금 전 게시';
    } else if (diffInMinutes < 1440) {
      return `${Math.floor(diffInMinutes / 60)}시간 전 대화`;
    } else {
      return `${Math.floor(diffInMinutes / 1440)}일 전 대화`;
    }
  };

  if (error instanceof Error) {
    return <div>Error: {error.message}</div>;
  }

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
          <GroupStateCheckBox initialChecked={showRecruiting} onChange={handleRecruitingChange} />
        </FilterSection>
        <QSpaceList>
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            filteredGroups?.map((group) => (
              <QSpaceCard
                key={group.groupId}
                imageUrl="/src/assets/img/sample-image.jpg"
                title={group.groupName}
                description={group.description}
                memberCount={group.membersCount}
                isRecruiting={group.isOpen}
                lastUpdated={formatLastUpdated(group.createdAt)}
              />
            ))
          )}
        </QSpaceList>
        <FloatingButton onClick={() => console.log('Create new space')} />
      </Body>
    </Container>
  );
};

export default QSpaceMainPage;
