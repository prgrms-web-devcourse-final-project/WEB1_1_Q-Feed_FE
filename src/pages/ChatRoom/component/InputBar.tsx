/** @jsxImportSource @emotion/react */
import {
  /* iconButtonStyle, */
  /* iconStyle, */
  inputContainerStyle,
  inputStyle,
  inputWrap,
  sendButtonStyle,
} from '@/pages/ChatRoom/component/InputBar.styles';
import { useState } from 'react';

/* import { MdOutlineAddAPhoto } from 'react-icons/md'; */
import { SendButton } from '@/components/ui/SendButton/SendButton';

interface InputBarProps {
  placeholder?: string;
  onSend?: (value: string) => void;
}

const ChatInputBar: React.FC<InputBarProps> = ({
  placeholder = '메시지를 입력하세요.',
  onSend,
}) => {
  const [value, setValue] = useState('');
  const [isComposing, setIsComposing] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const handleCompositionStart = () => {
    setIsComposing(true); // IME 입력 시작
  };

  const handleCompositionEnd = (e: React.CompositionEvent<HTMLInputElement>) => {
    setIsComposing(false); // IME 입력 종료
    setValue(e.currentTarget.value); // 최종 입력 값 업데이트
  };

  const handleSend = () => {
    if (!isComposing && onSend && value.trim() !== '') {
      const messageToSend = value.trim();
      setValue(''); // 입력 필드 초기화
      onSend(messageToSend); // 메시지 전송
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !isComposing) {
      e.preventDefault(); // 기본 동작 방지
      handleSend(); // 메시지 전송
    }
  };

  return (
    <div css={inputWrap}>
      <div css={inputContainerStyle}>
        {/* 카메라 아이콘 */}
        {/* <button css={iconButtonStyle}> */}
        {/* <MdOutlineAddAPhoto css={iconStyle} /> */}
        {/* </button> */}
        {/* 텍스트 입력 */}
        <input
          type="text"
          css={inputStyle}
          placeholder={placeholder}
          value={value}
          onChange={handleInputChange}
          onCompositionStart={handleCompositionStart}
          onCompositionEnd={handleCompositionEnd}
          onKeyDown={handleKeyPress} // 엔터키 이벤트 추가
        />
      </div>
      {/* 보내기 버튼 */}
      <button css={sendButtonStyle} onClick={handleSend}>
        <SendButton />
      </button>
    </div>
  );
};

export default ChatInputBar;
