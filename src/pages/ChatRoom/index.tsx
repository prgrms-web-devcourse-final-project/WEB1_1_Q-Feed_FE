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

  const myId = '83974189-a749-4a24-bd5a-8ca2577fac73'; // 본인 ID

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
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI4Mzk3NDE4OS1hNzQ5LTRhMjQtYmQ1YS04Y2EyNTc3ZmFjNzMiLCJpYXQiOjE3MzM2MjM0NzYsImV4cCI6MTczMzcwOTg3Nn0.MtpsuNr5MVkw15Q1OE7vzuDs7Hu0xeq0oY3nZVmGpNM', // Postman에서 사용한 토큰
          },
        });

        if (response.ok) {
          const data: MessageType[] = await response.json();
          const updatedData = data.map((msg) => ({
            ...msg,
            isMine: msg.senderId === myId, // 본인의 메시지 여부 추가
          }));
          setMessages(updatedData);
          console.log('초기 메시지 로드:', updatedData);
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

        const newMessage = {
          ...receivedMessage,
          isMine: receivedMessage.senderId === myId, // 본인의 메시지 여부 추가
        };

        setMessages((prevMessages) => [...prevMessages, newMessage]); // 실시간 메시지 추가
        console.log('새 메시지:', newMessage);
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
      senderId: myId, // 본인 ID
      content: message, // 메시지 내용
    };

    // 전송한 메시지를 즉시 화면에 추가
    const newMessage: MessageType = {
      messageId: Date.now(),
      isMine: true,
      userProfileImage: '', // 본인의 프로필 이미지 경로 (필요 시 설정)
      createdAt: new Date().toISOString(),
      content: message,
      senderId: myId,
      isRead: true, // 읽음 여부
      type: 'text', // 메시지 타입 (예: 'text', 'image')
      url: '', // 첨부된 URL이 있을 경우 설정
      userId: myId,
      userNickName: '내 닉네임', // 본인의 닉네임
    };

    setMessages((prevMessages) => [...prevMessages, newMessage]);

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

      {/* 스크롤 이동을 위한 참조 */}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default ChatRoom;
