import { StyledButton } from '@/pages/Register/components/LoginButton/LoginButton.styles';
import theme from '@/styles/theme';

type LoginButtonProps = {
  text: string;
  width?: string;
  onClick?: () => void;
};

const LoginButton = ({ text, width = '100%', onClick }: LoginButtonProps) => {
  return (
    <StyledButton
      type="submit"
      width={width}
      onClick={onClick}
      _hover={{
        backgroundColor: theme.colors.primary,
        opacity: 0.7,
        color: theme.colors.black,
      }}
    >
      {text}
    </StyledButton>
  );
};

export default LoginButton;
