import BackButton from '@/components/ui/BackButton/BackButton';
import {
  HeaderTitle,
  HeaderWithTitleContainer,
} from '@/components/ui/HeaderWithTitle/HeaderWithTitle.styles';

type HeaderWithTitleProps = {
  title: string;
};

export const HeaderWithTitle = ({ title }: HeaderWithTitleProps) => {
  return (
    <HeaderWithTitleContainer>
      <BackButton />
      <HeaderTitle>{title}</HeaderTitle>
    </HeaderWithTitleContainer>
  );
};
