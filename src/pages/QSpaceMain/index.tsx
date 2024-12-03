import CategoryButton from '@/components/ui/CategoryButtons/CategoryButton';
import Header from '@/components/common/Header';
import QSpaceCard from '@/components/ui/QSpaceCard/QSpaceCard';
import GroupStateCheckBox from '@/pages/QSpaceMain/components/GroupStateCheckBox/GroupStateCheckBox';
import {
  Body,
  CategoryList,
  CategorySection,
  Container,
  FilterSection,
  QSpaceList,
  Title,
} from '@/pages/QSpaceMain/styles';
import FloatingButton from '@/pages/QSpaceMain/components/FloatingButton/FloatingButton';
import { useGroupFilter } from '@/pages/QSpaceMain/hooks/useGroupFilter';
import { useGroups } from '@/pages/QSpaceMain/hooks/useGroups';
import type { Group } from '@/pages/QSpaceMain/types/group';

const categories = ['전체', '여행', '스포츠', '패션', '문화', '맛집', '기타'];

const QSpaceMainPage = () => {
  const { activeCategory, showOnlyRecruiting, handleCategoryChange, handleRecruitingChange } =
    useGroupFilter();

  const { data: groups = [], isPending } = useGroups(activeCategory, showOnlyRecruiting);

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
          <GroupStateCheckBox
            initialChecked={showOnlyRecruiting}
            onChange={handleRecruitingChange}
          />
        </FilterSection>
        <QSpaceList>
          {isPending ? (
            <div>Loading...</div>
          ) : (
            groups.map((group: Group) => (
              <QSpaceCard
                key={group.groupId}
                id={group.groupId}
                imageUrl={group.url || '/src/assets/img/sample-image.jpg'}
                title={group.groupName}
                description={group.description}
                memberCount={group.membersCount}
                isRecruiting={group.is_open}
                lastUpdated={new Date(group.createdAt).toLocaleDateString()}
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
