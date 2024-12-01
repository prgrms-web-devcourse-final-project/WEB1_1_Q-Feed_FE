import { type ReactNode } from 'react';
import theme from '@/styles/theme';
import { Container, StyledInput, Title } from '@/pages/Login/InputForm/InputForm.styles';

type InputFormProps = {
  title: string;
  placeholder: string;
  value: string;
  type?: string;
  isInvalid?: boolean;
  errorMessage?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  children?: ReactNode;
};

const InputForm = ({
  title,
  placeholder,
  value,
  type = 'text',
  isInvalid,
  errorMessage,
  onChange,
  children,
}: InputFormProps) => {
  return (
    <Container>
      {children}
      <Title>{title}</Title>
      <StyledInput
        type={type}
        value={value}
        onChange={onChange}
        placeholder={isInvalid ? errorMessage : placeholder}
        isInvalid={isInvalid}
        focusBorderColor={theme.colors.primary}
        errorBorderColor={theme.colors.notice}
        _placeholder={{ color: isInvalid ? theme.colors.notice : theme.colors.gray[300] }}
      />
    </Container>
  );
};

export default InputForm;
