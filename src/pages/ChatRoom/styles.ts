import { css } from '@emotion/react';
import theme from '@/styles/theme';
// 스타일 정의
export const iconButtonStyle = css`
  background: none;
  border: none;
  cursor: pointer;
`;

export const iconStyle = css`
  font-size: 24px;
`;
export const chatRoomContainer = css`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const headerStyle = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 15px;
  background-color: #ffffff;
  border-bottom: 1px solid #e0e0e0;
`;

export const headerTitle = css`
  margin-left: 10px;
  font-family: ${theme.typography.header2.fontFamily.korean};
  font-weight: bold;
`;
export const backIconStyle = css`
  font-size: 24px;
  cursor: pointer;
`;

export const messageListStyle = css`
  flex: 1;
  padding: 10px;
  overflow-y: auto;
  background-color: ${theme.colors.background};
`;
/* export const messageContainerStyle = css`
  flex: 1;
  overflow-y: 'auto';
  background-color: ${theme.colors .background};
`; */
export const otherMessageStyle = css`
  display: flex;
  align-items: flex-start;
  margin-bottom: 10px;
  gap: 10px; /* 프로필 이미지와 메시지 사이 간격 */
`;

export const myMessageStyle = css`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;
  gap: 10px; /* 메시지와 시간 간 간격 */
`;

export const messageContentStyle = css`
  max-width: 70%;
  background-color: ${theme.colors.white};
  border-radius: 10px;
  padding: 10px;
  font-size: 14px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
`;

export const timeStyleLeft = css`
  font-size: 12px;
  color: ${theme.colors.gray[300]};
  align-self: flex-end;
  margin-left: 10px; /* 메시지와 시간 간 간격 */
`;

export const timeStyleRight = css`
  font-size: 12px;
  color: ${theme.colors.gray[300]};
  align-self: flex-end;
  margin-right: 10px; /* 메시지와 시간 간 간격 */
`;

export const inputBarStyle = css`
  margin: 8px;
`;
