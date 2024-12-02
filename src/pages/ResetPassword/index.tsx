import { HeaderWithTitle } from '@/components/ui/HeaderWithTitle/HeaderWithTitle';
import { PasswordForm } from '@/pages/Register/components/PasswordForm/PasswordForm';
import { FormValues } from '@/pages/Register/type/formType';
import { useForm } from 'react-hook-form';
import LoginButton from '@/pages/Login/components/LoginButton/LoginButton';
import { Container, ContentWrapper } from '@/pages/ResetPassword/styles';
import { StyledHStack, TextButton } from '@/pages/Login/styles';
import { useNavigate } from 'react-router';

export const ResetPasswordPage = () => {
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    watch,
  } = useForm<FormValues>();

  const handleFindID = () => {
    navigate('/account-recovery/id');
  };
  const handleLogin = () => {
    navigate('/login');
  };
  const handleRegister = () => {
    navigate('/login');
  };

  return (
    <Container>
      <HeaderWithTitle title="비밀번호 재설정" />

      <ContentWrapper>
        <PasswordForm
          register={register}
          watch={watch}
          errors={errors}
          type="password"
          label="새 비밀번호"
          placeholder="새 비밀번호를 입력해주세요"
        />
        <PasswordForm
          register={register}
          watch={watch}
          errors={errors}
          type="passwordConfirm"
          label="비밀번호 확인"
          placeholder="비밀번호를 다시 입력해주세요"
        />
        <LoginButton text="저장하기" onClick={handleRegister} />
      </ContentWrapper>
      <StyledHStack>
        <TextButton onClick={handleFindID}>아이디 찾기</TextButton>
        <TextButton onClick={handleLogin}>로그인하기</TextButton>
        <TextButton onClick={handleRegister}>회원가입</TextButton>
      </StyledHStack>
    </Container>
  );
};
