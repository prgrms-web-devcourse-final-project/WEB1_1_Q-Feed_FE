import { IoSearch } from 'react-icons/io5';
import { HiOutlineBell } from 'react-icons/hi';
import styled from '@emotion/styled';
import theme from '@/styles/theme';
import Logo from '@/assets/qfeed-logo.svg?react';

interface HeaderProps {
  onSearchClick?: () => void;
  onNotificationClick?: () => void;
  onProfileClick?: () => void;
  onLogoClick?: () => void;
  profileImage?: string;
  className?: string;
}

const Header = ({ onSearchClick, onNotificationClick, onLogoClick, className }: HeaderProps) => {
  return (
    <StyledHeader className={className}>
      <LogoWrapper onClick={onLogoClick}>
        <Logo />
      </LogoWrapper>
      <RightSection>
        <IconButton onClick={onSearchClick} aria-label='검색'>
          <IoSearch size={24} />
        </IconButton>
        <IconButton onClick={onNotificationClick} aria-label='알림'>
          <HiOutlineBell size={28} />
        </IconButton>
      </RightSection>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  width: 100%;
  padding: 0.5rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${theme.colors.white};
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const IconButton = styled.button`
  background: none;
  border: none;
  padding: 0.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.black};
`;
