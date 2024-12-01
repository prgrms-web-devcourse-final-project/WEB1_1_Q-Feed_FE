/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import ProfileImageCon from '../../components/ui/ProfileImageCon/ProfileImageCon';
import { HiOutlineBell } from 'react-icons/hi2';
import { HiOutlineBellSlash } from 'react-icons/hi2';
import { IoChevronBack } from 'react-icons/io5';
import ChatInputBar from '@/pages/ChatRoom/component/InputBar';
import {
  backIconStyle,
  chatRoomContainer,
  headerStyle,
  headerTitle,
  iconButtonStyle,
  iconStyle,
  messageContentStyle,
  messageListStyle,
  myMessageStyle,
  otherMessageStyle,
  timeStyleLeft,
  timeStyleRight,
} from '@/pages/ChatRoom/styles';

const ChatRoom = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: '백종원',
      text: '제주도 국밥 존맛',
      time: '13:16',
      isMine: false,
    },
    {
      id: 2,
      sender: '나',
      text: '함덕 해장국이 ㄹㅇ 펜',
      time: '13:18',
      isMine: true,
    },
  ]);

  const handleSendMessage = (message: string) => {
    const currentTime = new Date().toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    });

    setMessages((prevMessages) => [
      ...prevMessages,
      {
        id: Date.now(),
        sender: '나',
        text: message,
        time: currentTime,
        isMine: true,
      },
    ]);
  };

  const [isNotificationEnabled, setIsNotificationEnabled] = useState(true);
  const toggleNotification = () => {
    setIsNotificationEnabled((prevState) => !prevState);
  };

  return (
    <div css={chatRoomContainer}>
      {/* Header */}
      <div css={headerStyle}>
        <IoChevronBack css={backIconStyle} onClick={() => navigate(-1)} />
        <span css={headerTitle}>{id} 백종원</span>
        <button css={iconButtonStyle} onClick={toggleNotification}>
          {isNotificationEnabled ? (
            <HiOutlineBell css={iconStyle} />
          ) : (
            <HiOutlineBellSlash css={iconStyle} />
          )}
        </button>
      </div>

      {/* Message List */}
      <div css={messageListStyle}>
        {messages.map((msg) => (
          <div key={msg.id} css={msg.isMine ? myMessageStyle : otherMessageStyle}>
            {!msg.isMine && <ProfileImageCon src="" size={30} />}
            {/* 삼항연산자로 메시지 구조 분리 */}
            {msg.isMine ? (
              <>
                <span css={timeStyleLeft}>{msg.time}</span>
                <div css={messageContentStyle}>
                  <p>{msg.text}</p>
                </div>
              </>
            ) : (
              <>
                <div css={messageContentStyle}>
                  <p>{msg.text}</p>
                </div>
                <span css={timeStyleRight}>{msg.time}</span>
              </>
            )}
          </div>
        ))}
      </div>

      {/* Input Bar */}
      <div>
        <ChatInputBar
          placeholder="메시지를 입력하세요."
          onSend={handleSendMessage} // 메시지 보내기 핸들러 전달
        />
      </div>
    </div>
  );
};

export default ChatRoom;
