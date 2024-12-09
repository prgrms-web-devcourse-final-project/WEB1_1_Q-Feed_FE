import { EmailForm } from '@/pages/Register/components/EmailForm/EmailForm';
import { PasswordForm } from '@/pages/Register/components/PasswordForm/PasswordForm';
import { Container, FormContainer, Text, TextButton, TextWrapper } from '@/pages/Register/styles';
import { useForm } from 'react-hook-form';
import { FormValues } from '@/pages/Register/type/formType';
import LoginButton from '@/pages/Login/components/LoginButton/LoginButton';
import { ConfirmForm } from '@/pages/Register/components/ConfirmForm/ConfirmForm';
import { useNavigation } from '@/hooks/useNavigation';
import { HeaderWithTitle } from '@/components/ui/HeaderWithTitle/HeaderWithTitle';
import { useSendEmail } from '@/pages/Register/hooks/useSendEmail';
import { useVerifyEmailCode } from '@/pages/Register/hooks/useVerifyEmailCode';
import { useState } from 'react';
import { useCheckEmailExist } from '@/pages/Register/hooks/useCheckEmailExist';

export const RegisterPage = () => {
  const { gotoLogin, gotoProfileRegister } = useNavigation();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    getValues,
  } = useForm<FormValues>();
  const { mutate: checkEmail } = useCheckEmailExist();
  const { mutate: sendEmail } = useSendEmail();
  const { mutate: verifyEmail } = useVerifyEmailCode();
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [isEmailExist, setEmailExist] = useState(false);
  const [isVerified, setIsVerified] = useState(false);

  const handleSendEmail = () => {
    const emailValue = getValues('email');
    setEmail(emailValue);

    checkEmail(emailValue, {
      onSuccess: (isAvailable) => {
        if (isAvailable) {
          sendEmail(emailValue);
          setEmailExist(false);
          alert('인증 이메일이 전송되었습니다.');
        } else {
          setEmailExist(true);

          alert(`이미 가입된 이메일입니다.`);
        }
      },
      onError: (error) => {
        console.error('이메일 확인 실패:', error);
        alert('이메일 확인 중 오류가 발생했습니다.');
      },
    });
  };

  const handleVerify = () => {
    const verificationCode = getValues('verificationCode');
    setCode(verificationCode);
    verifyEmail(
      { email, code: verificationCode },
      {
        onSuccess: () => {
          setCode(verificationCode);
          setIsVerified(true);
          alert('이메일 인증이 완료되었습니다.');
          console.log(code);
        },
        onError: (error) => {
          alert('인증번호가 틀렸습니다.');
          console.log('error', error);
        },
      }
    );
  };

  const onSubmit = async (data: FormValues) => {
    try {
      if (isEmailExist) {
        alert('이미 등록된 이메일입니다.');
        return;
      }
      // 이메일 인증 확인
      if (!isVerified) {
        alert('이메일 인증이 필요합니다.');
        return;
      }

      // 비밀번호 확인
      if (data.password !== data.passwordConfirm) {
        alert('비밀번호가 일치하지 않습니다.');
        return;
      }

      // 비밀번호 입력 확인
      if (!data.password || !data.passwordConfirm) {
        alert('비밀번호를 입력해주세요.');
        return;
      }

      // 모든 조건이 충족되면 로컬스토리지에 저장
      localStorage.setItem('registerEmail', data.email);
      localStorage.setItem('registerPassword', data.password);

      // 프로필 등록 페이지로 이동
      gotoProfileRegister();
    } catch (error) {
      console.error('회원가입 실패:', error);
      if (error instanceof Error) {
        alert(error.message);
      } else {
        alert('회원가입 중 오류가 발생했습니다.');
      }
    }
  };

  return (
    <Container>
      <HeaderWithTitle title="회원가입" />
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <EmailForm register={register} errors={errors} onVerify={handleSendEmail} />
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
        <LoginButton text="완료" />
      </FormContainer>

      <TextWrapper>
        <Text>계정이 이미 존재하나요?</Text>
        <TextButton onClick={gotoLogin}>로그인하기</TextButton>
      </TextWrapper>
    </Container>
  );
};
