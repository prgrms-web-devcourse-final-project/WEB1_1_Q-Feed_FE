import { HiOutlineBell } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import Logo from '@/assets/qfeed-logo.svg?react';
import {
  StyledHeader,
  LogoWrapper,
  Title,
  RightSection,
  IconButton,
} from '@/pages/MyPage/components/Header/Header.styles';

interface HeaderProps {
  profileImage?: string;
  className?: string;
  title?: string;
}

const Header = ({ className, title }: HeaderProps) => {
  const navigate = useNavigate();

  const onLogoClick = () => {
    navigate('/main');
  };

  const handleNotificationClick = () => {
    navigate('/alarm');
  };

  return (
    <StyledHeader className={className}>
      <LogoWrapper onClick={onLogoClick}>
        <Logo />
      </LogoWrapper>
      <Title>{title}</Title>
      <RightSection>
        <IconButton onClick={handleNotificationClick} aria-label="알림">
          <HiOutlineBell size={28} />
        </IconButton>
      </RightSection>
    </StyledHeader>
  );
};

export default Header;
