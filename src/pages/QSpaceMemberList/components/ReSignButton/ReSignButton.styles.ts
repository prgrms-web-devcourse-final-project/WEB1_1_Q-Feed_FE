import theme from '@/styles/theme';
import styled from '@emotion/styled';

export const StyledButton = styled.button`
  padding: 0.5rem 0.5rem;
  background-color: ${theme.colors.notice};
  color: ${theme.colors.white};
  font-weight: ${theme.typography.weights.semiBold};
  border-radius: 16px;
  border: none;
  transition: background-color 0.2s ease;
  cursor: pointer;

  &:active {
    background-color: #b91c1c;
  }
`;
