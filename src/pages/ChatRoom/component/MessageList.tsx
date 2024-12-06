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
}

const MessageList: React.FC<MessageListProps> = ({ chatRoomId }) => {
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
        <div key={msg.id} css={msg.isMine ? myMessageStyle : otherMessageStyle}>
          {!msg.isMine && <ProfileImageCon src="" size={30} />}
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
  );
};

export default MessageList;
