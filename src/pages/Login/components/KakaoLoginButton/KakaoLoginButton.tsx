import { StyledButton } from '@/pages/Login/components/KakaoLoginButton/KakaoLoginButton.styles';
import theme from '@/styles/theme';
import { RiKakaoTalkFill } from 'react-icons/ri';

type KakaoLoginButtonProps = {
  text?: string;
  onClick?: () => void;
};

const KakaoLoginButton = ({ text = '카카오 로그인', onClick }: KakaoLoginButtonProps) => {
  return (
    <StyledButton
      leftIcon={<RiKakaoTalkFill size="20px" />}
      backgroundColor={theme.colors.kakao}
      _hover={{
        backgroundColor: theme.colors.kakao,
        opacity: 0.7,
        color: theme.colors.black,
      }}
      sx={{
        '.chakra-button__icon': {
          position: 'absolute',
          left: '1rem',
        },
      }}
      onClick={onClick}
    >
      {text}
    </StyledButton>
  );
};

export default KakaoLoginButton;
