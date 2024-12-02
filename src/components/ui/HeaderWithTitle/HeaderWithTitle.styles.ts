import theme from '@/styles/theme';
import styled from '@emotion/styled';

export const HeaderWithTitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${theme.colors.white};
`;

export const HeaderTitle = styled.h1`
  color: ${theme.colors.black};
  font-family: ${theme.typography.header2.fontFamily.korean};
  font-weight: ${theme.typography.header2.weight};
  font-size: ${theme.typography.header2.size};
  text-align: center;
  flex: 1;
`;
