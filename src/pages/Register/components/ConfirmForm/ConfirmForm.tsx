import {
  VerificationButton,
  VerificationWrapper,
} from '@/pages/Register/components/ConfirmForm/ConfirmForm.styles';
import { StyledFormControl, StyledFormErrorMessage, StyledInput } from '@/pages/Register/styles';
import { FormLabel } from '@chakra-ui/react';
import { UseFormRegister, FieldErrors } from 'react-hook-form';
import { FormValues } from '@/pages/Register/type/formType';

type ConfirmFormProps = {
  register: UseFormRegister<FormValues>;
  errors: FieldErrors<FormValues>;
  onVerify: () => void;
};

export const ConfirmForm = ({ register, errors, onVerify }: ConfirmFormProps) => {
  return (
    <StyledFormControl isInvalid={!!errors.verificationCode}>
      <FormLabel>인증번호</FormLabel>
      <VerificationWrapper>
        <StyledInput
          {...register('verificationCode', {
            required: '인증번호를 입력해주세요',
            pattern: {
              value: /^[a-zA-Z0-9]*$/,
              message: '올바른 인증번호 형식이 아닙니다',
            },
          })}
          placeholder="인증번호를 입력해 주세요"
          maxLength={6}
        />
        <VerificationButton type="button" onClick={onVerify}>
          인증하기
        </VerificationButton>
      </VerificationWrapper>
      <StyledFormErrorMessage>
        {errors.verificationCode?.message?.toString()}
      </StyledFormErrorMessage>
    </StyledFormControl>
  );
};
