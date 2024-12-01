import { STYLE } from '@/pages/Landing/Constants/style';
import theme from '@/styles/theme';
import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: ${theme.colors.background};
  background-image: ${theme.colors.background};
`;

export const LogoWraper = styled.div`
  margin-top: ${STYLE.LOGO.MARGIN_TOP};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  font-family: ${theme.typography.fontFamily.korean};
`;

export const SubTitle = styled.h2`
  font: ${theme.typography.header2.fontFamily};
  font-size: ${theme.typography.header2.size};
  font-weight: bold;
  color: ${theme.colors.primary};
  margin-top: ${STYLE.SUBTITLE.MARGIN_TOP};
`;
