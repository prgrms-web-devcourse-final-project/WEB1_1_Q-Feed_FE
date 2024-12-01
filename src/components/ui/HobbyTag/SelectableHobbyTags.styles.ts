import styled from '@emotion/styled';
import theme from '@/styles/theme';

export const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

export const Tag = styled.button<{ isSelected: boolean }>`
  padding: 0.5rem 1rem;
  border-radius: 3.125rem;
  border: ${({ isSelected }) =>
    isSelected ? `1px solid ${theme.colors.primary}` : `1px solid ${theme.colors.gray[300]}`};
  background-color: ${({ isSelected }) => (isSelected ? theme.colors.primary : 'transparent')};
  color: ${({ isSelected }) => (isSelected ? theme.colors.white : theme.colors.gray[300])};
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    color: ${theme.colors.white};
    border-color: ${theme.colors.gray[300]};
    background-color: ${theme.colors.gray[300]};
  }
`;
