import { useState, useEffect } from 'react';
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
import { useUserGroups } from '@/pages/MyPage/hooks/useUserGroups';
import { useInfiniteAnswers } from '@/pages/MyPage/hooks/useAnswers';
import { getQSpaceCard } from '@/utils/getQSpaceCard';
import ErrorPage from '@/pages/Error';
import LoadingSpinner from '@/components/ui/LoadingSpinner/LoadingSpinner';
import { useAnswerVisibility } from '@/pages/MyPage/api/useAnswerVisibility';
import { useUserStore } from '@/store/userStore';
import {
  ButtonGroup,
  Container,
  Content,
  QSpaceList,
  QuestionList,
  Tab,
  TabContainer,
  MoreText,
} from '@/pages/MyPage/styles';

import { useNavigation } from '@/hooks/useNavigation';
const MyPage = () => {
  const { gotoLogin, gotoProfileEditPage, gotoDetailPage } = useNavigation();

  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'myQuestions' | 'qSpace'>('myQuestions');
  const { userId } = useUserStore();

  const {
    data: profile,
    isLoading: profileLoading,
    error: profileError,
    refetch: refetchProfile,
  } = useUserProfile(userId || '');
  const {
    data: interests,
    isLoading: interestsLoading,
    error: interestsError,
    refetch: refetchInterests,
  } = useUserInterests(userId || '');
  const {
    data: groups,
    isLoading: groupsLoading,
    error: groupsError,
    refetch: refetchGroups,
  } = useUserGroups();
  const {
    data: answerData,
    fetchNextPage,
    hasNextPage,
    isLoading: answersLoading,
    error: answersError,
    refetch: refetchAnswers,
  } = useInfiniteAnswers(userId || '', 5);
  const { mutate: toggleVisibility } = useAnswerVisibility();

  const handleLockToggle = (answerId: number, currentVisibility: boolean) => {
    toggleVisibility({ answerId, visibility: !currentVisibility });
  };

  const handleCopyProfileLink = () => {
    const profileLink = `${window.location.origin}/profile/users/${userId}`;
    copyToClipboard(profileLink);
  };

  useEffect(() => {
    if (!userId) {
      gotoLogin();
    }
  }, [userId, navigate, gotoLogin]);

  useEffect(() => {
    if (userId) {
      refetchProfile();
      refetchInterests();
      refetchGroups();
      refetchAnswers();
    }
  }, [refetchAnswers, refetchGroups, refetchInterests, refetchProfile, userId]);

  const myProfileData = {
    name: profile?.nickname || '',
    email: profile?.email || '',
    followers: profile?.followerCount || 0,
    following: profile?.followingCount || 0,
    bio: profile?.description || '',
    profileImage: profile?.profileImageUrl || null,
    tags: interests?.map((interest) => interestsMap[interest]) || [],
  };

  if (profileError || interestsError || groupsError || answersError) {
    return (
      <Container>
        <ErrorPage />
      </Container>
    );
  }

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
              <Button onClick={() => gotoProfileEditPage()}>프로필 수정</Button>
              <Button onClick={handleCopyProfileLink}>프로필 공유</Button>
            </ButtonGroup>
            <TabContainer>
              <Tab
                onClick={() => setActiveTab('myQuestions')}
                isActive={activeTab === 'myQuestions'}
              >
                나의 답변
              </Tab>
              <Tab onClick={() => setActiveTab('qSpace')} isActive={activeTab === 'qSpace'}>
                나의 큐스페이스
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
                        onClick={() => gotoDetailPage(`${answer.answerId}`)}
                      />
                    ))
                  )}
                  {hasNextPage && (
                    <button onClick={() => fetchNextPage()}>
                      <MoreText>더보기</MoreText>
                    </button>
                  )}
                </QuestionList>
              )}
              {activeTab === 'qSpace' && (
                <QSpaceList>
                  {groupsLoading ? (
                    <LoadingSpinner />
                  ) : (
                    groups?.map((group, index) => (
                      <QSpaceCard key={index} {...getQSpaceCard(group)} />
                    ))
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
