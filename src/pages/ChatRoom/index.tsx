/** @jsxImportSource @emotion/react */
import { useEffect, useRef, useState } from 'react';
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
  const [isNotificationEnabled, setIsNotificationEnabled] = useState(true);
  const [messages, setMessages] = useState<MessageType[]>([]); // 메시지 상태 관리
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const location = useLocation();
  const refetchChatList = location.state?.refetchChatList;
  const myId = '83974189-a749-4a24-bd5a-8ca2577fac73'; // 본인 ID

  const handleBack = () => {
    // 뒤로가기 버튼 클릭 시 리스트 리페치
    if (refetchChatList) {
      refetchChatList(); // 채팅 리스트 데이터 새로고침
    }
    navigate(-1); // 이전 페이지로 이동
  };

  const toggleNotification = () => {
    setIsNotificationEnabled((prevState) => !prevState);
  };
  useEffect(() => {
    if (!chatRoomId) return;

    // 초기 메시지 로드
    const fetchInitialMessages = async () => {
      try {
        const response = await fetch(`/api/chats/${chatRoomId}/messages`, {
          headers: {
            Authorization: 'Bearer YOUR_TOKEN',
          },
        });

        if (response.ok) {
          const data: MessageType[] = await response.json();
          setMessages(data);
        } else {
          console.error('초기 메시지 로드 실패');
        }
      } catch (error) {
        console.error('초기 메시지 로드 중 오류:', error);
      }
    };

    // 읽음처리 API 호출
    const handleMarkAsRead = async () => {
      try {
        await markAsRead(chatRoomId);
        console.log('읽음 처리 완료');
      } catch (error) {
        console.error('읽음 처리 중 오류:', error);
      }
    };

    fetchInitialMessages();
    handleMarkAsRead(); // 읽음처리 호출
  }, [chatRoomId]);

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
              'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI4Mzk3NDE4OS1hNzQ5LTRhMjQtYmQ1YS04Y2EyNTc3ZmFjNzMiLCJpYXQiOjE3MzM3MTA4OTQsImV4cCI6MTczMzc5NzI5NH0.1ugqUNKraIrqI-3RtdbA2D-XNhZ5oCDNqO8fdt1ESV0',
          },
        });

        if (response.ok) {
          const data: MessageType[] = await response.json();
          console.log('서버 응답 데이터:', data);

          // 서버에서 받은 데이터를 시간순으로 정렬 (최신 메시지가 아래로)
          const sortedData = data.sort(
            (a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
          );

          setMessages(sortedData);
          console.log('초기 메시지 로드:', sortedData);
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
        console.log('Received: ' + message.body);

        try {
          const receivedMessage: MessageType = JSON.parse(message.body);

          // 본인이 보낸 메시지인지 확인하여 isMine 설정
          const updatedMessage: MessageType = {
            ...receivedMessage,
            isMine: receivedMessage.senderId === myId,
          };

          console.log('파싱된 메시지:', updatedMessage);

          // 메시지를 추가하고 정렬 (최신 메시지가 아래로)
          setMessages((prevMessages) => {
            const updatedMessages = [...prevMessages, updatedMessage];
            return updatedMessages.sort(
              (a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
            );
          });
        } catch (error) {
          console.error('메시지 파싱 오류:', error);
        }
      });

      return () => {
        console.log('STOMP 구독 해제');
        subscription.unsubscribe();
      };
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
        <IoChevronBack css={backIconStyle} onClick={handleBack} />
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
