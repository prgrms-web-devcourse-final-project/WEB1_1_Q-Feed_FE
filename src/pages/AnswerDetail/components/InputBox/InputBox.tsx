import { Container, StyledInput } from '@/pages/AnswerDetail/components/InputBox/InputBox.styles';
import theme from '@/styles/theme';

type InputBoxProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onEnter?: (value: string) => void;
};

export const InputBox = ({ value, onChange, onEnter }: InputBoxProps) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && onEnter) {
      onEnter(value);
    }
  };

  return (
    <Container>
      <StyledInput
        focusBorderColor={theme.colors.primary}
        value={value}
        onChange={onChange}
        onKeyDown={handleKeyDown}
        placeholder="메시지를 입력하세요"
      />
    </Container>
  );
};
