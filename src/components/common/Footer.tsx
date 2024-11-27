import { useState } from 'react';
import styled from '@emotion/styled';
import {
  BottomNavigation,
  BottomNavigationItem,
  BottomNavigationIcon,
  BottomNavigationLabel,
} from 'chakra-ui-bottom-navigation';

import HomeIcon from '@/assets/images/home_icon.svg';
import HomeIconClicked from '@/assets/images/home_icon_clicked.svg';
import GroupIcon from '@/assets/images/qspace_icon.svg';
import GroupIconClicked from '@/assets/images/qspace_icon_clicked.svg';
import ChatIcon from '@/assets/images/chat_icon.svg';
import ChatIconClicked from '@/assets/images/chat_icon_clicked.svg';
import MyPageIcon from '@/assets/images/mypage_icon.svg';
import MyPageIconClicked from '@/assets/images/mypage_icon_clicked.svg';

import theme from '@/styles/theme';
import { useNavigate } from 'react-router-dom';

interface FooterProps {
  maxWidth?: string;
}
const Footer = ({ maxWidth = '425px' }: FooterProps) => {
  const navigate = useNavigate();
  const [value, setValue] = useState<string>('/');
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);

  const handleNavigation = (newValue: string) => {
    setValue(newValue);
    navigate(newValue);
  };

  const menuItems = [
    {
      path: '/',
      label: '홈',
      icon: HomeIcon,
      activeIcon: HomeIconClicked
    },
    {
      path: '/qspace',
      label: '큐스페이스',
      icon: GroupIcon,
      activeIcon: GroupIconClicked
    },
    {
      path: '/chat',
      label: '채팅',
      icon: ChatIcon,
      activeIcon: ChatIconClicked
    },
    {
      path: '/mypage',
      label: '마이',
      icon: MyPageIcon,
      activeIcon: MyPageIconClicked
    },
  ];

  return (
    <FooterWrapper>
      <Container maxWidth={maxWidth}>
        <StyledBottomNavigation
          value={value}
          onChange={handleNavigation}
          showLabel="always"
          style={{ backgroundColor: theme.colors.white }}
        >
          {menuItems.map((item) => (
            <StyledNavigationItem
              key={item.path}
              value={item.path}
              onMouseEnter={() => setHoveredPath(item.path)}
              onMouseLeave={() => setHoveredPath(null)}>
              <BottomNavigationIcon as={() => (
                <IconWrapper>
                  <img
                    src={value === item.path || hoveredPath === item.path ? item.activeIcon : item.icon}
                    alt={item.label}
                    width="24"
                    height="24"
                  />
                </IconWrapper>
              )} />
              <StyledLabel isActive={value === item.path || hoveredPath === item.path}>
                {item.label}
              </StyledLabel>
            </StyledNavigationItem>
          ))}
        </StyledBottomNavigation>
      </Container>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  height : 5.25rem; //84px
  padding : 0;
  margin : 0;
`;

const Container = styled.div<{ maxWidth: string }>`
  width: 100%;
  max-width: ${props => props.maxWidth};
  background-color: ${theme.colors.white};
  overflow: hidden;
  position: relative;
  height: 100%;
  padding: 0;
  margin: 0;
`;

const StyledNavigationItem = styled(BottomNavigationItem)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width : 100%;
  height: 100%;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 1.5rem; //24px
`;

const StyledLabel = styled(BottomNavigationLabel)<{ isActive: boolean }>`
 font-family: ${theme.typography.fontFamily};
  font-size: ${theme.typography.body2.size};
  font-weight: ${theme.typography.body2.weight};
  color: ${props => props.isActive ? theme.colors.primary : theme.colors.gray[300]};
  margin-top: 4px;
  text-align: center;
  transition: color 0.2s ease-in-out;
`;

const StyledBottomNavigation = styled(BottomNavigation)`
  width: 100%;
  height: 5.25rem;   //84px
  max-width: inherit;
  position: relative;
  left: 0;
  bottom : 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  box-shadow: none;
  padding: 10px;
  margin: 0;

  && {
    box-shadow: none;
  }
`;

export default Footer;