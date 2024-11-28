import { LoginButton } from '@/pages/Login/LoginButton/LoginButton';
import theme from '@/styles/theme';
import { FormControl, FormErrorMessage, FormLabel, Input, Stack } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { useForm } from 'react-hook-form';

const STYLES = {
  FORM: {
    MAX_WIDTH: '26.5625rem', // 425px
    MIN_HEIGHT: '11.625rem', // 170px
    CONTROL_HEIGHT: '6.5rem', // 72px ===> 6.5rem(104px)으로 바꾸면 가능
    MARGIN_BOTTOM: '1rem', // 16px
  },
  BUTTON: {
    HEIGHT: '2.875rem', // 46px
    BORDER_RADIUS: '0.9375rem', // 15px
  },
  IPUT: {
    MAX_WIDTH: '23.5625rem', // 377px
    MIN_HEIGHT: '3rem', // 48px
    PADDING: '1rem',
  },
  LOGINBUTTON: {
    MARGIN_TOP: '1rem', //16px
  },
} as const;

const FormWrapper = styled.form`
  width: 100%;
  max-width: ${STYLES.FORM.MAX_WIDTH};
  min-height: ${STYLES.FORM.MIN_HEIGHT};
  object-fit: fill;
`;

const StyledInput = styled(Input)`
  width: 100%;
  max-width: ${STYLES.IPUT.MAX_WIDTH};
  min-height: ${STYLES.IPUT.MIN_HEIGHT};
  border-radius: ${STYLES.BUTTON.BORDER_RADIUS};
  color: ${theme.colors.gray[300]};
  background: ${theme.colors.white};
  padding: 0 ${STYLES.IPUT.PADDING};
`;

const StyledStack = styled(Stack)`
  align: flex-start;
  width: 100%;
  max-width: ${STYLES.FORM.MAX_WIDTH};
`;

const StyledFormControl = styled(FormControl)`
  height: ${STYLES.FORM.CONTROL_HEIGHT};
  position: relative;
  margin-bottom: ${STYLES.FORM.MARGIN_BOTTOM};
`;

const StyledFormErrorMessage = styled(FormErrorMessage)`
  position: absolute;
  bottom: 0;
`;

const StyledLoginButtonDiv = styled.div`
  margin-top: ${STYLES.LOGINBUTTON.MARGIN_TOP};
`;

export interface LoginFormValues {
  email: string;
  password: string;
}

interface LoginFormProps {
  onSubmit: (data: LoginFormValues) => void;
}
export const LoginForm = ({ onSubmit }: LoginFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>();

  const handleFormSubmit: SubmitHandler<LoginFormValues> = (data) => {
    onSubmit(data);
  };

  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <StyledStack>
        <StyledFormControl isInvalid={!!errors.email}>
          <FormLabel>이메일</FormLabel>
          <StyledInput
            borderColor={theme.colors.primary}
            focusBorderColor={theme.colors.primary}
            color={theme.colors.gray[300]}
            background={theme.colors.white}
            placeholder="이메일을 입력해주세요."
            {...register('email', {
              required: '이메일을 입력해주세요',
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: '올바른 이메일 형식이 아닙니다',
              },
            })}
            type="email"
          />
          <StyledFormErrorMessage>{errors.email?.message}</StyledFormErrorMessage>
        </StyledFormControl>

        <StyledFormControl isInvalid={!!errors.password}>
          <FormLabel>비밀번호</FormLabel>
          <StyledInput
            borderColor={theme.colors.primary}
            focusBorderColor={theme.colors.primary}
            color={theme.colors.gray[300]}
            background={theme.colors.white}
            placeholder="비밀번호를 입력해주세요"
            {...register('password', {
              required: '비밀번호를 입력해주세요',
              minLength: {
                value: 8,
                message: '비밀번호는 8자 이상이어야 합니다',
              },
            })}
            type="password"
          />
          <StyledFormErrorMessage>{errors.password?.message}</StyledFormErrorMessage>
        </StyledFormControl>

        <StyledLoginButtonDiv>
          <LoginButton text="로그인" onClick={handleSubmit(handleFormSubmit)} />
        </StyledLoginButtonDiv>
      </StyledStack>
    </FormWrapper>
  );
};
