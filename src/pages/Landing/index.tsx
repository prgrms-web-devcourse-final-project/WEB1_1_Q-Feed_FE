import { LogoWrapper } from '@/components/common/Header.styles';
import { Logo } from '@/components/ui/Logo/Logo';
import { STYLE } from '@/pages/Landing/Constants/style';
import { Container, SubTitle, Title } from '@/pages/Landing/styles';

const LandingPage = () => {
  return (
    <Container>
      <LogoWrapper>
        <Logo width={STYLE.LOGO.WIDTH} height={STYLE.LOGO.HEIGHT} />
        <Title>나의 취향 메이트 찾기</Title>
        <SubTitle>Q-feed</SubTitle>
      </LogoWrapper>
    </Container>
  );
};

export default LandingPage;
