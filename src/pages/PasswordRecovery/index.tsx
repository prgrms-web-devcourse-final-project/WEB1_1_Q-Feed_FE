import { HeaderWithTitle } from '@/components/ui/HeaderWithTitle/HeaderWithTitle';
import {
  Container,
  ContentWrapper,
  StyledHStack,
  TextButton,
} from '@/pages/PasswordRecovery/styles';
import { ConfirmForm } from '@/pages/Register/components/ConfirmForm/ConfirmForm';
import { EmailForm } from '@/pages/Register/components/EmailForm/EmailForm';
import LoginButton from '@/pages/Register/components/LoginButton/LoginButton';
import { FormValues } from '@/pages/Register/type/formType';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';

export const PasswordRecoveryPage = () => {
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    getValues,
  } = useForm<FormValues>();

  const handleVerify = () => {
    const verificationCode = getValues('verificationCode');
    console.log(`인증번호:${verificationCode}`);
    navigate('/account-reset/password');
  };

  const handleSendEmail = () => {
    alert('이메일을 보냈습니다');
  };

  const handleFindEmail = () => {
    navigate('/account-recovery/id');
  };

  const handleLogin = () => {
    navigate('/login');
  };

  const handleRegister = () => {
    navigate('/register');
  };

  return (
    <Container>
      <HeaderWithTitle title="비밀번호 찾기" />
      <ContentWrapper>
        <EmailForm register={register} errors={errors} onVerify={handleVerify} />
        <ConfirmForm register={register} errors={errors} onVerify={handleVerify} />
        <LoginButton text="비밀번호 재설정 이메일 보내기" onClick={handleSendEmail} />
      </ContentWrapper>

      <StyledHStack>
        <TextButton onClick={handleFindEmail}>이메일 찾기</TextButton>
        <TextButton onClick={handleLogin}>로그인하기</TextButton>
        <TextButton onClick={handleRegister}>회원가입</TextButton>
      </StyledHStack>
    </Container>
  );
};
