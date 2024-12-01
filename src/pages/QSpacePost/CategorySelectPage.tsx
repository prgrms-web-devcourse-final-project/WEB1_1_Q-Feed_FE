import BackButton from '@/components/ui/BackButton/BackButton';
import CategorySelectContainer from '@/components/ui/CategorySelectContainer/CategorySelectContainer';
import {
  ButtonSection,
  Container,
  ContentSection,
  HeaderSection,
  Title,
} from '@/pages/QSpacePost/CategorySelectPage.styles';
import theme from '@/styles/theme';
import { Button } from '@chakra-ui/react';
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
          width="100%"
          height="3.5rem"
          backgroundColor={theme.colors.primary}
          color="white"
          _hover={{ backgroundColor: '#8A5E5F' }}
          isDisabled={!selectedCategory}
          onClick={handleNext}
          borderRadius="1rem"
        >
          다음
        </Button>
      </ButtonSection>
    </Container>
  );
};

export default CategorySelectPage;
