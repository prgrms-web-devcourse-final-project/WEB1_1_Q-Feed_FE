/** @jsxImportSource @emotion/react */
import React, { useEffect, useRef } from 'react';
import {
  messageContentStyle,
  messageListStyle,
  myMessageStyle,
  otherMessageStyle,
  timeStyleLeft,
  timeStyleRight,
} from '@/pages/ChatRoom/styles';
import ProfileImageCon from '@/components/ui/ProfileImageCon/ProfileImageCon';
import { MessageType } from '@/pages/ChatRoom/type/messageType';

interface MessageListProps {
  messages: MessageType[]; // 메시지 상태 전달
}

const MessageList: React.FC<MessageListProps> = ({ messages }) => {
  const messageEndRef = useRef<HTMLDivElement | null>(null);

  // 메시지가 업데이트될 때마다 스크롤 이동
  useEffect(() => {
    if (messageEndRef.current) {
      messageEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <div css={messageListStyle}>
      {messages.map((msg, index) => (
        <div
          key={msg.messageId || `${msg.createdAt}-${index}`}
          css={msg.isMine ? myMessageStyle : otherMessageStyle}
        >
          {!msg.isMine && <ProfileImageCon src={msg.userProfileImage} size={30} />}
          {msg.isMine ? (
            <>
              <span css={timeStyleLeft}>
                {new Date(msg.createdAt).toLocaleTimeString([], {
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </span>
              <div css={messageContentStyle}>
                <p>{msg.content}</p>
              </div>
            </>
          ) : (
            <>
              <div css={messageContentStyle}>
                <p>{msg.content}</p>
              </div>
              <span css={timeStyleRight}>
                {new Date(msg.createdAt).toLocaleTimeString([], {
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </span>
            </>
          )}
        </div>
      ))}
      {/* 스크롤을 이동시키기 위한 div */}
      <div ref={messageEndRef} />
    </div>
  );
};

export default MessageList;
