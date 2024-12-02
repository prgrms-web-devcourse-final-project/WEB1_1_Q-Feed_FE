import styled from '@emotion/styled';
import { Button } from '@chakra-ui/react';
import theme from '@/styles/theme';
import { STYLES } from '@/pages/Login/Constants/styles';

export const StyledButton = styled(Button)<{ width: string }>`
  width: ${(props) => props.width};
  height: ${STYLES.LOGINBUTTON.HEIGHT};
  font: ${theme.typography.fontFamily};
  font-size: ${STYLES.LOGINBUTTON.FONT_SIZE};
  font-weight: normal;
  color: ${theme.colors.white};
  background: ${theme.colors.primary};
  border-radius: ${STYLES.LOGINBUTTON.BORDER_RADIUS};
  margin-bottom: ${STYLES.LOGINBUTTON.MARGIN_BOTTOM};
  margin-top: ${STYLES.LOGINBUTTON.MARGIN_TOP};
`;
