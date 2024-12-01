/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
interface ChatItemProps {
  id: string; // 채팅방 ID
  profileImg?: string; // 프로필 이미지 URL
  userName: string; // 사용자 이름
  lastMessage: string; // 마지막 메시지
  time: string; // 메시지 시간
  unreadCount?: number; // 읽지 않은 메시지 수
}

// 채팅 리스트 아이템 컴포넌트
const ChatItem = ({ id, profileImg, userName, lastMessage, time, unreadCount }: ChatItemProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/chatroom/${id}`); // 클릭 시 채팅방으로 이동
  };

  return (
    <div css={chatItemStyle} onClick={handleClick}>
      <ProfileImageCon src={profileImg || ''} size={60} />
      <div css={chatContentStyle}>
        <div css={userNameStyle}>
          <span>{userName}</span>
          <span css={timeStyle}>{time}</span>
        </div>
        <div css={lastMessageStyle}>
          <span>{lastMessage}</span>
          {unreadCount && unreadCount > 0 && <span css={unreadCountStyle}>{unreadCount}</span>}
        </div>
      </div>
    </div>
  );
};

// 채팅 리스트 메인 컴포넌트
const ChatList = () => {
  const [searchTerm, setSearchTerm] = useState(''); // 검색어 상태
  const [chatData] = useState([
    {
      id: '1',
      profileImg: '',
      userName: 'asdf',
      lastMessage: '마지막 대화 내용 어쩌구저쩌구',
      time: '13:18',
      unreadCount: 3,
    },
    {
      id: '2',
      profileImg: '',
      userName: '홍길동',
      lastMessage: '여긴 새로운 메시지가 있어요!',
      time: '14:25',
      unreadCount: 10,
    },
    {
      id: '3',
      profileImg: '',
      userName: '이순신',
      lastMessage: '반갑습니다.',
      time: '15:00',
    },
  ]);

  // 검색어를 기준으로 채팅 리스트 필터링
  const filteredChatData = chatData.filter((chat) =>
    chat.userName.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const handleSearchChange = (value: string) => {
    setSearchTerm(value); // 검색어 상태 업데이트
  };

  return (
    <div css={chatListContainerStyle}>
      {/* 검색 인풋 */}
      <Header />
      <InputBar placeholder="검색어를 입력하세요" onSearch={handleSearchChange} />
      {/* 채팅 리스트 */}
      <div css={chatListStyle}>
        {filteredChatData.map((chat) => (
          <ChatItem key={chat.id} {...chat} />
        ))}
      </div>
    </div>
  );
};

export default ChatList;
