import { useCallback, useState } from 'react';

import { categories } from '@/constants/categories';
import { categoryIdMap } from '@/utils/categoryIdMap';
import { getQSpaceCard } from '@/utils/getQSpaceCard';

import CategoryButton from '@/components/ui/CategoryButtons/CategoryButton';
import QSpaceCard from '@/components/ui/QSpaceCard/QSpaceCard';
import Header from '@/components/common/Header';

import GroupStateCheckBox from '@/pages/QSpace/QSpaceMain/components/GroupStateCheckBox/GroupStateCheckBox';
import FloatingButton from '@/pages/QSpace/QSpaceMain/components/FloatingButton/FloatingButton';

import { useGroups } from '@/pages/QSpace/hooks/Query/useGroupList';

import {
  Body,
  CategoryList,
  CategorySection,
  Container,
  FilterSection,
  QSpaceList,
  Title,
} from '@/pages/QSpace/QSpaceMain/styles';

const QSpaceMainPage = () => {
  const [activeCategory, setActiveCategory] = useState('전체');
  const [showRecruiting, setShowRecruiting] = useState(false);

  const { data: groups, isPending, error } = useGroups(categoryIdMap[activeCategory]);

  const handleCategoryChange = useCallback((category: string, isSelected: boolean) => {
    if (isSelected) {
      setActiveCategory(category);
    }
  }, []);

  const handleRecruitingChange = useCallback((isChecked: boolean) => {
    setShowRecruiting(isChecked);
  }, []);

  const filteredGroups = groups?.filter((group) => !showRecruiting || group.isOpen);

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
          {isPending ? (
            <div>Loading...</div>
          ) : (
            filteredGroups?.map((group) => (
              <QSpaceCard key={group.groupId} {...getQSpaceCard(group)} />
            ))
          )}
        </QSpaceList>
        <FloatingButton onClick={() => console.log('Create new space')} />
      </Body>
    </Container>
  );
};

export default QSpaceMainPage;
