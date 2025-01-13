import { Container } from '@/pages/Main/components/DeleteButton/DeleteButton.style';
import { Image } from '@chakra-ui/react';
import DeleteIcon from '@/assets/images/delete_icon.svg';

type DeleteButtonProps = {
  onClick?: () => void;
};

export const DeleteButton = ({ onClick }: DeleteButtonProps) => {
  return (
    <Container onClick={onClick}>
      <Image src={DeleteIcon} width="7px" height="8px" />
    </Container>
  );
};
