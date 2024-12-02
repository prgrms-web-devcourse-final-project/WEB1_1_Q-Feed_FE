import theme from '@/styles/theme';
import { css } from '@emotion/react';

export const containerStyle = css`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: ${theme.colors.background};
`;

export const headerStyle = css`
  padding: 10px;
  background-color: ${theme.colors.white};
`;
export const backIconStyle = css`
  font-size: 24px;
  cursor: pointer;
`;

export const listContainerStyle = css`
  flex: 1;
  overflow-y: auto;
  padding: 10px;
`;

export const listItemStyle = css`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 10px 0;
  border-bottom: 1px solid #ccc;
`;

export const nameStyle = css`
  margin-left: 24px;
  font-size: 16px;
`;

export const noResultStyle = css`
  text-align: center;
  color: #666;
  margin-top: 20px;
`;
