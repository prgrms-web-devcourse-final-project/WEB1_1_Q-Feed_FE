import { css } from '@emotion/react';

// 컨테이너 스타일
export const containerStyle = css`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 377px;
  margin: 10px auto;
  border: 1px solid #ccc;
  border-radius: 16px;
  overflow: hidden;
`;

// 인풋 스타일
export const inputStyle = css`
  flex: 1;
  padding: 8px 12px;
  font-size: 16px;
  border: none;
  outline: none;

  &:focus {
    border-color: none;
  }
`;

// 돋보기 버튼 스타일
export const iconButtonStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  svg {
    font-size: 18px;
    color: black;
  }
`;
