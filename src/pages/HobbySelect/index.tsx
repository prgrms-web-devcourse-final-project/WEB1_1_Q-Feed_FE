import { useNavigate } from 'react-router-dom';
import { Logo } from '@/components/ui/Logo/Logo';
import CategorySelectContainer from '@/components/ui/CategorySelectContainer/CategorySelectContainer';
import { CategoryContainer, Container, LogoWrapper, Title } from './styles';

const HobbyMap: Record<number, string> = {
  1: '여행',
  2: '스포츠',
  3: '패션',
  4: '문화',
  5: '맛집',
  6: '기타',
};

const navigateToQuestion = (navigate: ReturnType<typeof useNavigate>, categoryId: number) => {
  const category = HobbyMap[categoryId];
  if (!category) {
    console.error(`Invalid category ID: ${categoryId}`);
    return;
  }
  navigate(`/question/${category}`);
};

const HobbySelectPage = () => {
  const navigate = useNavigate();

  const handleCategorySelect = (categoryId: number) => {
    navigateToQuestion(navigate, categoryId);
  };

  return (
    <Container>
      <LogoWrapper>
        <Logo width={62} height={53} />
      </LogoWrapper>
      <Title>당신의 취향을 골라주세요!</Title>
      <CategoryContainer>
        <CategorySelectContainer onCategorySelect={handleCategorySelect} />
      </CategoryContainer>
    </Container>
  );
};

export default HobbySelectPage;
