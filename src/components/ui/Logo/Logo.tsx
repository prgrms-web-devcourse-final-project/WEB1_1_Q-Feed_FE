import styled from '@emotion/styled';
import LogoImg from "../../../assets/images/qfeed-logo.svg";

type LogoProps = {
  width?: string | number;
  height?: string | number;
};

const Container = styled.img<{
  width?: string | number;
  height?: string | number;
}>`
  width: ${({ width }) => (typeof width === 'number' ? `${width}px` : width)};
  height: ${({ height }) => (typeof height === 'number' ? `${height}px` : height)};
  object-fit: contain;
`;

export const Logo = ({ width, height }: LogoProps) => {
  return (
    <Container
      src={LogoImg}
      width={width}
      height={height}
      alt="logo"
    />
  );
};