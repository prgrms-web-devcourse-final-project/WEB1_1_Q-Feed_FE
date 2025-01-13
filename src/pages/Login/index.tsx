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
import { saveFcmToken } from '@/pages/Login/api/auth'; // FCM 토큰 저장 API
import { requestFcmToken } from '@/firesbase-message';

export const Login = () => {
  const { goToFindEmail, gotoSelectCategory, gotoPasswordRecoveryPage, gotoRegisterPage } =
    useNavigation();
  const { mutate: login, data, error } = useLogin();
  const { handleKakaoLogin } = useKakaoLogin();

  const handleLogin = async (LoginData: LoginRequest) => {
    try {
      // 로그인 API 호출
      login(LoginData);

      // FCM 토큰 가져오기
      const fcmToken = await requestFcmToken();
      if (fcmToken) {
        // FCM 토큰 저장 API 호출
        await saveFcmToken(fcmToken);
        console.log('FCM 토큰이 서버에 저장되었습니다.');
      } else {
        console.warn('FCM 토큰을 가져올 수 없습니다.');
      }
    } catch (error) {
      console.error('로그인 또는 FCM 토큰 저장 중 오류 발생:', error);
    }
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
