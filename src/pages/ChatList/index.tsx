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

  const handleClick = () => {
    navigate(`/chatroom/${chatRoomId}`); // 클릭 시 채팅방으로 이동
  };

  return (
    <div css={chatItemStyle} onClick={handleClick}>
      <ProfileImageCon src={otherUserProfile || ''} size={60} />
      <div css={chatContentStyle}>
        <div css={userNameStyle}>
          <span>{otherUserNickname}</span>
          <span css={timeStyle}>{lastMessageCreatedAt}</span>
        </div>
        <div css={lastMessageStyle}>
          <span>{lastMessageContent}</span>
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
  const { data: chatData, isLoading } = useQuery({
    queryKey: ['chatList'],
    queryFn: fetchChatList,
    refetchOnWindowFocus: false,
    staleTime: 5 * 60 * 1000,
  });

  // 검색어를 기준으로 채팅 리스트 필터링
  const filteredChatData = Array.isArray(chatData)
    ? chatData.filter((chat) =>
        chat.otherUserNickname.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  const handleSearchChange = (value: string) => {
    setSearchTerm(value); // 검색어 상태 업데이트
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div css={chatListContainerStyle}>
      {/* 검색 인풋 */}
      <Header />
      <InputBar placeholder="검색어를 입력하세요" onSearch={handleSearchChange} />
      {/* 채팅 리스트 */}
      <div css={chatListStyle}>
        {filteredChatData.map((chat) => (
          <ChatItem key={chat.chatRoomId} {...chat} />
        ))}
      </div>
    </div>
  );
};

export default ChatList;
