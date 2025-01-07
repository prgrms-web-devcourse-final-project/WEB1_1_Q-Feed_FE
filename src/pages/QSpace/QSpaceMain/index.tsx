import { useCallback, useState, useRef, useEffect } from 'react';

import { categories } from '@/constants/categories';
import { categoryIdMap } from '@/utils/categoryIdMap';
import { getQSpaceCard } from '@/utils/getQSpaceCard';

import CategoryButton from '@/components/ui/CategoryButtons/CategoryButton';
import QSpaceCard from '@/components/ui/QSpaceCard/QSpaceCard';
import Header from '@/components/common/Header';

import GroupStateCheckBox from './components/GroupStateCheckBox/GroupStateCheckBox';
import FloatingButton from './components/FloatingButton/FloatingButton';
import { useGroups } from '@/pages/QSpace/hooks/Query/useGroups';

import {
  Body,
  CategoryList,
  CategorySection,
  Container,
  FilterSection,
  LoadingWrapper,
  QSpaceList,
  Title,
} from './styles';

const QSpaceMainPage = () => {
  const [activeCategory, setActiveCategory] = useState('전체');
  const [showRecruiting, setShowRecruiting] = useState(false);
  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading, refetch } = useGroups(
    categoryIdMap[activeCategory]
  );

  const handleCategoryChange = useCallback(
    (category: string, isSelected: boolean) => {
      if (isSelected) {
        setActiveCategory(category);
        refetch();
      }
    },
    [refetch]
  );

  const handleRecruitingChange = useCallback((isChecked: boolean) => {
    setShowRecruiting(isChecked);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) {
          fetchNextPage();
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = loadMoreRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.disconnect();
      }
    };
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

  const allGroups = data?.pages.flatMap((page) => page.items) ?? [];
  const filteredGroups = allGroups.filter((group) => !showRecruiting || group.isOpen);

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
            <LoadingWrapper>Loading...</LoadingWrapper>
          ) : (
            <>
              {filteredGroups.map((group) => (
                <QSpaceCard key={group.groupId} {...getQSpaceCard(group)} />
              ))}
              {hasNextPage && (
                <div ref={loadMoreRef} style={{ height: '20px' }}>
                  {isFetchingNextPage && <LoadingWrapper>Loading more spaces...</LoadingWrapper>}
                </div>
              )}
            </>
          )}
        </QSpaceList>
        <FloatingButton onClick={() => console.log('Create new space')} />
      </Body>
    </Container>
  );
};

export default QSpaceMainPage;
