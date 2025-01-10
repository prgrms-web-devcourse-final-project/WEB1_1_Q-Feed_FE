import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const AnimatedSVG = styled.img<{ $width?: string; $height?: string }>`
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
  animation: pulse 1s infinite;

  @keyframes pulse {
    0% {
      transform: scale(0.9);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(0.9);
    }
  }
`;
