/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetchChatList } from '@/pages/ChatList/api/fetchChatList';
import { ChatData } from '@/pages/ChatList/type/chatListType';
import ProfileImageCon from '../../components/ui/ProfileImageCon/ProfileImageCon';
import InputBar from '../../components/ui/InputBar/InputBar';
import Header from '@/components/common/Header';
import {
  chatContentStyle,
  chatItemStyle,
  chatListContainerStyle,
  chatListStyle,
  lastMessageStyle,
  timeStyle,
  unreadCountStyle,
  userNameStyle,
} from '@/pages/ChatList/styles';

const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleString('ko-KR', {
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  });
};
// 채팅 리스트 아이템 컴포넌트
const ChatItem = ({
  chatRoomId,
  otherUserProfile,
  otherUserNickname,
  lastMessageContent,
  lastMessageCreatedAt,
  unreadMessageCount,
}: ChatData) => {
  const navigate = useNavigate();

  // 채팅방 클릭 시 해당 채팅방으로 이동
  const handleClick = () => {
    navigate(`/chatroom/${chatRoomId}`); // 클릭 시 채팅방으로 이동
  };

  return (
    <div css={chatItemStyle} onClick={handleClick}>
      {/* 프로필 이미지 */}
      <ProfileImageCon src={otherUserProfile || ''} size={60} />
      <div css={chatContentStyle}>
        <div css={userNameStyle}>
          {/* 유저 닉네임 */}
          <span>{otherUserNickname}</span>
          {/* 마지막 메시지 시간 */}
          <span css={timeStyle}>{formatDate(lastMessageCreatedAt)}</span>
        </div>
        <div css={lastMessageStyle}>
          {/* 마지막 메시지 내용 */}
          <span>{lastMessageContent}</span>
          {/* 읽지 않은 메시지 수 */}
          {unreadMessageCount && unreadMessageCount > 0 ? (
            <span css={unreadCountStyle}>{unreadMessageCount}</span>
          ) : null}
        </div>
      </div>
    </div>
  );
};

// 채팅 리스트 메인 컴포넌트
const ChatList = () => {
  const [searchTerm, setSearchTerm] = useState(''); // 검색어 상태
  const {
    data: chatData,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ['chatList'], // React Query 키
    queryFn: fetchChatList, // 데이터를 가져오는 함수
    refetchOnWindowFocus: true, // 창 포커스 시 자동 리페치
    staleTime: 5 * 60 * 1000, // 캐시 데이터 유효 시간
  });

  const navigate = useNavigate();

  // 채팅방 클릭 핸들러
  const handleChatRoomClick = (chatRoomId: string, otherUserNickname: string) => {
    console.log('ChatRoomId:', chatRoomId); // 확인
    console.log('OtherUserNickname:', otherUserNickname); // 확인

    navigate(`/chatroom/${chatRoomId}`, {
      state: { otherUserNickname, refetchChatList: refetch }, // 닉네임 전달
    });
  };

  // 검색어를 기준으로 채팅 리스트 필터링
  const filteredChatData = Array.isArray(chatData)
    ? chatData.filter((chat) =>
        chat.otherUserNickname.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  // 검색어 입력 핸들러
  const handleSearchChange = (value: string) => {
    setSearchTerm(value); // 검색어 상태 업데이트
  };

  // 데이터 로딩 중 처리
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div css={chatListContainerStyle}>
      {/* 상단 헤더 */}
      <Header />
      {/* 검색 인풋 */}
      <InputBar placeholder="검색어를 입력하세요" onSearch={handleSearchChange} />
      {/* 채팅 리스트 */}
      <div css={chatListStyle}>
        {filteredChatData.map((chat) => (
          <div
            key={chat.chatRoomId}
            onClick={() => handleChatRoomClick(chat.chatRoomId, chat.otherUserNickname)} // 채팅방 클릭 이벤트 추가
          >
            <ChatItem {...chat}
             />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatList;
