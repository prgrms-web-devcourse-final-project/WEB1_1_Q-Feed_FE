import { AiOutlineClose } from 'react-icons/ai';
import {
  PopupContainer,
  CloseButtonContainer,
  PopupTitle,
  PopupContent,
  PopupMessage,
  PopupButton,
} from '@/pages/Event/components/EventPopup/EventPopup.styles';

type EventPopupProps = {
  title: string;
  message: string;
  onClose: () => void;
  onAction: () => void;
};

export const EventPopup = ({ title, message, onClose, onAction }: EventPopupProps) => {
  return (
    <PopupContainer>
      <CloseButtonContainer>
        <AiOutlineClose size={'1.5rem'} onClick={onClose} />
      </CloseButtonContainer>
      <PopupTitle>{title}</PopupTitle>
      <PopupContent>
        <PopupMessage>{message}</PopupMessage>
        <PopupButton onClick={onAction}>답변하기</PopupButton>
      </PopupContent>
    </PopupContainer>
  );
};

export default EventPopup;