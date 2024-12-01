import { STYLES } from '@/pages/Login/Constants/styles';
import theme from '@/styles/theme';
import { FormControl, FormErrorMessage, Input } from '@chakra-ui/react';
import styled from '@emotion/styled';

export const Container = styled.div`
  background: ${theme.colors.background};
  height: 100vh;
`;

export const StyledFormControl = styled(FormControl)`
  height: ${STYLES.FORM.CONTROL_HEIGHT};
  position: relative;
`;

export const StyledInput = styled(Input)`
  height: 3rem;
  color: ${theme.colors.gray[300]};
  font-size: 1rem;
  border-radius: 0.9375rem;
  padding: 0 1rem;
  border: 0.0625rem solid
    ${(props) => (props.isInvalid ? theme.colors.notice : theme.colors.gray[300])};
  background: ${theme.colors.white};

  &:focus {
    border-color: ${(props) => (props.isInvalid ? theme.colors.notice : theme.colors.primary)};
    box-shadow: 0 0 0 0.0625rem;
    ${(props) => (props.isInvalid ? theme.colors.notice : theme.colors.primary)};
  }
`;

export const StyledFormErrorMessage = styled(FormErrorMessage)`
  position: absolute;
  bottom: 0;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 2rem 2rem 2px 2rem;
`;

export const TextWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const Text = styled.p`
  font-family: ${theme.typography.fontFamily.korean};
  font-size: 1rem;
  color: ${theme.colors.gray[600]};
  font-weight: normal;
`;

export const TextButton = styled.p`
  font-family: ${theme.typography.fontFamily.korean};
  font-size: 1rem;
  color: ${theme.colors.gray[600]};
  font-weight: normal;
  cursor: pointer;

  &:hover {
    font-weight: bold;
    text-decoration-line: underline;
  }
`;
