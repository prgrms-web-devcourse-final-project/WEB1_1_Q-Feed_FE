import BackButton from '@/components/ui/BackButton/BackButton';
import CategorySelectContainer from '@/components/ui/CategorySelectContainer/CategorySelectContainer';
import {
  ButtonSection,
  Container,
  ContentSection,
  HeaderSection,
  Title,
} from '@/pages/QSpace/QSpacePost/CategorySelectPage.styles';
import theme from '@/styles/theme';
import { Button } from '@chakra-ui/react';
import { useState } from 'react';
import { useNavigate } from 'react-router';

const CategorySelectPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const navigate = useNavigate();

  const handleCategorySelect = (categoryId: number) => {
    setSelectedCategory(categoryId);
  };

  const handleNext = () => {
    navigate('/qspace/post', { state: { categoryId: selectedCategory } });
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
