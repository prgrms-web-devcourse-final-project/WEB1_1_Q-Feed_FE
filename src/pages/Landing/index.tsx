import { Logo } from '@/components/ui/Logo/Logo';
import { STYLE } from '@/pages/Landing/Constants/style';
import { Container, LogoWrapper, SubTitle, Title } from '@/pages/Landing/styles';
import { useEffect } from 'react';
import { useNavigation } from '@/hooks/useNavigation';

const LandingPage = () => {
  const { gotoLogin } = useNavigation();

  useEffect(() => {
    // 3초 후에 로그인 페이지로 자동 이동
    const timer = setTimeout(() => {
      gotoLogin();
    }, 1000);

    // 컴포넌트가 언마운트될 때 타이머 정리
    return () => clearTimeout(timer);
  }, []);
  const handleClick = () => {
    gotoLogin();
  };

  return (
    <Container>
      <LogoWrapper>
        <Logo width={STYLE.LOGO.WIDTH} height={STYLE.LOGO.HEIGHT} />
        <Title onClick={handleClick}>나의 취향 메이트 찾기</Title>
        <SubTitle>Q-feed</SubTitle>
      </LogoWrapper>
    </Container>
  );
};

export default LandingPage;
