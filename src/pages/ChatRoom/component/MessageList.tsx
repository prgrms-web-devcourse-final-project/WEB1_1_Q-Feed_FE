/** @jsxImportSource @emotion/react */
import React from 'react';
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
  return (
    <div css={messageListStyle}>
      {messages.map((msg) => (
        <div
          key={msg.messageId}
          css={msg.isMine ? myMessageStyle : otherMessageStyle} // isMine으로 스타일 결정
        >
          {/* 상대방 메시지의 경우 프로필 이미지 표시 */}
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
    </div>
  );
};

export default MessageList;
