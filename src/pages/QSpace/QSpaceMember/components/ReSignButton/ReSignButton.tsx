import { StyledButton } from '@/pages/QSpace/QSpaceMember/components/ReSignButton/ReSignButton.styles';

interface ReSignButtonProps {
  onClick?: () => void;
  disabled?: boolean;
}

const ReSignButton = ({ onClick, disabled = false }: ReSignButtonProps) => {
  return (
    <StyledButton onClick={onClick} disabled={disabled}>
      내보내기
    </StyledButton>
  );
};

export default ReSignButton;
