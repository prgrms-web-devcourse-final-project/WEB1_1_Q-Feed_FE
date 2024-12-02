import theme from '@/styles/theme';
import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 6rem);
  background-color: ${theme.colors.background};
  position: relative;
`;
export const MainContent = styled.div`
  flex: 1;
  overflow-y: auto;
  padding-bottom: 4rem; /* ChatInputWrapper 높이만큼 여백 추가 */
`;
export const NavigationBar = styled.div`
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${theme.colors.gray[100]};
`;
export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${theme.colors.gray[100]};
`;
export const KebabMenuWrapper = styled.div`
  padding-right: 1rem;
`;
export const ImageContainer = styled.div`
  width: 90%;
  height: 320px;
  background-color: ${theme.colors.gray[100]};
  overflow: hidden;
  border-radius: 1rem;
  margin: 0 auto;
  margin-bottom: 1rem;
`;
export const DiscussionImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export const ContentArea = styled.div`
  padding: 1rem;
`;
export const Content = styled.div`
  font-size: ${theme.typography.body2.size};
  color: ${theme.colors.black};
  white-space: pre-wrap;
  margin-bottom: 1rem;
`;
export const TagWrapper = styled.div`
  margin-top: 0.5rem;
`;
export const CommentArea = styled.div`
  padding: 0.5rem;
  background-color: ${theme.colors.white80};
  padding-bottom: calc(5rem + 12px);
`;
export const ChatInputWrapper = styled.div`
  position: fixed;
  bottom: 5rem; /* footer 높이만큼 위로 */
  left: 0;
  right: 0;
  background-color: ${theme.colors.white80};
  padding: 0.5rem;
  max-width: 430px;
  margin: 0 auto;
  z-index: 10;
`;
