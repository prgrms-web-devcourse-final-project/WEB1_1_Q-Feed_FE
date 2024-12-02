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

export const LogoWrapper = styled.div`
  margin-top: ${STYLE.LOGO.MARGIN_TOP};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  font-family: ${theme.typography.header1.fontFamily.korean};
  font-size: ${theme.typography.header1.size};
  font-weight: ${theme.typography.header1.weight};
  line-height: ${theme.typography.header1.lineHeight};
  color: ${theme.colors.primary};
  cursor: pointer;
  margin-top: 1.25rem;

  &:hover {
    color: ${theme.colors.gray[300]};
  }
`;

export const SubTitle = styled.h2`
  font: ${theme.typography.header2.fontFamily};
  font-size: ${theme.typography.header2.size};
  font-weight: bold;
  color: ${theme.colors.primary};
  margin-top: ${STYLE.SUBTITLE.MARGIN_TOP};
`;
