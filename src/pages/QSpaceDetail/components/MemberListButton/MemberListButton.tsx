import { Button } from '@/pages/QSpaceDetail/components/MemberListButton/MemberListButton.styles';

interface MemberListButtonProps {
  onClick?: () => void;
  className?: string;
}

const MemberListButton = ({ onClick, className }: MemberListButtonProps) => {
  return (
    <Button onClick={onClick} className={className}>
      멤버 관리
    </Button>
  );
};

export default MemberListButton;
