import { HeaderWithTitle } from '@/components/ui/HeaderWithTitle/HeaderWithTitle';
import { useNavigation } from '@/hooks/useNavigation';
import { ErrorMessage } from '@/pages/IDRecovery/styles';
import { EmailForm } from '@/pages/PasswordRecovery/components/EmailForm/EmailForm';
import {
  Container,
  ContentWrapper,
  StyledHStack,
  TextButton,
} from '@/pages/PasswordRecovery/styles';
import { ConfirmForm } from '@/pages/Register/components/ConfirmForm/ConfirmForm';
import LoginButton from '@/pages/Register/components/LoginButton/LoginButton';
import { useCheckEmailExist } from '@/pages/Register/hooks/useCheckEmailExist';
import { useSendEmail } from '@/pages/Register/hooks/useSendEmail';
import { useVerifyEmailCode } from '@/pages/Register/hooks/useVerifyEmailCode';
import { FormValues } from '@/pages/Register/type/formType';
import { EMAIL_REGEX } from '@/utils/registerRegex';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

export const PasswordRecoveryPage = () => {
  const { gotoResetPasswordPage, gotoPasswordRecoveryPage, gotoLogin, gotoRegisterPage } =
    useNavigation();

  const {
    register,
    formState: { errors },
    getValues,
  } = useForm<FormValues>();

  const { mutate: checkEmail } = useCheckEmailExist();
  const { mutate: sendEmail } = useSendEmail();
  const { mutate: verifyEmail } = useVerifyEmailCode();
  const [email, setEmail] = useState('');
  const [emailMessage, setEmailMessage] = useState<string>('');

  const handleSendEmail = () => {
    const emailValue = getValues('email');
    setEmail(emailValue);

    if (emailValue == '') {
      setEmailMessage('가입한 이메일 주소를 입력하세요');
      return;
    }

    if (!EMAIL_REGEX.test(emailValue)) {
      setEmailMessage('올바른 이메일 형식이 아닙니다.');
      return;
    }

    checkEmail(emailValue, {
      onSuccess: (isAvailable) => {
        if (!isAvailable) {
          sendEmail(emailValue);
          alert('인증 이메일이 전송되었습니다.');
        } else {
          setEmailMessage(`가입한 이력이 없습니다.`);
          return;
        }
      },
      onError: (error) => {
        console.error('이메일 확인 실패:', error);
      },
    });
  };

  const handleVerify = () => {
    const verificationCode = getValues('verificationCode');

    verifyEmail(
      { email, code: verificationCode },
      {
        onSuccess: () => {
          alert('이메일 인증이 완료되었습니다.');
          localStorage.setItem('recoveryEmail', email);
          localStorage.setItem('verificationCode', verificationCode);
          gotoResetPasswordPage();
        },
        onError: () => {
          alert('인증번호가 일치하지 않습니다.');
        },
      }
    );
  };

  const handleFindEmail = () => {
    gotoPasswordRecoveryPage();
  };

  const handleLogin = () => {
    gotoLogin();
  };

  const handleRegister = () => {
    gotoRegisterPage();
  };

  return (
    <Container>
      <HeaderWithTitle title="비밀번호 찾기" />
      <ContentWrapper>
        <EmailForm register={register} errors={errors} />
        {emailMessage && <ErrorMessage>{emailMessage}</ErrorMessage>}{' '}
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
