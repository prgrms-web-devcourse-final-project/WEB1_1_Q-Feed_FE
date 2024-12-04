import theme from '@/styles/theme';
import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const Title = styled.h2`
  font-family: ${theme.typography.fontFamily.korean};
  font-size: ${theme.typography.body1.size};
  font-weight: ${theme.typography.weights.semiBold};
  color: ${theme.colors.black};
  margin: 0;
`;

export const CreatorInfo = styled.p`
  font-family: ${theme.typography.fontFamily.korean};
  font-size: ${theme.typography.body3.size};
  color: ${theme.colors.gray[400]};
  margin: 0;
`;
