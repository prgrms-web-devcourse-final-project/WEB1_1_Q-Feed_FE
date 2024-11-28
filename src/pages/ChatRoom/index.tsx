/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ProfileImageCon from "../../components/ui/ProfileImageCon/ProfileImageCon";
import { HiOutlineBell } from "react-icons/hi2";
import { HiOutlineBellSlash } from "react-icons/hi2";
import { IoChevronBack } from "react-icons/io5";
import ChatInputBar from "@/pages/ChatRoom/component/InputBar";

const ChatRoom: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "백종원",
      text: "제주도 국밥 존맛",
      time: "13:16",
      isMine: false,
    },
    {
      id: 2,
      sender: "나",
      text: "함덕 해장국이 ㄹㅇ 펜",
      time: "13:18",
      isMine: true,
    },
  ]);

  const handleSendMessage = (message: string) => {
    const currentTime = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });

    setMessages((prevMessages) => [
      ...prevMessages,
      {
        id: Date.now(),
        sender: "나",
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
        <IoChevronBack />
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
          <div
            key={msg.id}
            css={msg.isMine ? myMessageStyle : otherMessageStyle}
          >
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

// 스타일 정의
const iconButtonStyle = css`
  background: none;
  border: none;
  cursor: pointer;
`;

const iconStyle = css`
  font-size: 24px;
`;
const chatRoomContainer = css`
  display: flex;
  flex-direction: column;
  height: 773px;
  background-color: #f9f4ef;
`;

const headerStyle = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 15px;
  background-color: #ffffff;
  border-bottom: 1px solid #e0e0e0;
`;

const headerTitle = css`
  margin-left: 10px;
  font-size: 18px;
  font-weight: bold;
`;

const messageListStyle = css`
  flex: 1;
  padding: 10px;
  overflow-y: auto;
  background-color: #f3ebe0;
`;

const otherMessageStyle = css`
  display: flex;
  align-items: flex-start;
  margin-bottom: 10px;
  gap: 10px; /* 프로필 이미지와 메시지 사이 간격 */
`;

const myMessageStyle = css`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;
  gap: 10px; /* 메시지와 시간 간 간격 */
`;

const messageContentStyle = css`
  max-width: 70%;
  background-color: #ffffff;
  border-radius: 10px;
  padding: 10px;
  font-size: 14px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
`;

const timeStyleLeft = css`
  font-size: 12px;
  color: #999999;
  align-self: flex-end;
  margin-left: 10px; /* 메시지와 시간 간 간격 */
`;

const timeStyleRight = css`
  font-size: 12px;
  color: #999999;
  align-self: flex-end;
  margin-right: 10px; /* 메시지와 시간 간 간격 */
`;
