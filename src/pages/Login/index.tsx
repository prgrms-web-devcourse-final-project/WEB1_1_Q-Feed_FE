import { Logo } from '@/components/ui/Logo/Logo';
import { LoginForm } from '@/pages/Login/LoginForm/LoginForm';
import { STYLES } from '@/pages/Login/Constants/styles';
import { Container, LogoContainer, StyledHStack, TextButton, Title } from '@/pages/Login/styles';
import KakaoLoginButton from '@/pages/Login/KakaoLoginButton/KakaoLoginButton';

export const Login = () => {
  const handleLoginSubmit = () => {
    alert('로그인 클릭');
  };

  const handleKakaoLogin = () => {
    alert('카카오 로그인 클릭');
  };

  const handleFindEmail = () => {
    alert('이메일/비밀번호 찾기 클릭');
  };

  const handleRegister = () => {
    alert('회원가입 클릭');
  };

  return (
    <Container>
      <LogoContainer>
        <Logo width={STYLES.LOGO.WIDTH} height={STYLES.LOGO.HEIGHT} />
        <Title>나의 취향 메이트 찾기</Title>
      </LogoContainer>

      <StyledHStack>
        <LoginForm onSubmit={handleLoginSubmit} />
        <KakaoLoginButton onClick={handleKakaoLogin} />
      </StyledHStack>

      <StyledHStack>
        <TextButton onClick={handleFindEmail}>이메일/비밀번호 찾기</TextButton>
        <TextButton onClick={handleRegister}>회원가입</TextButton>
      </StyledHStack>
    </Container>
  );
};

export default Login;
