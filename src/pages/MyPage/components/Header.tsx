import { HiOutlineBell } from 'react-icons/hi';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import theme from '@/styles/theme';
import Logo from '@/assets/qfeed-logo.svg?react';

interface HeaderProps {
  profileImage?: string;
  className?: string;
  title?: string;
}

const Header = ({ className, title }: HeaderProps) => {
  const navigate = useNavigate();

  const onLogoClick = () => {
    navigate('/');
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

const Title = styled.h1`
  font-size: 1.25rem;
  font-family: ${theme.typography.header1.fontFamily.korean};
  font-weight: bold;
  color: ${theme.colors.black};
  text-align: center;
  flex: 1;
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
