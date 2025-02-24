import { STYLES } from '@/pages/Login/Constants/styles';
import styled from '@emotion/styled';
import theme from '@/styles/theme';

import { FormControl, FormErrorMessage, Input, Stack } from '@chakra-ui/react';

export const FormWrapper = styled.form`
  width: 100%;
  max-width: ${STYLES.FORM.MAX_WIDTH};
  min-height: ${STYLES.FORM.MIN_HEIGHT};
  object-fit: fill;
`;

export const StyledInput = styled(Input)`
  width: 100%;
  max-width: ${STYLES.INPUT.MAX_WIDTH};
  min-height: ${STYLES.INPUT.MIN_HEIGHT};
  border-radius: ${STYLES.BUTTONLOGINFORM.BORDER_RADIUS};
  color: ${theme.colors.gray[300]};
  background: ${theme.colors.white};
  padding: 0 ${STYLES.INPUT.PADDING};
`;

export const StyledStack = styled(Stack)`
  width: 100%;
  max-width: ${STYLES.FORM.MAX_WIDTH};
`;

export const StyledFormControl = styled(FormControl)`
  height: ${STYLES.FORM.CONTROL_HEIGHT};
  position: relative;
  margin-bottom: ${STYLES.FORM.MARGIN_BOTTOM};
`;

export const StyledFormErrorMessage = styled(FormErrorMessage)`
  position: absolute;
  bottom: 0;
`;

export const StyledLoginButtonDiv = styled.div`
  margin-top: ${STYLES.LOGINBUTTONLOGINFORM.MARGIN_TOP};
`;
