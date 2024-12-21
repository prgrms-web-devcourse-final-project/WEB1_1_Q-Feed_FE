import styled from '@emotion/styled';
import theme from '@/styles/theme';

export const Container = styled.div`
  padding: 1.5rem 1rem;
  background-color: ${theme.colors.background};
  min-height: calc(100vh - 3.75rem);
  padding-bottom: 5.25rem;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 1.25rem;
  margin-bottom: 1.25rem;
`;

export const TabContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  border-bottom: 1px solid #ddd;
`;

export const Tab = styled.button<{ isActive: boolean }>`
  flex: 1;
  padding: 0.75rem;
  font-size: 1.125rem;
  font-weight: bold;
  background: none;
  border: none;
  border-bottom: ${({ isActive }) => (isActive ? `2px solid ${theme.colors.primary}` : 'none')};
  color: ${({ isActive }) => (isActive ? theme.colors.primary : theme.colors.gray[300])};
  font-family: ${theme.typography.fontFamily.korean};
  cursor: pointer;

  &:hover {
    color: ${theme.colors.primary};
  }
`;

export const Content = styled.div`
  padding: 1rem 0;
`;

export const QuestionList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const QSpaceList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const MoreText = styled.span`
   font-family: ${theme.typography.fontFamily.korean};
   color: ${theme.colors.primary};
   font-weight: bold;
`;
