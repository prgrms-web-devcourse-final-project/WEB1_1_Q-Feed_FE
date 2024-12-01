import { useState } from 'react';
import Header from '@/pages/MyPage/components/Header/Header';
import QuestionCard from '@/pages/MyPage/components/QuestionCard/QuestionCard';
import Button from '@/pages/MyPage/components/Button/Button';
import MyProfile from '@/pages/MyPage/components/MyProfile/MyProfile';
import QSpaceCard from '@/components/ui/QSpaceCard/QSpaceCard';
import {
  ButtonGroup,
  Container,
  Content,
  QSpaceList,
  QuestionList,
  Tab,
  TabContainer,
} from '@/pages/MyPage/styles';

// 더미 데이터
const dummyProfile = {
  name: '정주연',
  id: 'juyeon123',
  followers: 16,
  following: 23,
  bio: '숨은 맛집을 찾아다니는 주연씨입니다!',
  profileImage: 'https://via.placeholder.com/100',
  tags: ['여행', '패션', '맛집'],
};

const dummyQuestions = [
  { id: 1, date: '2024.11.15', content: '맛집을 고르는 기준은 무엇인가요?', isPrivate: true },
  { id: 2, date: '2024.11.15', content: '가장 좋아하는 운동은 무엇인가요?', isPrivate: false },
  { id: 3, date: '2024.11.15', content: '가장 기억에 남는 여행지는?', isPrivate: true },
];

const dummyQSpaces = [
  {
    imageUrl: 'https://via.placeholder.com/150',
    title: '제주도 맛집 토론방',
    description: '제주의 숨은 맛집 이야기해요!',
    memberCount: 133,
    isRecruiting: true,
    lastUpdated: '방금 전 게시',
  },
  {
    imageUrl: 'https://via.placeholder.com/150',
    title: '서울 카페 탐방',
    description: '서울의 멋진 카페를 공유해요!',
    memberCount: 87,
    isRecruiting: false,
    lastUpdated: '3일 전 게시',
  },
];

const MyPage = () => {
  const [activeTab, setActiveTab] = useState<'myQuestions' | 'qSpace'>('myQuestions');
  const [myQuestions, setMyQuestions] = useState(dummyQuestions);
  const profile = dummyProfile;
  const qSpaceList = dummyQSpaces;

  // 잠금 버튼 토글 핸들러
  const handleLockToggle = (id: number) => {
    setMyQuestions((prevQuestions) =>
      prevQuestions.map((question) =>
        question.id === id ? { ...question, isPrivate: !question.isPrivate } : question
      )
    );
  };

  return (
    <>
      <Header title="마이페이지" />
      <Container>
        <MyProfile profile={profile} />
        <ButtonGroup>
          <Button onClick={() => alert('프로필 수정 클릭')}>프로필 수정</Button>
          <Button onClick={() => alert('프로필 공유 클릭')}>프로필 공유</Button>
        </ButtonGroup>
        <TabContainer>
          <Tab onClick={() => setActiveTab('myQuestions')} isActive={activeTab === 'myQuestions'}>
            나의 답변
          </Tab>
          <Tab onClick={() => setActiveTab('qSpace')} isActive={activeTab === 'qSpace'}>
            참여중인 소통방
          </Tab>
        </TabContainer>
        <Content>
          {activeTab === 'myQuestions' && (
            <QuestionList>
              {myQuestions.map((question) => (
                <QuestionCard
                  key={question.id}
                  date={question.date}
                  content={question.content}
                  isPrivate={question.isPrivate}
                  onLockToggle={() => handleLockToggle(question.id)}
                  onClick={() => alert(`답변 상세 페이지 이동 id(${question.id})`)}
                />
              ))}
            </QuestionList>
          )}
          {activeTab === 'qSpace' && (
            <QSpaceList>
              {qSpaceList.map((space, index) => (
                <QSpaceCard key={index} {...space} />
              ))}
            </QSpaceList>
          )}
        </Content>
      </Container>
    </>
  );
};

export default MyPage;
