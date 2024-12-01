import theme from '@/styles/theme';
import { css } from '@emotion/react';

// 컨테이너 스타일
export const containerStyle = (size: number, bgColor: string) => css`
  width: ${size}px;
  height: ${size}px;
  background-color: ${bgColor};
  border-radius: 50%; /* 동그란 모양 */
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

// 이미지 스타일
export const imageStyle = (size: number) => css`
  width: ${size}px;
  height: ${size}px;
  object-fit: cover;
`;

// 아이콘 스타일
export const iconStyle = () => css`
  width: 80%;
  height: 80%;
  color: ${theme.colors.gray[100]};
`;
