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

export const Login = () => {
  const { goToFindEmail, gotoQuestionPage, gotoPasswordRecoveryPage, gotoProfileRegister } =
    useNavigation();
  const { handleKakaoLogin } = useKakaoLogin();
  return (
    <Container>
      <LogoContainer>
        <Logo width={STYLES.LOGO.WIDTH} height={STYLES.LOGO.HEIGHT} />
        <Title>나의 취향 메이트 찾기</Title>
      </LogoContainer>

      <StyledStack>
        <LoginForm onSubmit={gotoQuestionPage} />
        <KakaoLoginButton onClick={handleKakaoLogin} />
      </StyledStack>

      <StyledHStack>
        <TextButton onClick={goToFindEmail}>이메일 찾기</TextButton>
        <TextButton onClick={gotoPasswordRecoveryPage}>비밀번호 찾기</TextButton>
        <TextButton onClick={gotoProfileRegister}>회원가입</TextButton>
      </StyledHStack>
    </Container>
  );
};

export default Login;
