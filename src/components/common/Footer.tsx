import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BottomNavigationIcon } from 'chakra-ui-bottom-navigation';

import HomeIcon from '@/assets/images/home_icon.svg';
import HomeIconClicked from '@/assets/images/home_icon_clicked.svg';
import GroupIcon from '@/assets/images/qspace_icon.svg';
import GroupIconClicked from '@/assets/images/qspace_icon_clicked.svg';
import ChatIcon from '@/assets/images/chat_icon.svg';
import ChatIconClicked from '@/assets/images/chat_icon_clicked.svg';
import MyPageIcon from '@/assets/images/mypage_icon.svg';
import MyPageIconClicked from '@/assets/images/mypage_icon_clicked.svg';

import theme from '@/styles/theme';
import {
  FooterWrapper,
  Container,
  StyledNavigationItem,
  IconWrapper,
  StyledLabel,
  StyledBottomNavigation,
} from './Footer.styles';

interface FooterProps {
  maxWidth?: string;
}

const menuItems = [
  {
    path: '/',
    label: '홈',
    icon: HomeIcon,
    activeIcon: HomeIconClicked,
  },
  {
    path: '/qspace',
    label: '큐스페이스',
    icon: GroupIcon,
    activeIcon: GroupIconClicked,
  },
  {
    path: '/chat',
    label: '채팅',
    icon: ChatIcon,
    activeIcon: ChatIconClicked,
  },
  {
    path: '/mypage',
    label: '마이',
    icon: MyPageIcon,
    activeIcon: MyPageIconClicked,
  },
];

const Footer = ({ maxWidth = '425px' }: FooterProps) => {
  const navigate = useNavigate();
  const [value, setValue] = useState<string>('/');
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);

  const handleNavigation = (newValue: string) => {
    setValue(newValue);
    navigate(newValue);
  };

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
              onMouseLeave={() => setHoveredPath(null)}
            >
              <BottomNavigationIcon
                as={() => (
                  <IconWrapper>
                    <img
                      src={
                        value === item.path || hoveredPath === item.path
                          ? item.activeIcon
                          : item.icon
                      }
                      alt={item.label}
                      width="24"
                      height="24"
                    />
                  </IconWrapper>
                )}
              />
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

export default Footer;
