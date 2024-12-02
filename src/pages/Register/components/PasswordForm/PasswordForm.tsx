import {
  StyledFormControl,
  StyledFormErrorMessage,
  StyledInput,
} from '@/pages/Register/components/PasswordForm/PasswordForm.styles';
import { FormValues } from '@/pages/Register/type/formType';
import theme from '@/styles/theme';
import { FormLabel } from '@chakra-ui/react';
import { UseFormRegister, FieldErrors, UseFormWatch } from 'react-hook-form';
type PasswordFormProps = {
  register: UseFormRegister<FormValues>;

  errors: FieldErrors<FormValues>;
  type: 'password' | 'passwordConfirm';
  label: string;
  placeholder: string;
  watch: UseFormWatch<FormValues>; // watch 추가
};

export const PasswordForm = ({
  register,
  errors,
  type,
  label,
  placeholder,
  watch,
}: PasswordFormProps) => {
  const getValidationRules = (type: 'password' | 'passwordConfirm') => {
    const baseRules = {
      required: '비밀번호를 입력해주세요',
      minLength: {
        value: 8,
        message: '비밀번호는 8자 이상이어야 합니다',
      },
      pattern: {
        value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        message: '영문, 숫자, 특수문자를 포함해야 합니다',
      },
    };

    if (type === 'passwordConfirm') {
      return {
        required: '비밀번호 확인을 입력해주세요',
        validate: (value: string) => {
          const password = watch('password');
          return password === value || '비밀번호가 일치하지 않습니다.';
        },
      };
    }

    return baseRules;
  };

  return (
    <StyledFormControl isInvalid={!!errors[type]}>
      <FormLabel>{label}</FormLabel>
      <StyledInput
        borderColor={theme.colors.primary}
        focusBorderColor={theme.colors.primary}
        color={theme.colors.gray[300]}
        background={theme.colors.white}
        placeholder={placeholder}
        {...register(type, getValidationRules(type))}
        type="password"
      />
      <StyledFormErrorMessage>{errors[type]?.message?.toString()}</StyledFormErrorMessage>
    </StyledFormControl>
  );
};
