import LogoImg from '../../../assets/images/qfeed-logo.svg';
import { Container } from '@/components/ui/Logo/Logo.styles';

type LogoProps = {
  width?: string | number;
  height?: string | number;
};

export const Logo = ({ width, height }: LogoProps) => {
  return <Container src={LogoImg} width={width} height={height} alt="logo" />;
};
