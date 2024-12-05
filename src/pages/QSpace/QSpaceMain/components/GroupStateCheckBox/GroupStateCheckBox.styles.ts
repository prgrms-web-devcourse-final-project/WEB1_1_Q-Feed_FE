import styled from '@emotion/styled';
import theme from '@/styles/theme';

export const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const StyledTitle = styled.span`
  color: ${theme.colors.gray[400]};
  font-family: ${theme.typography.body2.fontFamily};
  font-size: ${theme.typography.body2.size};
  font-weight: ${theme.typography.body2.weight};
  line-height: ${theme.typography.body2.lineHeight};
`;
