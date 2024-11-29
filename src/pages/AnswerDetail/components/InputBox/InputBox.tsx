import styled from '@emotion/styled';
import { Input } from '@chakra-ui/react';
import theme from '@/styles/theme';

type InputBoxProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const InputBox = ({ value, onChange }: InputBoxProps) => {
  return (
    <Container>
      <StyledInput
        focusBorderColor={theme.colors.primary}
        value={value}
        onChange={onChange}
        placeholder="메시지를 입력하세요"
      />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 64px;
  background: ${theme.colors.white};
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledInput = styled(Input)`
  border-radius: 30px;
  font-size: 16px;
  height: 48px;
  border: 1px solid ${theme.colors.gray[300]};

  font-family: ${theme.typography.fontFamily.korean};
  color: ${theme.colors.gray[300]};

  &:focus {
    color: ${theme.colors.black};
  }
`;
