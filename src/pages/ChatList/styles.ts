// 스타일 정의
import { css } from '@emotion/react';

export const chatListContainerStyle = css`
  padding: 0;
  height: 773px;
`;
export const chatListStyle = css`
  height: 100vh;
  background-color: #f9f3ec;

  border-bottom: 1px solid #ccc;
`;

export const chatItemStyle = css`
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 0.5px solid #ccc;
  cursor: pointer;

  &:hover {
    background-color: #f0e8dc;
  }
`;

export const chatContentStyle = css`
  flex: 1;
  margin-left: 10px;
`;

export const userNameStyle = css`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  font-weight: bold;
`;

export const timeStyle = css`
  color: #999;
  font-size: 12px;
`;

export const lastMessageStyle = css`
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: #666;
  margin-top: 4px;
`;

export const unreadCountStyle = css`
  background-color: #ff4d4f;
  color: #fff;
  font-size: 10px;
  padding: 2px 6px;
  border-radius: 12px;
  margin-left: 5px;
`;
