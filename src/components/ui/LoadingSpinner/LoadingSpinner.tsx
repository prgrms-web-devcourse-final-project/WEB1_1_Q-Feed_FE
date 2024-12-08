import { SpinnerContainer } from './LoadingSpinner.styles';
import { ClockLoader } from 'react-spinners';
import theme from '@/styles/theme';

interface LoadingSpinnerProps {
  size?: number;
  color?: string;
}

const LoadingSpinner = ({ size = 40, color = theme.colors.primary }: LoadingSpinnerProps) => {
  return (
    <SpinnerContainer>
      <ClockLoader size={size} color={color} />
    </SpinnerContainer>
  );
};

export default LoadingSpinner;
