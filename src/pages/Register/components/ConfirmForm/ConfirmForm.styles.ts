import theme from '@/styles/theme';
import styled from '@emotion/styled';

export const VerificationWrapper = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

export const VerificationButton = styled.button`
  padding: 0.5rem;
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
  border: none;
  border-radius: 0.9375rem;
  cursor: pointer;
  white-space: nowrap;
  height: 3rem;
  width: 4.9375rem;

  &:hover {
    background-color: ${theme.colors.gray[300]};
  }
`;
