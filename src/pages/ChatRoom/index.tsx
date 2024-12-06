/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { IoChevronBack } from 'react-icons/io5';
import { HiOutlineBell, HiOutlineBellSlash } from 'react-icons/hi2';
import ChatInputBar from '@/pages/ChatRoom/component/InputBar';
import MessageList from '@/pages/ChatRoom/component/MessageList';
import {
  backIconStyle,
  chatRoomContainer,
  headerStyle,
  headerTitle,
  iconButtonStyle,
  iconStyle,
  inputBarStyle,
} from './styles';

const ChatRoom = () => {
  const { id: chatRoomId } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [isNotificationEnabled, setIsNotificationEnabled] = useState(true);

  const toggleNotification = () => {
    setIsNotificationEnabled((prevState) => !prevState);
  };

  const handleSendMessage = (message: string) => {
    console.log('메시지 전송:', message); // 메시지 전송 로직 추가
  };

  return (
    <div css={chatRoomContainer}>
      {/* Header */}
      <div css={headerStyle}>
        <IoChevronBack css={backIconStyle} onClick={() => navigate(-1)} />
        <span css={headerTitle}>채팅방 ID: {chatRoomId}</span>
        <button css={iconButtonStyle} onClick={toggleNotification}>
          {isNotificationEnabled ? (
            <HiOutlineBell css={iconStyle} />
          ) : (
            <HiOutlineBellSlash css={iconStyle} />
          )}
        </button>
      </div>

      {/* Message List */}
      <MessageList chatRoomId={chatRoomId || ''} currentUserId="현재 유저 ID" />

      {/* Input Bar */}
      <div css={inputBarStyle}>
        <ChatInputBar
          placeholder="메시지를 입력하세요."
          onSend={handleSendMessage} // 메시지 전송 핸들러 전달
        />
      </div>
    </div>
  );
};

export default ChatRoom;
