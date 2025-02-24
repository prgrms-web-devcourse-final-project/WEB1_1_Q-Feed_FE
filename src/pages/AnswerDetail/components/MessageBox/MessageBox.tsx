import { InputBox } from '@/pages/AnswerDetail/components/InputBox/InputBox';
import { SendButton } from '@/components/ui/SendButton/SendButton';
import { useState } from 'react';
import {
  Container,
  ButtonWrapper,
  InputWrapper,
} from '@/pages/AnswerDetail/components/MessageBox/MessageBox.styles';

type MessageBoxProps = {
  onSendMessage: (message: string) => void;
};

export const MessageBox = ({ onSendMessage }: MessageBoxProps) => {
  const [message, setMessage] = useState('');

  const sendMessage = () => {
    if (message == '') {
      alert('메시지를 입력하세요');
    } else {
      if (message.trim()) {
        onSendMessage(message.trim());
        setMessage('');
      }
    }
  };

  return (
    <Container>
      <InputWrapper>
        <InputBox
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onEnter={sendMessage}
        />
      </InputWrapper>
      <ButtonWrapper onClick={sendMessage}>
        <SendButton />
      </ButtonWrapper>
    </Container>
  );
};
