import theme from '@/styles/theme';
import { Button } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { RiKakaoTalkFill } from 'react-icons/ri';

const STYLES = {
  BUTTON: {
    MAX_WIDTH: '23.5625rem', //377px
    HEIGHT: '2.875rem', //46px
    FONT_SIZE: '1rem',
    BORDER_RADIUS: '0.9375rem', //15px
  },
} as const;

const StyledButton = styled(Button)`
  width: 100%;
  max-width: ${STYLES.BUTTON.MAX_WIDTH};
  height: ${STYLES.BUTTON.HEIGHT};
  font: ${theme.typography.fontFamily};
  border: none;
  font-size: ${STYLES.BUTTON.FONT_SIZE};
  font-weight: normal;
  border-radius: ${STYLES.BUTTON.BORDER_RADIUS};
  display: flex;
  justify-content: center;
  align-items: center;
`;

type KakaoLoginButtonProps = {
  text?: string;
  onClick?: () => void;
};

export const KakaoLoginButton = ({ text = '카카오 로그인', onClick }: KakaoLoginButtonProps) => {
  return (
    <StyledButton
      leftIcon={<RiKakaoTalkFill size='20px' />}
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
