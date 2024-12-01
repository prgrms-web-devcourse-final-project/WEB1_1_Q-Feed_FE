import { HeaderWithTitle } from '@/components/ui/HeaderWithTitle/HeaderWithTitle';
import LoginButton from '@/pages/Login/components/LoginButton/LoginButton';
import { StyledHStack, TextButton } from '@/pages/Login/styles';
import { ContentWrapper } from '@/pages/PasswordRecovery/styles';
import { EmailForm } from '@/pages/Register/components/EmailForm/EmailForm';
import { FormValues } from '@/pages/Register/type/formType';
import theme from '@/styles/theme';
import styled from '@emotion/styled';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';

export const IDRecoveryPage = () => {
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
  } = useForm<FormValues>();

  const handleOnClick = () => {
    alert('아이디 찾기 버튼 클릭');
  };

  const handleFindPassword = () => {
    navigate('/account-recovery/password');
  };

  const handleLogin = () => {
    navigate('/login');
  };

  const handleRegister = () => {
    navigate('/register');
  };

  return (
    <Container>
      <HeaderWithTitle title="아이디 찾기" />
      <ContentWrapper>
        <EmailForm register={register} errors={errors} />
        <LoginButton text="아이디 확인하기" onClick={handleOnClick} />
      </ContentWrapper>

      <StyledHStack>
        <TextButton onClick={handleFindPassword}>비밀번호 찾기</TextButton>
        <TextButton onClick={handleLogin}>로그인하기</TextButton>
        <TextButton onClick={handleRegister}>회원가입</TextButton>
      </StyledHStack>
    </Container>
  );
};

const Container = styled.div`
  background: ${theme.colors.background};
  height: 100vh;
`;
