import { AiOutlineClose } from 'react-icons/ai';
import {
  PopupContainer,
  CloseButtonContainer,
  PopupContent,
  PopupMessage,
  PopupButton,
} from '@/components/ui/Popup/Popup.styles';

type PopupProps = {
  title: string;
  message: string;
  onClose: () => void;
  onAction: () => void;
};

export const Popup = ({ message, onClose, onAction }: PopupProps) => {
  return (
    <PopupContainer>
      <CloseButtonContainer>
        <AiOutlineClose size={'1.5rem'} onClick={onClose} />
      </CloseButtonContainer>
      <PopupContent>
        <PopupMessage>{message}</PopupMessage>
        <PopupButton onClick={onAction}>확인</PopupButton>
      </PopupContent>
    </PopupContainer>
  );
};

export default Popup;
