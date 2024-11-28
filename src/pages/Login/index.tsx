import styled from '@emotion/styled';
import { HStack } from '@chakra-ui/react';
import { Logo } from "@/components/ui/Logo/Logo";
import theme from '@/styles/theme';
import { LoginForm } from '@/pages/Login/LoginForm/LoginForm';
import { KakaoLoginButton } from '@/pages/Login/KakaoLoginButton/KakaoLoginButton';


const STYLES = {
  LAYOUT : {
    HEADER_HEIGHT: '0.9375rem',   //15px
    MIN_HEIGHT: '48.3125rem',     //773px
    PADDING: '1.5rem',            //24px
    GAP: '1rem',
  },
  LOGO : {
    WIDTH: '5.375rem',            //86px
    HEIGHT: '4.5625rem'           //73px
  },

} as const;



const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.div`
  height: calc(100vh - ${STYLES.LAYOUT.HEADER_HEIGHT});
  min-height: ${STYLES.LAYOUT.MIN_HEIGHT};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${STYLES.LAYOUT.PADDING};
  gap: ${STYLES.LAYOUT.GAP};
  background: ${theme.colors.background};
`;

const StyledStack = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const StyledHStack = styled(HStack)`
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const Title = styled.h1`
  font-size: ${theme.typography.title1.size};
  line-height: ${theme.typography.title1.lineHeight};
  font-weight: ${theme.typography.title1.weight};
  text-align: center;
  color: ${theme.colors.primary};
  margin-top : 40px;
`;

const TextButton = styled.button`
  color: ${theme.colors.gray[300]};
  background: none;
  border: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const Login = () => {
  const handleLoginSubmit = () => {
    alert('로그인 클릭');
  };

  const handleKakaoLogin = () =>{
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

      <StyledStack>
        <LoginForm onSubmit={handleLoginSubmit} />
        <KakaoLoginButton onClick={handleKakaoLogin}/>
      </StyledStack>

      <StyledHStack >
        <TextButton onClick={handleFindEmail}>이메일/비밀번호 찾기</TextButton>
        <TextButton onClick={handleRegister}>회원가입</TextButton>
      </StyledHStack>
    </Container>
  );
};

export default Login;