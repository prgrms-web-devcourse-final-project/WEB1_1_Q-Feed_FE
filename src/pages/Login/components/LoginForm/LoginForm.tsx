import LoginButton from '@/pages/Login/components/LoginButton/LoginButton';
import {
  FormWrapper,
  StyledFormControl,
  StyledFormErrorMessage,
  StyledInput,
  StyledLoginButtonDiv,
  StyledStack,
} from '@/pages/Login/components/LoginForm/LoginForm.styles';
import { LoginRequest } from '@/pages/Login/types/auth';
import theme from '@/styles/theme';
import { FormLabel } from '@chakra-ui/react';
import { useForm, SubmitHandler } from 'react-hook-form';

interface LoginFormProps {
  onSubmit: (data: LoginRequest) => void;
}
export const LoginForm = ({ onSubmit }: LoginFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginRequest>();

  const handleFormSubmit: SubmitHandler<LoginRequest> = (data) => {
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
