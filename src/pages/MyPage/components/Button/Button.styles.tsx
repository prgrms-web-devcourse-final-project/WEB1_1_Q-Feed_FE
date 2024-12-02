import styled from '@emotion/styled';
import theme from '@/styles/theme';

export const StyledButton = styled.button`
  flex: 1;
  padding: 0.625rem 1rem;
  background-color: ${theme.colors.white};
  color: ${theme.colors.gray[400]};
  border: none;
  border-radius: 1.875rem;
  font-family: ${theme.typography.fontFamily.korean};
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
    scale: 1.025;
  }
`;