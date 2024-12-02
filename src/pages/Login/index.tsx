import { Logo } from '@/components/ui/Logo/Logo';
import { LoginForm } from '@/pages/Login/components/LoginForm/LoginForm';
import { STYLES } from '@/pages/Login/Constants/styles';
import {
  Container,
  LogoContainer,
  StyledHStack,
  StyledStack,
  TextButton,
  Title,
} from '@/pages/Login/styles';
import KakaoLoginButton from '@/pages/Login/components/KakaoLoginButton/KakaoLoginButton';
import { useNavigate } from 'react-router';

export const Login = () => {
  const navigate = useNavigate();
  const handleLoginSubmit = () => {
    navigate('/question/:category');
  };

  const handleKakaoLogin = () => {
    navigate('/question/:category');
  };

  const handleFindEmail = () => {
    navigate('/account-recovery/id');
  };

  const handleFindPassword = () => {
    navigate('/account-recovery/password');
  };

  const handleRegister = () => {
    navigate('/register');
  };

  return (
    <Container>
      <LogoContainer>
        <Logo width={STYLES.LOGO.WIDTH} height={STYLES.LOGO.HEIGHT} />
        <Title>나의 취향 메이트 찾기</Title>
      </LogoContainer>

      <StyledStack>
        <LoginForm onSubmit={handleLoginSubmit} />
        <KakaoLoginButton onClick={handleKakaoLogin} />
      </StyledStack>

      <StyledHStack>
        <TextButton onClick={handleFindEmail}>이메일 찾기</TextButton>
        <TextButton onClick={handleFindPassword}>비밀번호 찾기</TextButton>
        <TextButton onClick={handleRegister}>회원가입</TextButton>
      </StyledHStack>
    </Container>
  );
};

export default Login;
