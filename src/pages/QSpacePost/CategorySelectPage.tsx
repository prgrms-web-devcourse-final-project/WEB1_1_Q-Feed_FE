import BackButton from '@/components/ui/BackButton/BackButton';
import CategorySelectContainer from '@/components/ui/CategorySelectContainer/CategorySelectContainer';
import theme from '@/styles/theme';
import { Button } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { useState } from 'react';

const CategorySelectPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId);
  };

  const handleNext = () => {
    if (selectedCategory) {
      // 다음 단계 처리 로직
      console.log('Selected category:', selectedCategory);
    }
  };

  return (
    <Container>
      <HeaderSection>
        <BackButton />
      </HeaderSection>

      <ContentSection>
        <Title>만들고 싶은 모임을 선택하세요!</Title>
        <CategorySelectContainer onCategorySelect={handleCategorySelect} />
      </ContentSection>

      <ButtonSection>
        <Button
          width='100%'
          height='3.5rem'
          backgroundColor={theme.colors.primary}
          color='white'
          _hover={{ backgroundColor: '#8A5E5F' }}
          isDisabled={!selectedCategory}
          onClick={handleNext}
          borderRadius='1rem'
        >
          다음
        </Button>
      </ButtonSection>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 56px); // footer height 제외
  max-width: 430px;
  margin: 0 auto;
  background-color: ${theme.colors.background};
  position: relative;
`;

const HeaderSection = styled.header`
  padding: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: ${theme.colors.background};
`;

const ContentSection = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  margin-top: 2rem;
`;

const ButtonSection = styled.div`
  padding: 1rem;
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 1.125rem;
  font-weight: 600;
  margin: 1rem 0 5rem;
  color: ${theme.colors.black};
`;

export default CategorySelectPage;
