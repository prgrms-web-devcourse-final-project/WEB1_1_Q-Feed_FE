/** @jsxImportSource @emotion/react */
import { useQuery } from '@tanstack/react-query';
import {
  messageContentStyle,
  messageListStyle,
  myMessageStyle,
  otherMessageStyle,
  timeStyleLeft,
  timeStyleRight,
} from '@/pages/ChatRoom/styles';
import ProfileImageCon from '@/components/ui/ProfileImageCon/ProfileImageCon';
import { fetchMessages } from '@/pages/ChatRoom/api/fetchChatRoom';
import { MessageType } from '@/pages/ChatRoom/type/messageType';
interface MessageListProps {
  chatRoomId: string;
  currentUserId: string;
}

const MessageList: React.FC<MessageListProps> = ({ chatRoomId, currentUserId }) => {
  const {
    data: messages,
    isLoading,
    isError,
  } = useQuery<MessageType[]>({
    queryKey: ['chatMessages', chatRoomId],
    queryFn: () => fetchMessages(chatRoomId),
    refetchOnWindowFocus: false,
    staleTime: 5 * 60 * 1000,
  });

  if (isLoading) {
    return <div>메시지 로딩 중...</div>;
  }

  if (isError) {
    return <div>메시지를 불러오는 중 오류가 발생했습니다.</div>;
  }

  return (
    <div css={messageListStyle}>
      {messages?.map((msg) => (
        <div
          key={msg.messageId}
          css={msg.userId === currentUserId ? myMessageStyle : otherMessageStyle}
        >
          {/* 상대방 메시지의 경우 프로필 이미지 표시 */}
          {msg.userId !== currentUserId && <ProfileImageCon src={msg.userProfileImage} size={30} />}
          {msg.userId === currentUserId ? (
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
