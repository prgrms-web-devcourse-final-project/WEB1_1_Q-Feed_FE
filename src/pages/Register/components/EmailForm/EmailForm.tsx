import {
  VerificationButton,
  VerificationWrapper,
} from '@/pages/Register/components/ConfirmForm/ConfirmForm.styles';
import { StyledFormControl, StyledFormErrorMessage, StyledInput } from '@/pages/Register/styles';
import { FormValues } from '@/pages/Register/type/formType';
import theme from '@/styles/theme';
import { FormLabel } from '@chakra-ui/react';
import { UseFormRegister, FieldErrors } from 'react-hook-form';

type EmailFormProps = {
  register: UseFormRegister<FormValues>;
  errors: FieldErrors<FormValues>;
  onVerify: () => void;
};

export const EmailForm = ({ register, errors, onVerify }: EmailFormProps) => {
  return (
    <StyledFormControl isInvalid={!!errors.email}>
      <FormLabel>이메일</FormLabel>
      <VerificationWrapper>
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
        <VerificationButton type="button" onClick={onVerify}>
          전송하기
        </VerificationButton>
      </VerificationWrapper>
      <StyledFormErrorMessage>{errors.email?.message}</StyledFormErrorMessage>
    </StyledFormControl>
  );
};
