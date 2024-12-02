import theme from '@/styles/theme';
import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 56px); // footer height 제외
  max-width: 430px;
  margin: 0 auto;
  background-color: ${theme.colors.background};
  position: relative;
`;

export const HeaderSection = styled.header`
  padding: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: ${theme.colors.background};
`;

export const ContentSection = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  margin-top: 2rem;
`;

export const ButtonSection = styled.div`
  padding: 1rem;
  margin-bottom: 2rem;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 1.125rem;
  font-weight: 600;
  margin: 1rem 0 5rem;
  color: ${theme.colors.black};
`;
