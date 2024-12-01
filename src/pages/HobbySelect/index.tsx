import { useNavigate } from 'react-router-dom';
import { Logo } from '@/components/ui/Logo/Logo';
import CategorySelectContainer from '@/components/ui/CategorySelectContainer/CategorySelectContainer';
import { CategoryContainer, Container, LogoWrapper, Title } from '@/pages/HobbySelect/styles';

const HobbySelectPage = () => {
  const navigate = useNavigate();
  const handleCategorySelect = (categoryId: string) => {
    //질문에 답했는데 확인 로직 추가
    navigate(`/question/${categoryId}`);
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
