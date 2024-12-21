import { HeaderWithTitle } from '@/components/ui/HeaderWithTitle/HeaderWithTitle';
import LoginButton from '@/pages/Login/components/LoginButton/LoginButton';
import { StyledHStack, TextButton } from '@/pages/Login/styles';
import { ContentWrapper } from '@/pages/PasswordRecovery/styles';
import { FormValues } from '@/pages/Register/type/formType';
import theme from '@/styles/theme';
import styled from '@emotion/styled';
import { useForm } from 'react-hook-form';
import { useNavigation } from '@/hooks/useNavigation';
import { useCheckEmailExist } from '@/pages/Register/hooks/useCheckEmailExist';
import { InputForm } from '@/pages/IDRecovery/component/InputForm';
import { useState } from 'react';
import { ErrorMessage } from '@/pages/IDRecovery/styles';
import { EMAIL_REGEX } from '@/utils/registerRegex';

export const IDRecoveryPage = () => {
  const { gotoLogin, gotoRegisterPage, gotoPasswordRecoveryPage } = useNavigation();
  const {
    register,
    formState: { errors },
    getValues,
  } = useForm<FormValues>();
  const { mutate: checkEmail } = useCheckEmailExist();
  const [emailMessage, setEmailMessage] = useState<string>('');

  const handleOnClick = () => {
    const emailValue = getValues('email');

    if (emailValue == '') {
      setEmailMessage('이메일 계정을 입력해주세요');
      return;
    }

    if (!EMAIL_REGEX.test(emailValue)) {
      setEmailMessage('올바른 이메일 형식이 아닙니다.');
      return;
    }

    checkEmail(emailValue, {
      onSuccess: (isAvailable) => {
        setEmailMessage(isAvailable ? '회원가입 이력이 없습니다.' : '이미 가입된 이메일입니다.');
      },
      onError: (error) => {
        console.log(error);

        setEmailMessage('올바른 이메일 형식이 아닙니다.');
      },
    });
  };

  const handleFindPassword = () => {
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
      <HeaderWithTitle title="아이디 찾기" />
      <ContentWrapper>
        <InputForm register={register} errors={errors} />
        {emailMessage && <ErrorMessage>{emailMessage}</ErrorMessage>}{' '}
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
