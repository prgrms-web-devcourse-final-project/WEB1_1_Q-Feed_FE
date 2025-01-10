import styled from '@emotion/styled';
import theme from '@/styles/theme';

export const Container = styled.div`
  background: ${theme.colors.background};
  padding-bottom: 5.25rem; //footer-height
  min-height: 100vh;
  position: relative;
`;

export const CategorySection = styled.div`
  padding: 1rem 0;
  overflow-x: auto;
  white-space: nowrap;
  cursor: grab;
  user-select: none;

  &:active {
    cursor: grabbing;
  }

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

export const CategoryList = styled.div`
  display: flex;
  gap: 0.5rem;
  padding: 0 1rem;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.25rem;
  margin-top: 1.25rem;
  width: 100%;
  overflow-x: hidden;
`;

export const PostWrapper = styled.div`
  width: 100%;
  margin-top: 20px;
  margin-left: 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ProfileSlideWrapper = styled.div`
  width: 100%;
  padding: 0 25px;
`;

export const Title = styled.h1`
  width: 100%;
  font-family: ${theme.typography.header1.fontFamily};
  color: ${theme.colors.primary};
  font-size: 20px;
  font-weight: bold;
  text-align: left;
`;

export const CommentListWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
