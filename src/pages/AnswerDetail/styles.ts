import styled from '@emotion/styled';
import theme from '@/styles/theme';

export const Container = styled.div`
  padding-bottom: calc(5.25rem + 84px);
  min-height: 100vh;
  position: relative;
  overflow-x: hidden;
`;

export const Header = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
  background-color: ${theme.colors.white};
`;

export const Title = styled.h1`
  font-family: ${theme.typography.header2.fontFamily.korean};
  font-size: ${theme.typography.header2.size};
  font-weight: ${theme.typography.header2.weight};
  line-height: ${theme.typography.header2.lineHeight};
  color: ${theme.colors.black};
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const Body = styled.div`
  width: 100%;
  background-color: ${theme.colors.background};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1.25rem;
`;

export const PostWrapper = styled.div`
  margin-top: 2.5rem;
  width: 100%;
  padding: 0.75rem 1rem;
  border-bottom: 0.0625rem solid ${theme.colors.gray[300]};
`;

export const CommentHeader = styled.div`
  display: flex;
  width: 100%;
  padding: 0.9375rem 1.5625rem;
  border-bottom: 1px solid ${theme.colors.gray[300]};
  background-color: ${theme.colors.white80};
`;

export const TextComment = styled.p`
  font-family: ${theme.typography.fontFamily.korean};
  font-weight: ${theme.typography.weights.regular};
  font-size: 0.875rem;
  color: ${theme.colors.gray[600]};
`;

export const TextCommentCount = styled.p`
  font-family: ${theme.typography.fontFamily.english.header};
  font-weight: ${theme.typography.weights.regular};
  font-size: 0.875rem;
  color: ${theme.colors.gray[600]};
`;

export const CommentListWrapper = styled.div`
  width: 100%;
  padding: 1.25rem 0;
  background-color: ${theme.colors.white80};
`;

export const MessageBoxWrapper = styled.div`
  position: fixed;
  bottom: 5.25rem;
  left: 0;
  right: 0;
  width: 100%;
  max-width: 26.875rem;
  margin: 0 auto;
  background-color: ${theme.colors.white};
  padding: 0.625rem 0;
  border-top: 0.0625rem solid ${theme.colors.gray[300]};
`;
