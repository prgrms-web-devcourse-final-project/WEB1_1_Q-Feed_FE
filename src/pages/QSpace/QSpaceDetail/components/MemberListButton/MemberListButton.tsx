import { Button } from '@/pages/QSpace/QSpaceDetail/components/MemberListButton/MemberListButton.styles';

interface MemberListButtonProps {
  onClick?: () => void;
  className?: string;
}

const MemberListButton = ({ onClick, className }: MemberListButtonProps) => {
  return (
    <Button onClick={onClick} className={className}>
      멤버 목록
    </Button>
  );
};

export default MemberListButton;
