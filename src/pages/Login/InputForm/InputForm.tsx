import { type ReactNode } from 'react';
import styled from '@emotion/styled';
import { Input } from '@chakra-ui/react'
import theme from '@/styles/theme';

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

export const InputForm = ({
  title,
  placeholder,
  value,
  type = "text",
  isInvalid,
  errorMessage,
  onChange,
  children
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
        errorBorderColor={theme.colors.red}
        _placeholder={{ color: isInvalid ? theme.colors.red : theme.colors.gray[300] }}
      />
    </Container>
  );
};

const Container = styled.div`

`;

const Title = styled.h1`
  font-size: ${theme.typography.body1.size};
  line-height: ${theme.typography.body1.lineHeight};
  font-weight: ${theme.typography.body1.weight};
  text-align: left;
  margin-bottom : 15px;
`;


const StyledInput = styled(Input)`
  width : 100%;
  min-width : 377px;
  height : 56px;
  color : ${theme.colors.gray[300]};
  font-size : 1rem;
  border-radius : 15px;
  padding : 0 1rem;
  border: 1px solid ${props => props.isInvalid ? theme.colors.red : theme.colors.gray[300]};

  &:focus {
    border-color: ${props => props.isInvalid ? theme.colors.red : theme.colors.primary};
    box-shadow: 0 0 0 1px ${props => props.isInvalid ? theme.colors.red : theme.colors.primary};
  }

`;