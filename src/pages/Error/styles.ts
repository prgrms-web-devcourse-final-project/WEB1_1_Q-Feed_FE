import styled from '@emotion/styled';
import theme from '@/styles/theme';

export const Container = styled.div`
  margin: 0 auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1rem;
  background-color: ${theme.colors.background};
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const Title = styled.h1`
  font-family: ${theme.typography.title1.fontFamily.korean};
  font-size: ${theme.typography.title1.size};
  font-weight: ${theme.typography.weights.semiBold};
  color: ${theme.colors.primary};
  margin-top: 1rem;
  margin-bottom: 0.5rem;
`;

export const Description = styled.p`
  font-family: ${theme.typography.body2.fontFamily.korean};
  font-size: ${theme.typography.body2.size};
  color: ${theme.colors.gray[400]};
  margin-bottom: 2rem;
`;
