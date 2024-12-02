import theme from '@/styles/theme';
import { css } from '@emotion/react';

// 스타일 정의
export const containerStyle = css`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: ${theme.colors.background};
`;

export const headerStyle = css`
  position: relative;
  display: flex;
  align-items: center;
  padding: 16px 8px;
  background-color: ${theme.colors.white};
  border-bottom: 1px solid #ccc;
`;

export const backIconStyle = css`
  font-size: 24px;
  cursor: pointer;
  position: absolute;
`;

export const tabContainerStyle = css`
  display: flex;
  border-bottom: 1px solid #e0e0e0;
`;

export const tabStyle = css`
  flex: 1;
  padding: 10px;
  text-align: center;
  font-size: 16px;
  cursor: pointer;
  background-color: ${theme.colors.background};
  border: none;
  border-bottom: 2px solid transparent;
`;

export const activeTabStyle = css`
  font-weight: bold;
  border-bottom: 2px solid ${theme.colors.primary};
`;

export const listContainerStyle = css`
  flex: 1;
  padding: 10px;
  overflow-y: auto;
`;

export const listItemStyle = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #e0e0e0;
`;

export const nameStyle = css`
  margin-left: 10px;
  font-size: 16px;
  flex: 1;
`;

export const buttonGroupStyle = css`
  display: flex;
  gap: 8px;
`;

export const ButtonStyle = css`
  background-color: ${theme.colors.white};
  color: ${theme.colors.primary};
  border: none;
  border-radius: 16px;
  padding: 6px 12px;
  font-size: 14px;
  cursor: pointer;
`;
