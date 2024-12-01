import theme from '@/styles/theme';
import { StyledButton } from '@/pages/Profile/components/Button.styles';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  backgroundColor?: string;
  textColor?: string;
}

const Button = ({
  children,
  onClick,
  backgroundColor = theme.colors.white,
  textColor = theme.colors.gray[400],
}: ButtonProps) => {
  return (
    <StyledButton onClick={onClick} backgroundColor={backgroundColor} textColor={textColor}>
      {children}
    </StyledButton>
  );
};

export default Button;
