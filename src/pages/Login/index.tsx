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
import { useNavigation } from '@/hooks/useNavigation';
import { useKakaoLogin } from '@/pages/Login/hooks/useKakaoLogin';
import { useLogin } from '@/pages/Login/hooks/useLogin';
import { useEffect } from 'react';
import { LoginRequest } from '@/pages/Login/types/auth';

export const Login = () => {
  const { goToFindEmail, gotoSelectCategory, gotoPasswordRecoveryPage, gotoRegisterPage } =
    useNavigation();
  const { mutate: login, data, error } = useLogin();
  const { handleKakaoLogin } = useKakaoLogin();

  const handleLogin = (LoginData: LoginRequest) => {
    login(LoginData);
  };

  useEffect(() => {
    if (data?.accessToken) {
      gotoSelectCategory();
    } else if (error) {
      alert('로그인 정보가 일치하지 않아요');
    }
  }, [data, error, gotoSelectCategory]);

  return (
    <Container>
      <LogoContainer>
        <Logo width={STYLES.LOGO.WIDTH} height={STYLES.LOGO.HEIGHT} />
        <Title>나의 취향 메이트 찾기</Title>
      </LogoContainer>

      <StyledStack>
        <LoginForm onSubmit={handleLogin} />
        <KakaoLoginButton onClick={handleKakaoLogin} />
      </StyledStack>

      <StyledHStack>
        <TextButton onClick={goToFindEmail}>이메일 찾기</TextButton>
        <TextButton onClick={gotoPasswordRecoveryPage}>비밀번호 찾기</TextButton>
        <TextButton onClick={gotoRegisterPage}>회원가입</TextButton>
      </StyledHStack>
    </Container>
  );
};

export default Login;
