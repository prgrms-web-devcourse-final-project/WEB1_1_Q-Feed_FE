import { Container } from '@/pages/Main/components/EditButton/EditButton.style';
import { Image } from '@chakra-ui/react';
import EditIcon from '@/assets/images/edit_icon.svg';

type EditButtonProps = {
  onClick?: () => void;
};

export const EditButton = ({ onClick }: EditButtonProps) => {
  return (
    <Container onClick={onClick}>
      <Image src={EditIcon} />
    </Container>
  );
};
