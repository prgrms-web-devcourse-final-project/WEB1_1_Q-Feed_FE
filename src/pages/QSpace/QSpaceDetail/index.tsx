import { useLocation, useNavigate } from 'react-router-dom';
import { useMemo } from 'react';

import HobbyTags from '@/components/ui/HobbyTag/HobbyTags';
import BackButton from '@/components/ui/BackButton/BackButton';
import { CommentList } from '@/components/ui/CommentList/CommentList';
import LoadingSpinner from '@/components/ui/LoadingSpinner/LoadingSpinner';
import { useUserStore } from '@/store/userStore';
import ChatInputBar from '@/pages/ChatRoom/component/InputBar';

import { useGroupDetail } from '@/pages/QSpace/hooks/Query/useGroupDetail';
import {
  useCreatePost,
  useDeleteGroup,
  useJoinGroup,
  useLikePost,
} from '@/pages/QSpace/hooks/Mutation/useGroupMutations';

import {
  Container,
  MainContent,
  NavigationBar,
  HeaderWrapper,
  ImageContainer,
  KebabMenuWrapper,
  ContentArea,
  Content,
  TagWrapper,
  CommentArea,
  ChatInputWrapper,
  JoinButtonContainer,
  DiscussionImage,
  JoinButton,
} from './styles';
import DetailsHeader from '@/pages/QSpace/QSpaceDetail/components/DetailsHeader/DetailsHeader';
import KebabMenu from '@/pages/QSpace/QSpaceDetail/components/KebabMenu/KebabMenu';
import MemberContainer from '@/pages/QSpace/QSpaceDetail/components/MemberContainer/MemberContainer';
import { formatLastUpdated } from '@/utils/formatLastUpdated';

const QSpaceDetailPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const groupId = location.state?.groupId;
  const { data: groupDetail, isPending } = useGroupDetail(groupId);
  const { userId } = useUserStore();

  const joinGroup = useJoinGroup(groupId);
  const createPost = useCreatePost(groupId);
  const likePost = useLikePost(groupId);
  const deleteGroup = useDeleteGroup(groupId);

  const isMember = useMemo(
    () => groupDetail?.members.some((member) => member.userId === userId),
    [groupDetail?.members, userId]
  );

  console.log(userId);

  const isAdmin = useMemo(() => groupDetail?.adminId === userId, [groupDetail?.adminId, userId]);

  const canJoinGroup = !isMember && !isAdmin;

  const handleJoinGroup = () => {
    joinGroup.mutate();
  };

  const handleMemberListClick = () => {
    navigate(`/groups/${groupId}/members`);
  };

  if (isPending) {
    return <LoadingSpinner />;
  }

  if (!groupDetail) {
    navigate('/error', {
      state: {
        message: '토론방을 찾을 수 없습니다',
      },
    });
    return null;
  }

  return (
    <Container>
      <MainContent>
        <NavigationBar>
          <BackButton />
        </NavigationBar>

        <HeaderWrapper>
          <DetailsHeader
            groupName={groupDetail.groupName}
            adminNickname={
              groupDetail.members.find((member) => member.userId === groupDetail.adminId)
                ?.userNickname || ''
            }
            adminProfile={
              groupDetail.members.find((member) => member.userId === groupDetail.adminId)
                ?.userProfile
            }
          />
          {isAdmin && (
            <KebabMenuWrapper>
              <KebabMenu
                groupId={groupId}
                isOpen={groupDetail.isOpen}
                onEditClick={() => navigate(`/groups/${groupId}/edit`, { state: { groupId } })}
                onDeleteClick={() => deleteGroup.mutate()}
              />
            </KebabMenuWrapper>
          )}
        </HeaderWrapper>

        <ImageContainer>
          <DiscussionImage crossOrigin="anonymous" src={groupDetail.url} alt="토론방 이미지" />
        </ImageContainer>

        <ContentArea>
          <Content>{groupDetail.description}</Content>
          <TagWrapper>
            <HobbyTags
              tags={[groupDetail.categoryName]}
              backgroundColor="white"
              borderColor="gray.200"
              fontColor="gray.500"
            />
          </TagWrapper>
        </ContentArea>

        <MemberContainer
          memberCount={groupDetail.members.length}
          lastChatTime={groupDetail.posts[0]?.createdAt}
          onMemberListClick={handleMemberListClick}
        />

        {canJoinGroup ? (
          <JoinButtonContainer>
            <JoinButton onClick={handleJoinGroup} disabled={joinGroup.isPending}>
              {joinGroup.isPending ? '참여 중...' : '토론 참여하기'}
            </JoinButton>
          </JoinButtonContainer>
        ) : (
          <>
            <CommentArea>
              <CommentList
                comments={groupDetail.posts.map((post) => ({
                  id: post.groupPostId,
                  content: post.content,
                  author: post.nickname,
                  profileImage: post.profile,
                  createdAt: formatLastUpdated(post.createdAt),
                  likeCount: post.likeCount,
                }))}
                onLikeComment={(commentId) => likePost.mutate(commentId)}
              />
            </CommentArea>

            <ChatInputWrapper>
              <ChatInputBar
                placeholder="메시지를 입력하세요"
                onSend={(content) => createPost.mutate(content)}
              />
            </ChatInputWrapper>
          </>
        )}
      </MainContent>
    </Container>
  );
};

export default QSpaceDetailPage;
