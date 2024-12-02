import { StyledButton } from '@/pages/Login/components/LoginButton/LoginButton.styles';
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
        backgroundColor: theme.colors.gray[300],
      }}
    >
      {text}
    </StyledButton>
  );
};

export default LoginButton;
