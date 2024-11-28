import styled from '@emotion/styled';
import { Button } from '@chakra-ui/react';
import theme from '@/styles/theme';

const STYLES = {
  BUTTON : {
    HEIGHT : '2.875rem',         //46px
    FONT_SIZE : '1rem',          //16px
    BORDER_RADIUS : '0.9375rem', //15px
    MARGIN_BOTTOM : '1rem',
    MARGIN_TOP : '1rem'
  }
}


const StyledButton = styled(Button)<{width : string}>`
  width : ${props =>props.width};
  height : ${STYLES.BUTTON.HEIGHT};
  font : ${theme.typography.fontFamily};
  font-size : ${STYLES.BUTTON.FONT_SIZE};
  font-weight : normal;
  color : ${theme.colors.white};
  background : ${theme.colors.primary};
  border-radius : ${STYLES.BUTTON.BORDER_RADIUS};
  margin-bottom : ${STYLES.BUTTON.MARGIN_BOTTOM};
  margin-top : ${STYLES.BUTTON.MARGIN_TOP};
`;

type LoginButtonProps = {
  text : string;
  width?: string;
  onClick?:()=>void;
};

export const LoginButton = ({ text, width="100%"  , onClick }: LoginButtonProps) => {
  return (
    <StyledButton
      type="submit"
      width={width}
      onClick={onClick}
      _hover={{
        backgroundColor: theme.colors.primary,
        opacity: 0.7,
        color : theme.colors.black
    }}>{text}</StyledButton>
  );
};

