import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/pages/MyPage/components/Header/Header';
import QuestionCard from '@/pages/MyPage/components/QuestionCard/QuestionCard';
import Button from '@/pages/MyPage/components/Button/Button';
import MyProfile from '@/pages/MyPage/components/MyProfile/MyProfile';
import QSpaceCard from '@/components/ui/QSpaceCard/QSpaceCard';
import { dummyProfile, dummyQuestions, dummyQSpaces } from '@/mocks/dunmyMyProfile';
import {
  ButtonGroup,
  Container,
  Content,
  QSpaceList,
  QuestionList,
  Tab,
  TabContainer,
} from '@/pages/MyPage/styles';

const MyPage = () => {
  const navigate = useNavigate();
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
          <Button onClick={() => navigate('/profile/edit')}>프로필 수정</Button>
          <Button onClick={() => alert('프로필 링크 복사')}>프로필 공유</Button>
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
