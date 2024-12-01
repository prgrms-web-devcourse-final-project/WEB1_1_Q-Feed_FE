import styled from '@emotion/styled';

export const Container = styled.img<{
  width?: string | number;
  height?: string | number;
}>`
  width: ${({ width }) => (typeof width === 'number' ? `${width}px` : width)};
  height: ${({ height }) => (typeof height === 'number' ? `${height}px` : height)};
  object-fit: contain;
`;
