import styled from '@emotion/styled';
import theme from '@/styles/theme';

interface FloatingButtonProps {
  onClick?: () => void;
  className?: string;
}

const StyledButton = styled.button`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background-color: ${theme.colors.primary};
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  right: 1.5rem;
  bottom: 1.5rem;
  box-shadow: 0 4px 8px rgba(157, 111, 112, 0.2), 0 2px 4px rgba(157, 111, 112, 0.1);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(157, 111, 112, 0.2), 0 4px 6px rgba(157, 111, 112, 0.1);
  }
`;

const PlusIcon = styled.div`
  width: 1rem;
  height: 1rem;
  position: relative;

  &:before,
  &:after {
    content: '';
    position: absolute;
    background-color: ${theme.colors.white};
    border-radius: 2px;
  }

  &:before {
    width: 16px;
    height: 2px;
    top: 7px;
    left: 0;
  }

  &:after {
    width: 2px;
    height: 16px;
    left: 7px;
    top: 0;
  }
`;

const FloatingButton = ({ onClick, className }: FloatingButtonProps) => {
  return (
    <StyledButton onClick={onClick} className={className} aria-label='Add new item'>
      <PlusIcon />
    </StyledButton>
  );
};

export default FloatingButton;
