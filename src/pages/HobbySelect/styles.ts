import theme from '@/styles/theme';
import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
  padding: 2rem 1rem;
  background-color: ${theme.colors.background};
  min-height: calc(100vh - 5.25rem);
  margin-bottom: 5.25rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LogoWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2.312rem;
`;

export const Title = styled.h1`
  width: 100%;
  font-size: 1.125rem;
  font-weight: bold;
  color: ${theme.colors.primary};
  text-align: center;
  margin-bottom: 4.875rem;
`;

export const CategoryContainer = styled.div`
  width: 100%;
`;
