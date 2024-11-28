import { Logo } from '@/components/ui/Logo/Logo';
import theme from '@/styles/theme';
import styled from '@emotion/styled';

const STYLE = {
  LOGO: {
    WIDTH : '7rem',         // 112px
    HEIGHT : '5.8125rem',   // 93px
    MARGIN_TOP : '12.5rem', // 200px

  },
  TITLE: {
    MARGIN_TOP : '2.5rem',  //40px
  },
  SUBTITLE: {
    MARGIN_TOP : '17.5rem', //280px
  }
}

export const LandingPage = () => {
  return (
    <Container>
      <LogoWraper>
        <Logo width={STYLE.LOGO.WIDTH} height={STYLE.LOGO.HEIGHT}/>
        <Title>나의 취향 메이트 찾기</Title>
        <SubTitle>Q-feed</SubTitle>
      </LogoWraper>
    </Container>
  );
};

const Container = styled.div`
  display : flex;
  justify-content : center;
  align-items : center;
  width : 100%;
  height : 100vh;
  background-color: ${theme.colors.backgroundBase};
  background-image: linear-gradient(${theme.colors.background40}, ${theme.colors.background40});
`;

const LogoWraper = styled.div`
  margin-top : ${STYLE.LOGO.MARGIN_TOP};
  display : flex;
  flex-direction : column;
  align-items : center;
  justify-content : center;
`;

const Title = styled.h1`
  font : ${theme.typography.header1.fontFamily}
  font-size : ${theme.typography.header1.size};
  color : ${theme.colors.primary};
  font-weight : bold;
  margin-top: ${STYLE.TITLE.MARGIN_TOP};

`;


const SubTitle = styled.h2`
  font : ${theme.typography.header2.fontFamily};
  font-size : ${theme.typography.header2.size};
  font-weight : bold;
  color : ${theme.colors.primary};
  weight : bold;
  margin-top : ${STYLE.SUBTITLE.MARGIN_TOP};
`;
