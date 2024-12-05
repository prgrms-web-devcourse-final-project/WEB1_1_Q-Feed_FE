import { useNavigate } from 'react-router-dom';
import { Button } from '@/pages/QSpace/QSpaceDetail/components/MemberListButton/MemberListButton.styles';

interface MemberListButtonProps {
  onClick?: () => void;
  className?: string;
}

const MemberListButton = ({ className }: MemberListButtonProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/qspace/member');
  };

  return (
    <Button onClick={handleClick} className={className}>
      멤버 관리
    </Button>
  );
};

export default MemberListButton;
