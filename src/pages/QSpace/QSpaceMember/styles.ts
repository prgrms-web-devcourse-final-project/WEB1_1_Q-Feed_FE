import styled from '@emotion/styled';
import theme from '@/styles/theme';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${theme.colors.background};
`;

export const Header = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  padding: 16px;
  background-color: ${theme.colors.white};
  z-index: 10;
  border-bottom: 1px solid ${theme.colors.gray[100]};
`;

export const HeaderTitle = styled.h2`
  font-family: ${theme.typography.header2.fontFamily.korean};
  color: ${theme.colors.black};
  margin-left: 8px;
`;

export const ContentContainer = styled.main`
  flex: 1;
  padding: 1rem 1rem 5rem; // 하단에 80px의 여백을 추가하여 footer와 겹치지 않도록 함
  overflow-y: auto;
  background-color: ${theme.colors.background};
`;
