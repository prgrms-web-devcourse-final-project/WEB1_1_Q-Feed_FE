import BackButton from '@/components/ui/BackButton/BackButton';
import { Container, Title } from '@/pages/Register/components/Header/Header.styles';

export const Header = () => {
  return (
    <Container>
      <BackButton />
      <Title>회원가입</Title>
    </Container>
  );
};
