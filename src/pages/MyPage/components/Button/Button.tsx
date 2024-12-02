import { StyledButton } from '@/pages/MyPage/components/Button/Button.styles';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void; // 클릭 이벤트 핸들러
}

const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <StyledButton onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
