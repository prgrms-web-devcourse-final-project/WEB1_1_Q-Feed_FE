import { type ReactNode, useState, useEffect } from 'react';
import {
  AnimatedSVG,
  Container,
} from '@/components/ui/QFeedLoadingSpinner/QFeedLoadingSpinner.styles';

type QFeedLoadingSpinnerProps = {
  children?: ReactNode;
  width?: string;
  height?: string;
};

export const QFeedLoadingSpinner = ({
  children,
  width = '50px',
  height = '50px',
}: QFeedLoadingSpinnerProps) => {
  const [currentFrame, setCurrentFrame] = useState(0);
  const frames = [
    '/src/assets/images/spinner1.svg',
    '/src/assets/images/spinner2.svg',
    '/src/assets/images/spinner3.svg',
    '/src/assets/images/spinner4.svg',
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentFrame((prevFrame) => (prevFrame + 1) % frames.length);
    }, 200);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Container>
      <AnimatedSVG src={frames[currentFrame]} alt="Loading Spinner" width={width} height={height} />
      {children}
    </Container>
  );
};
