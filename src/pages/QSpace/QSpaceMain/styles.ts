import theme from '@/styles/theme';
import styled from '@emotion/styled';

export const Container = styled.div`
  margin: 0 auto;
`;

export const Body = styled.div`
  padding: 0 1rem;
  background-color: ${theme.colors.background};
  height: 100%;
`;

export const CategorySection = styled.div`
  padding: 1rem 0;
  overflow-x: auto;
  white-space: nowrap;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const CategoryList = styled.div`
  display: flex;
  gap: 0.5rem;
  padding: 0 1rem;
`;

export const FilterSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0;
`;

export const Title = styled.h2`
  font-size: 1.25rem;
  font-weight: bold;
  margin: 1rem 0;
  color: ${theme.colors.black};
`;

export const QSpaceList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-bottom: 6rem;
`;

export const LoadingWrapper = styled.div`
  width: 100%;
  text-align: center;
  padding: 2rem;
  color: ${({ theme }) => theme.colors.gray[600]};
  font-size: ${({ theme }) => theme.typography.fontFamily.korean};
`;
