import { STYLES } from '@/pages/Login/Constants/styles';
import theme from '@/styles/theme';
import { Button } from '@chakra-ui/react';
import styled from '@emotion/styled';

export const StyledButton = styled(Button)`
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
