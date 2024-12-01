import styled from '@emotion/styled';
import theme from '@/styles/theme';

export const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

export const Tag = styled.span`
  padding: 0.3rem 0.5rem;
  border-radius: 3.125rem;
  border: none;
  background-color: ${theme.colors.sub};
  color: ${theme.colors.gray[400]};
  font-size: 0.75rem;
  font-weight: bold;
`;