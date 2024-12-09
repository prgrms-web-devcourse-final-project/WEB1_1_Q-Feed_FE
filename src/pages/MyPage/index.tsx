import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { copyToClipboard } from '@/pages/MyPage/utils/clipboard';
import { formatDate } from '@/pages/MyPage/utils/date';
import Header from '@/pages/MyPage/components/Header/Header';
import QuestionCard from '@/pages/MyPage/components/QuestionCard/QuestionCard';
import Button from '@/pages/MyPage/components/Button/Button';
import MyProfile from '@/pages/MyPage/components/MyProfile/MyProfile';
import QSpaceCard from '@/components/ui/QSpaceCard/QSpaceCard';
import { useUserProfile, useUserInterests } from './hooks/useUserProfile';
import { interestsMap } from '@/pages/MyPage/utils/interestsMap';
import { useGroups } from '@/pages/QSpace/hooks/useGroupList';
import { useInfiniteAnswers } from '@/pages/MyPage/hooks/useAnswers';
import { categoryIdMap } from '@/utils/categoryIdMap';
import { getQSpaceCard } from '@/utils/getQSpaceCard';
import ErrorPage from '@/pages/Error';
import LoadingSpinner from '@/components/ui/LoadingSpinner/LoadingSpinner';
import { useAnswerVisibility } from '@/pages/MyPage/api/useAnswerVisibility';
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

  const userId = '18312fd3-a56f-4b91-80d2-dab72c584857';

  const { data: profile, isLoading: profileLoading, error: profileError } = useUserProfile(userId);
  const { data: interests, isLoading: interestsLoading, error: interestsError } =
    useUserInterests(userId);
  const { data: groups, isPending, error: groupError } = useGroups(categoryIdMap['전체']);
  const {
    data: answerData,
    fetchNextPage,
    hasNextPage,
    isLoading: answersLoading,
    error: answersError,
  } = useInfiniteAnswers(userId, 10);
  const { mutate: toggleVisibility } = useAnswerVisibility();

  const handleLockToggle = (answerId: number, currentVisibility: boolean) => {
    toggleVisibility({ answerId, visibility: !currentVisibility });
  };

  const handleCopyProfileLink = () => {
    const profileLink = `${window.location.origin}/profile/${userId}`;
    copyToClipboard(profileLink);
  };

  if (profileError || interestsError || groupError || answersError) {
    return (
      <Container>
        <ErrorPage />
      </Container>
    );
  }

  const myProfileData = {
    name: profile?.nickname || '',
    email: profile?.email || '',
    followers: profile?.followerCount || 0,
    following: profile?.followingCount || 0,
    bio: profile?.description || '',
    profileImage: profile?.profileImageUrl || null,
    tags: interests?.map((interest) => interestsMap[interest]) || [],
  };

  return (
    <>
      <Header title="마이페이지" />
      <Container>
        {profileLoading || interestsLoading ? (
          <LoadingSpinner />
        ) : (
          <>
            {myProfileData && <MyProfile profile={myProfileData} />}
            <ButtonGroup>
              <Button onClick={() => navigate('/profile/edit')}>프로필 수정</Button>
              <Button onClick={handleCopyProfileLink}>프로필 공유</Button>
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
                  {answersLoading && <LoadingSpinner />}
                  {answersError && <p>Error loading answers</p>}
                  {answerData?.pages.map((page) =>
                    page.answers.map((answer) => (
                      <QuestionCard
                        key={answer.answerId}
                        date={formatDate(answer.createdAt)}
                        content={answer.answerContent}
                        isPrivate={!answer.visibility}
                        onLockToggle={() => handleLockToggle(answer.answerId, answer.visibility)}
                        onClick={() => alert(`답변 상세 페이지 이동 id(${answer.answerId})`)}
                      />
                    ))
                  )}
                  {hasNextPage && (
                    <button onClick={() => fetchNextPage()}>
                      더보기
                    </button>
                  )}
                </QuestionList>
              )}
              {activeTab === 'qSpace' && (
                <QSpaceList>
                  {isPending ? (
                    <LoadingSpinner />
                  ) : (
                    groups?.map((group) => <QSpaceCard {...getQSpaceCard(group)} />)
                  )}
                </QSpaceList>
              )}
            </Content>
          </>
        )}
      </Container>
    </>
  );
};

export default MyPage;
