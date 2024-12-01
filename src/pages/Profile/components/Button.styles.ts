import styled from '@emotion/styled';
import theme from '@/styles/theme';

export const StyledButton = styled.button<{ backgroundColor: string; textColor: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 3rem;
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ textColor }) => textColor};
  border: none;
  border-radius: 1.875rem;
  font-family: ${theme.typography.fontFamily.english};
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    scale: 1.05;
  }
`;
