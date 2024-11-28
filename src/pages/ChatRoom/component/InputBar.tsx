/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useState } from 'react';
import { MdOutlineAddAPhoto } from 'react-icons/md';

interface InputBarProps {
  placeholder?: string;
  onSend?: (value: string) => void;
}

const ChatInputBar: React.FC<InputBarProps> = ({ placeholder = '메시지를 입력하세요.', onSend }) => {
  const [value, setValue] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSend = () => {
    if (onSend && value.trim() !== '') {
      const messageToSend = value.trim();
      setValue(''); // 입력 필드 초기화
      onSend(messageToSend); // 메시지 전송
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // 기본 동작 방지
      handleSend(); // 메시지 전송
    }
  };

  return (
    <div css={inputWrap}>
      <div css={inputContainerStyle}>
        {/* 카메라 아이콘 */}
        <button css={iconButtonStyle}>
          <MdOutlineAddAPhoto css={iconStyle} />
        </button>
        {/* 텍스트 입력 */}
        <input
          type='text'
          css={inputStyle}
          placeholder={placeholder}
          value={value}
          onChange={handleInputChange}
          onKeyDown={handleKeyPress} // 엔터키 이벤트 추가
        />
      </div>
      {/* 보내기 버튼 */}
      <button css={sendButtonStyle} onClick={handleSend}>
        <img src='/src/assets/SendButton.svg' alt='Send' css={sendIconStyle} />
      </button>
    </div>
  );
};

export default ChatInputBar;

const inputWrap = css`
  display: flex;
  gap: 8px;
`;

const inputContainerStyle = css`
  display: flex;
  align-items: center;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 24px;
  background-color: #fff;
  gap: 8px;
  flex: 1;
`;

const iconButtonStyle = css`
  background: none;
  border: none;
  cursor: pointer;
`;

const iconStyle = css`
  font-size: 20px;
  color: #b3b3b3;
`;

const inputStyle = css`
  flex: 1;
  border: none;
  outline: none;
  font-size: 14px;
  padding: 8px;
  color: #333;
`;

const sendButtonStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const sendIconStyle = css`
  width: 48px;
  height: 48px;
`;
