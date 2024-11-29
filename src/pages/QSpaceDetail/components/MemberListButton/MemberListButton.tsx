import styled from '@emotion/styled';
import theme from '@/styles/theme';

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

const Button = styled.button`
  background-color: ${theme.colors.sub};
  color: ${theme.colors.gray[500]};
  border: none;
  border-radius: 6rem;
  padding: 0.5rem 0.75rem;
  font-family: ${theme.typography.fontFamily.korean};
  font-size: ${theme.typography.body2.size};
  font-weight: ${theme.typography.weights.medium};
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${theme.colors.gray[100]};
  }

  &:active {
    transform: scale(0.98);
  }
`;

export default MemberListButton;
