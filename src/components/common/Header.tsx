import { IoSearch } from 'react-icons/io5';
import { HiOutlineBell } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import Logo from '@/assets/qfeed-logo.svg?react';
import {
  IconButton,
  LogoWrapper,
  RightSection,
  StyledHeader,
} from '@/components/common/Header.styles';

interface HeaderProps {
  onSearchClick?: () => void;
  onLogoClick?: () => void;
  profileImage?: string;
  className?: string;
}

const Header = ({ onSearchClick, onLogoClick, className }: HeaderProps) => {
  const navigate = useNavigate();

  const handleNotificationClick = () => {
    navigate('/alarm');
  };

  return (
    <StyledHeader className={className}>
      <LogoWrapper onClick={onLogoClick}>
        <Logo />
      </LogoWrapper>
      <RightSection>
        <IconButton onClick={onSearchClick} aria-label="검색">
          <IoSearch size={24} />
        </IconButton>
        <IconButton onClick={handleNotificationClick} aria-label="알림">
          <HiOutlineBell size={28} />
        </IconButton>
      </RightSection>
    </StyledHeader>
  );
};

export default Header;
