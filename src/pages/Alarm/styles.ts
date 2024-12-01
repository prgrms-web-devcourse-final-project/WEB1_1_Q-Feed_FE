import { css } from '@emotion/react';

// 스타일 정의
export const containerStyle = css`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #f9f4ef;
`;

export const headerStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 10px 15px;
  background-color: #ffffff;
  border-bottom: 1px solid #ccc;
`;
export const readWrap = css`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: space-between;
  padding-right: 12px;
`;

export const backIconStyle = css`
  position: absolute;
  left: 15px;
  font-size: 24px;
  cursor: pointer;
`;

export const headerTitleStyle = css`
  font-size: 18px;
  font-weight: bold;
`;

export const markAllAsReadStyle = css`
  font-size: 14px;
  border-radius: 16px;
  padding: 6px;
  color: #b9a298;
  background-color: #f3ebe1;
  cursor: pointer;
`;

export const unreadCountStyle = css`
  padding: 10px 15px;
  font-size: 14px;
  color: #666;
`;

export const listStyle = css`
  flex: 1;
  overflow-y: auto;
  background-color: #f9f3ec;
`;

export const listCon = css`
  background-color: #f3ebe1;
  padding: 8px;
  height: 80px;
  border-bottom: 1px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

export const listConRead = css`
  background-color: #f9f4ef; /* 읽음 처리된 배경 색 */
`;

export const notificationContentStyle = css`
  flex: 1;
  margin-left: 8px;
`;

export const notificationTypeStyle = css`
  font-size: 12px;
  color: #999;
`;

export const notificationMessageStyle = css`
  margin-top: 4px;
  font-size: 14px;
  color: #333;
`;

export const timeStyle = css`
  font-size: 12px;
  color: #999;
`;
