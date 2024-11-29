import styled from '@emotion/styled';
import { InputBox } from '@/pages/AnswerDetail/components/InputBox/InputBox';
import { SendButton } from '@/components/ui/SendButton/SendButton';
import { useState } from 'react';

type MessageBoxProps = {
  onSendMessage: (message: string) => void;
};

export const MessageBox = ({ onSendMessage }: MessageBoxProps) => {
  const [message, setMessage] = useState('');
  const handleSendMessage = () => {
    if (message.trim()) {
      onSendMessage(message.trim());
      setMessage('');
    }
  };

  return (
    <Container>
      <InputWrapper>
        <InputBox value={message} onChange={(e) => setMessage(e.target.value)} />
      </InputWrapper>
      <ButtonWrapper>
        <SendButton onClick={handleSendMessage} />
      </ButtonWrapper>
    </Container>
  );
};

const Container = styled.div`
  background-color: white;
  width: 100%;
  display: flex;
  gap: 10px;
  padding: 0 20px;
`;

const InputWrapper = styled.div`
  flex: 1;
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
`;
