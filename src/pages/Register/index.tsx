import { Header } from '@/pages/Register/components/Header/Header';
import { EmailForm } from '@/pages/Register/components/EmailForm/EmailForm';
import { PasswordForm } from '@/pages/Register/components/PasswordForm/PasswordForm';
import { Container, FormContainer, Text, TextButton, TextWrapper } from '@/pages/Register/styles';
import { useForm } from 'react-hook-form';
import { FormValues } from '@/pages/Register/type/formType';
import LoginButton from '@/pages/Login/components/LoginButton/LoginButton';
import { ConfirmForm } from '@/pages/Register/components/ConfirmForm/ConfirmForm';
import { useNavigate } from 'react-router';

export const RegisterPage = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    getValues,
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  const handleVerify = () => {
    const verificationCode = getValues('verificationCode');
    alert(`인증번호:${verificationCode}`);
  };

  const handleRegister = () => {
    alert('회원가입 완료');
  };

  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <Container>
      <Header />
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <EmailForm register={register} errors={errors} />
        <ConfirmForm register={register} errors={errors} onVerify={handleVerify} />
        <PasswordForm
          register={register}
          watch={watch}
          errors={errors}
          type="password"
          label="비밀번호"
          placeholder="비밀번호를 입력해주세요"
        />
        <PasswordForm
          register={register}
          watch={watch}
          errors={errors}
          type="passwordConfirm"
          label="비밀번호 확인"
          placeholder="비밀번호를 다시 입력해주세요"
        />
        <LoginButton text="완료" onClick={handleRegister} />
      </FormContainer>

      <TextWrapper>
        <Text>계정이 이미 존재하나요?</Text>
        <TextButton onClick={handleLogin}>로그인하기</TextButton>
      </TextWrapper>
    </Container>
  );
};
