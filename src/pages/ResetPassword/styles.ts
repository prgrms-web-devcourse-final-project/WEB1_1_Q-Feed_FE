import theme from '@/styles/theme';
import styled from '@emotion/styled';
export const Container = styled.div`
  height: 100vh;
  background: ${theme.colors.background};
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 2rem 2rem 2px 2rem;
`;
