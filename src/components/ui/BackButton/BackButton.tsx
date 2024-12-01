import { useNavigate } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import { Button } from '@/components/ui/BackButton/BackButton.styles';

interface BackButtonProps {
  width?: string;
  height?: string;
}

const BackButton = ({ width = '2.5rem', height = '2.5rem' }: BackButtonProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  return (
    <Button onClick={handleClick} width={width} height={height}>
      <IoIosArrowBack />
    </Button>
  );
};

export default BackButton;
