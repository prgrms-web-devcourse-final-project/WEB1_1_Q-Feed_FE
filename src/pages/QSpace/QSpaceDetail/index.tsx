import { useLocation, useNavigate } from 'react-router-dom';
import { useUserStore } from '@/store/userStore';

import HobbyTags from '@/components/ui/HobbyTag/HobbyTags';
import BackButton from '@/components/ui/BackButton/BackButton';
import { CommentList } from '@/components/ui/CommentList/CommentList';
import LoadingSpinner from '@/components/ui/LoadingSpinner/LoadingSpinner';
import ChatInputBar from '@/pages/ChatRoom/component/InputBar';

import { useGroupDetail } from '@/pages/QSpace/hooks/useGroupDetail';
import {
  useCreatePost,
  useDeleteGroup,
  useJoinGroup,
  useLikePost,
} from '@/pages/QSpace/hooks/useGroupMutations';

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

const QSpaceDetailPage = () => {
  const navigate = useNavigate();
  const { userId } = useUserStore();
  const location = useLocation();

  const groupId = location.state?.groupId;
  const { data: groupDetail, isPending } = useGroupDetail(groupId);

  const joinGroupMutation = useJoinGroup(groupId);
  const createPostMutation = useCreatePost(groupId);
  const likePostMutation = useLikePost(groupId);
  const deleteGroupMutation = useDeleteGroup(groupId);

  const handleJoinGroup = () => {
    if (!userId) {
      navigate('/login');
      return;
    }
    joinGroupMutation.mutate();
  };

  const handleMemberListClick = () => {
    navigate(`/groups/${groupId}/members`);
  };

  const isCurrentUserAdmin = groupDetail?.adminId === userId;
  const isCurrentUserMember =
    joinGroupMutation.isSuccess || groupDetail?.members.some((member) => member.userId === userId);

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
          {isCurrentUserAdmin && (
            <KebabMenuWrapper>
              <KebabMenu
                onEditClick={() => navigate(`/groups/${groupId}/edit`)}
                onDeleteClick={() => deleteGroupMutation.mutate()}
              />
            </KebabMenuWrapper>
          )}
        </HeaderWrapper>

        <ImageContainer>
          <DiscussionImage src={groupDetail.url} alt="토론방 이미지" />
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

        {!isCurrentUserMember && !isCurrentUserAdmin && (
          <JoinButtonContainer>
            <JoinButton onClick={handleJoinGroup}>토론 참여하기</JoinButton>
          </JoinButtonContainer>
        )}

        {(isCurrentUserMember || isCurrentUserAdmin) && (
          <>
            <CommentArea>
              <CommentList
                comments={groupDetail.posts.map((post) => ({
                  id: post.groupPostId,
                  content: post.content,
                  author: post.nickname,
                  profileImage: post.profile,
                  createdAt: post.createdAt,
                  likeCount: post.likeCount,
                }))}
                onLikeComment={(commentId) => likePostMutation.mutate(commentId)}
              />
            </CommentArea>

            <ChatInputWrapper>
              <ChatInputBar
                placeholder="메시지를 입력하세요"
                onSend={(content) => createPostMutation.mutate(content)}
              />
            </ChatInputWrapper>
          </>
        )}
      </MainContent>
    </Container>
  );
};

export default QSpaceDetailPage;
