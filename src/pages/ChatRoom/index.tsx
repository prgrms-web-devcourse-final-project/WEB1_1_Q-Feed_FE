/** @jsxImportSource @emotion/react */
import { useCallback, useEffect, useRef, useState } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { IoChevronBack } from 'react-icons/io5';
import { HiOutlineBell, HiOutlineBellSlash } from 'react-icons/hi2';
import ChatInputBar from '@/pages/ChatRoom/component/InputBar';
import MessageList from '@/pages/ChatRoom/component/MessageList';
import { connectStomp, disconnectStomp, stompClient } from '@/pages/ChatRoom/api/socket';
import { fetchMessages, markAsRead } from '@/pages/ChatRoom/api/fetchChatRoom';
import { MessageType } from '@/pages/ChatRoom/type/messageType';
import { useUserStore } from '@/store/userStore';
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
  const otherUserNickname = location.state?.otherUserNickname || '채팅방'; // 기본값 설정
  const [isNotificationEnabled, setIsNotificationEnabled] = useState(true);
  const [messages, setMessages] = useState<MessageType[]>([]);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const messagesContainerRef = useRef<HTMLDivElement | null>(null); // 메시지 컨테이너 참조 추가
  const { userId } = useUserStore(); // 로그인한 사용자의 userId 가져오기
  const receiverId = location.state?.otherUserId;
  console.log('Location State:', location.state); // 전체 state 확인
  console.log('Other User Nickname:', otherUserNickname); // 닉네임 확인
  console.log('Current User ID:', userId); // 현재 로그인한 사용자 ID 확인
  console.log('Receiver id:', receiverId);

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
    } catch (error) {
      console.error('읽음 처리 중 오류:', error);
    }
  }, [chatRoomId]);

  // 메시지 불러오기 함수
  const fetchInitialMessages = useCallback(async () => {
    if (!chatRoomId) return;
    try {
      const data = await fetchMessages(chatRoomId);
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
    } catch (error) {
      console.error('초기 메시지 로드 중 오류:', error);
    }
  }, [chatRoomId]);

  // 메시지 전송 함수
  const handleSendMessage = (message: string) => {
    if (!chatRoomId || !userId) return;

    const payload = {
      roomId: Number(chatRoomId),
      senderId: userId,
      receiverId,
      message,
      type: 'TEXT',
    };

    stompClient.publish({
      destination: `/pub/chat/message`,
      body: JSON.stringify(payload),
    });
    console.log('메시지 전송:', payload);
  };

  useEffect(() => {
    if (!chatRoomId) return;

    // 초기 메시지 로드 및 읽음 처리
    fetchInitialMessages();
    handleMarkAsRead();

    // STOMP 설정
    connectStomp();
    stompClient.onConnect = () => {
      console.log(`STOMP 연결 성공 (ChatRoom ID: ${chatRoomId})`);

      // userId를 headers에 포함하여 구독 요청
      const subscription = stompClient.subscribe(
        `/sub/chat/${chatRoomId}`,
        (message) => {
          try {
            const receivedMessage: MessageType = JSON.parse(message.body);

            setMessages((prevMessages) => {
              const updatedMessages = [
                ...prevMessages,
                {
                  ...receivedMessage,
                  isMine: receivedMessage.senderId === userId, // userId와 비교하여 본인 여부 판단
                },
              ];
              return updatedMessages.sort(
                (a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
              );
            });

            // 스크롤을 가장 아래로 이동
            setTimeout(() => {
              if (messagesEndRef.current) {
                messagesEndRef.current.scrollIntoView({ behavior: 'instant' });
              }
            }, 0);
          } catch (error) {
            console.error('메시지 파싱 오류:', error);
          }
        },
        {
          senderId: userId || 'unknown',
        }
      );

      return () => subscription.unsubscribe();
    };

    return () => disconnectStomp();
  }, [chatRoomId, fetchInitialMessages, handleMarkAsRead, userId]);

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
          flex: 1,
          overflowY: 'auto',
          backgroundColor: '#f9f4f0',
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
