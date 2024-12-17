import { HeaderWithTitle } from '@/components/ui/HeaderWithTitle/HeaderWithTitle';
import { PasswordForm } from '@/pages/Register/components/PasswordForm/PasswordForm';
import { FormValues } from '@/pages/Register/type/formType';
import { useForm } from 'react-hook-form';
import LoginButton from '@/pages/Login/components/LoginButton/LoginButton';
import { Container, ContentWrapper } from '@/pages/ResetPassword/styles';
import { StyledHStack, TextButton } from '@/pages/Login/styles';
import { useNavigation } from '@/hooks/useNavigation';
import { FormContainer } from '@/pages/Register/styles';
import { useResetPassword } from '@/pages/ResetPassword/hooks/useResetPassword';

export const ResetPasswordPage = () => {
  const { gotoPasswordRecoveryPage, gotoLogin, gotoRegisterPage } = useNavigation();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormValues>();
  const resetPassword = useResetPassword();
  const recoveryEmail = localStorage.getItem('recoveryEmail') || '';

  const handleFindID = () => {
    gotoPasswordRecoveryPage();
  };
  const handleLogin = () => {
    gotoLogin();
  };
  const handleRegister = () => {
    gotoRegisterPage();
  };

  const onSubmit = async (data: FormValues) => {
    try {
      // 비밀번호와 확인 비밀번호 일치 확인
      if (data.password !== data.passwordConfirm) {
        alert('비밀번호가 일치하지 않습니다.');
        return;
      }

      // 비밀번호 재설정 뮤테이션 실행
      const result = await resetPassword.mutateAsync({
        password: data.password,
        email: recoveryEmail,
      });

      // 성공 시 로그인 페이지로 이동
      alert(result.message);
      gotoLogin();
    } catch (error) {
      // 에러 처리
      console.log(error);
      alert('비밀번호 재설정 중 오류가 발생했습니다.');
    }
  };

  return (
    <Container>
      <HeaderWithTitle title="비밀번호 재설정" />

      <ContentWrapper>
        <FormContainer onSubmit={handleSubmit(onSubmit)}>
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
          <LoginButton text="저장하기" />
        </FormContainer>
      </ContentWrapper>
      <StyledHStack>
        <TextButton onClick={handleFindID}>아이디 찾기</TextButton>
        <TextButton onClick={handleLogin}>로그인하기</TextButton>
        <TextButton onClick={handleRegister}>회원가입</TextButton>
      </StyledHStack>
    </Container>
  );
};
