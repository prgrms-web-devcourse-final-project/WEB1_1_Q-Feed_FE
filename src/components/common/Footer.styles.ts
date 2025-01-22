import styled from '@emotion/styled';
import {
  BottomNavigation,
  BottomNavigationItem,
  BottomNavigationLabel,
} from 'chakra-ui-bottom-navigation';
import theme from '@/styles/theme';

export const FooterWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  height: 5.25rem;
  z-index: 300;
`;

export const Container = styled.div<{ maxWidth: string }>`
  width: 100%;
  max-width: ${(props) => props.maxWidth};
  background-color: ${theme.colors.white};
`;

export const StyledNavigationItem = styled(BottomNavigationItem)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: inherit;
  position: relative;
  height: 100%;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 1.5rem; //24px
`;

export const StyledLabel = styled(BottomNavigationLabel)<{ isActive: boolean }>`
  font-family: ${theme.typography.fontFamily};
  font-size: ${theme.typography.body2.size};
  font-weight: ${theme.typography.body2.weight};
  color: ${(props) => (props.isActive ? theme.colors.primary : theme.colors.gray[300])};
  margin-top: 4px;
  text-align: center;
  transition: color 0.2s ease-in-out;
`;

export const StyledBottomNavigation = styled(BottomNavigation)`
  width: 100%;
  height: 5.25rem; //84px
  max-width: 100%;
  position: relative;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: none;
  padding: 10px;

  && {
    box-shadow: none;
  }
`;
