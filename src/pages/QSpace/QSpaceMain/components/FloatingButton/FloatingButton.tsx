import {
  PlusIcon,
  StyledButton,
} from '@/pages/QSpace/QSpaceMain/components/FloatingButton/FloatingButton.styles';
import { useNavigate } from 'react-router-dom';

interface FloatingButtonProps {
  onClick?: () => void;
  className?: string;
}

const FloatingButton = ({ className }: FloatingButtonProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/qspace/category');
  };

  return (
    <StyledButton onClick={handleClick} className={className} aria-label="Add new item">
      <PlusIcon />
    </StyledButton>
  );
};

export default FloatingButton;
