/** @jsxImportSource @emotion/react */
import { useCallback, useEffect, useRef, useState } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { IoChevronBack } from 'react-icons/io5';
import { HiOutlineBell, HiOutlineBellSlash } from 'react-icons/hi2';
import ChatInputBar from '@/pages/ChatRoom/component/InputBar';
import MessageList from '@/pages/ChatRoom/component/MessageList';
import { connectStomp, disconnectStomp, stompClient } from '@/pages/ChatRoom/api/socket';
import { MessageType } from '@/pages/ChatRoom/type/messageType';
import { markAsRead } from '@/pages/ChatRoom/api/fetchChatRoom';
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
  const location = useLocation();
  const refetchChatList = location.state?.refetchChatList;
  const otherUserNickname = location.state?.otherUserNickname || "채팅방"; // 기본값 설정
  const [isNotificationEnabled, setIsNotificationEnabled] = useState(true);
  const [messages, setMessages] = useState<MessageType[]>([]);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const myId = '83974189-a749-4a24-bd5a-8ca2577fac73';
  const messagesContainerRef = useRef<HTMLDivElement | null>(null); // 메시지 컨테이너 참조 추가

  console.log('Location State:', location.state); // 전체 state 확인
  console.log('Other User Nickname:', otherUserNickname); // 닉네임 확인

  // 뒤로가기 시 채팅 리스트 새로고침
  const handleBack = () => {
    if (refetchChatList) refetchChatList();
    navigate(-1);
  };

  // 읽음 처리
  const handleMarkAsRead = useCallback(async () => {
    if (!chatRoomId) return;
    try {
      await markAsRead(chatRoomId);
      console.log('읽음 처리 완료');
    } catch (error) {
      console.error('읽음 처리 중 오류:', error);
    }
  }, [chatRoomId]);
  // 메시지 불러오기 함수
  const fetchInitialMessages = useCallback(async () => {
    try {
      const response = await fetch(`/api/chats/${chatRoomId}/messages`, {
        headers: {
          Authorization:
            'Bearer token',
        },
      });

      if (response.ok) {
        const data: MessageType[] = await response.json();
        const sortedData = [...data].sort(
          (a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        );
        setMessages(sortedData);

        // 스크롤을 가장 아래로 이동
        setTimeout(() => {
          if (messagesContainerRef.current) {
            messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
          }
        }, 0);
      } else {
        console.error('초기 메시지 로드 실패:', response.status, await response.text());
      }
    } catch (error) {
      console.error('초기 메시지 로드 중 오류:', error);
    }
  }, [chatRoomId]);

  // 메시지 전송 함수
  const handleSendMessage = (message: string) => {
    if (!chatRoomId) return;

    const payload = {
      roomId: Number(chatRoomId),
      senderId: myId,
      message,
    };

    stompClient.publish({
      destination: `/pub/chat/message`,
      body: JSON.stringify(payload),
    });
    console.log('메시지 전송:', payload);
  };

  useEffect(() => {
    if (!chatRoomId) return;

    fetchInitialMessages(); // 초기 메시지 로드
    handleMarkAsRead(); // 읽음 처리

    // STOMP 설정
    connectStomp();
    stompClient.onConnect = () => {
      console.log(`STOMP 연결 성공 (ChatRoom ID: ${chatRoomId})`);

      const subscription = stompClient.subscribe(`/sub/chat/${chatRoomId}`, (message) => {
        try {
          const receivedMessage: MessageType = JSON.parse(message.body);

          setMessages((prevMessages) => {
            const updatedMessages = [
              ...prevMessages,
              { ...receivedMessage, isMine: receivedMessage.senderId === myId },
            ];
            return updatedMessages.sort(
              (a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
            );
          });

          setTimeout(() => {
            messagesEndRef.current?.scrollIntoView({ behavior: 'instant' });
          }, 0);
        } catch (error) {
          console.error('메시지 파싱 오류:', error);
        }
      });

      return () => subscription.unsubscribe();
    };

    return () => disconnectStomp();
  }, [chatRoomId, fetchInitialMessages, handleMarkAsRead]);

  useEffect(() => {
    // 메시지가 업데이트될 때 스크롤 즉시 맨 아래로 이동
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div css={chatRoomContainer}>
      <div css={headerStyle}>
        <IoChevronBack css={backIconStyle} onClick={handleBack} />
        <span css={headerTitle}>{otherUserNickname}</span>
        <button css={iconButtonStyle} onClick={() => setIsNotificationEnabled((prev) => !prev)}>
          {isNotificationEnabled ? (
            <HiOutlineBell css={iconStyle} />
          ) : (
            <HiOutlineBellSlash css={iconStyle} />
          )}
        </button>
      </div>
      <div
        ref={messagesContainerRef}
        css={{
          flex: 1, // 남은 공간을 모두 차지
          overflowY: 'auto', // 스크롤 가능
          backgroundColor: '#f9f4f0', // 배경색 추가 (기존 theme.colors.background 사용 가능)
        }}
      >
        <MessageList messages={messages} />
      </div>

      <div css={inputBarStyle}>
        <ChatInputBar placeholder="메시지를 입력하세요." onSend={handleSendMessage} />
      </div>

      <div ref={messagesEndRef} />
    </div>
  );
};

export default ChatRoom;
