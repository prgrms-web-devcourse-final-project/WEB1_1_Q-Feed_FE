import { Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { Logo } from '@/components/ui/Logo/Logo';
import theme from '@/styles/theme';
import { Container, Content, Description, Title } from '@/pages/Error/styles';

const ErrorPage = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/');
  };

  return (
    <Container>
      <Content>
        <Logo width={100} height={100} />
        <Title>일시적인 오류입니다</Title>
        <Description>잠시 후에 다시 시도해주세요!</Description>
      </Content>
      <Button
        onClick={handleHomeClick}
        colorScheme="none"
        bg={theme.colors.primary}
        color="white"
        width="100%"
        height="3rem"
        borderRadius="1rem"
        marginBottom={16}
      >
        홈으로 돌아가기
      </Button>
    </Container>
  );
};

export default ErrorPage;
