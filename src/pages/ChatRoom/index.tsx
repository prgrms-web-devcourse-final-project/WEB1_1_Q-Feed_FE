/** @jsxImportSource @emotion/react */
import { useEffect, useRef, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { IoChevronBack } from 'react-icons/io5';
import { HiOutlineBell, HiOutlineBellSlash } from 'react-icons/hi2';
import ChatInputBar from '@/pages/ChatRoom/component/InputBar';
import MessageList from '@/pages/ChatRoom/component/MessageList';
import { connectStomp, disconnectStomp, stompClient } from '@/pages/ChatRoom/api/socket';
import { MessageType } from '@/pages/ChatRoom/type/messageType';
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
  const [messages, setMessages] = useState<MessageType[]>([]); // 메시지 상태 관리
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const toggleNotification = () => {
    setIsNotificationEnabled((prevState) => !prevState);
  };
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  useEffect(() => {
    if (!chatRoomId) return;

    // 초기 메시지 로드
    const fetchInitialMessages = async () => {
      try {
        const response = await fetch(`/api/chats/${chatRoomId}/messages`, {
          headers: {
            Authorization: 'Token', // Postman에서 사용한 토큰
          },
        });

        if (response.ok) {
          const data: MessageType[] = await response.json();
          setMessages(data);
          console.log('초기 메시지 로드:', data);
        } else {
          console.error('초기 메시지 로드 실패:', response.status, await response.text());
        }
      } catch (error) {
        console.error('초기 메시지 로드 중 오류:', error);
      }
    };

    fetchInitialMessages();

    // STOMP 연결 설정
    connectStomp();

    stompClient.onConnect = () => {
      console.log(`STOMP 연결 성공 (ChatRoom ID: ${chatRoomId})`);
      const subscription = stompClient.subscribe(`/sub/chat/${chatRoomId}`, (message) => {
        const receivedMessage: MessageType = JSON.parse(message.body);
        setMessages((prevMessages) => [...prevMessages, receivedMessage]); // 실시간 메시지 추가
        console.log('새 메시지:', receivedMessage);
      });

      return () => subscription.unsubscribe();
    };

    stompClient.onStompError = (error) => {
      console.error('STOMP 연결 에러:', error);
    };

    return () => {
      disconnectStomp();
    };
  }, [chatRoomId]);

  const handleSendMessage = (message: string) => {
    if (!chatRoomId) return;

    const payload = {
      roomId: Number(chatRoomId),
      senderId: '83974189-a749-4a24-bd5a-8ca2577fac73', // 본인 ID
      message, // 메시지 내용
    };

    stompClient.publish({
      destination: `/pub/chat/message`,
      body: JSON.stringify(payload),
    });

    console.log('메시지 전송:', payload);
  };

  return (
    <div css={chatRoomContainer}>
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

      <MessageList messages={messages} />

      <div css={inputBarStyle}>
        <ChatInputBar placeholder="메시지를 입력하세요." onSend={handleSendMessage} />
      </div>
    </div>
  );
};

export default ChatRoom;
