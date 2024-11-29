import styled from '@emotion/styled';
import theme from '@/styles/theme';
import DetailsHeader from '@/pages/QSpaceDetail/components/DetailsHeader/DetailsHeader';
import ChatInputBar from '@/pages/ChatRoom/component/InputBar';
import MemberContainer from '@/pages/QSpaceDetail/components/MemberContainer/MemberContainer';
import { CommentList } from '@/components/ui/CommentList/CommentList';
import KebabMenu from '@/pages/QSpaceDetail/components/KebabMenu/KebabMenu';
import { mockDiscussionData } from '@/mocks/QspaceDetailData';

const QSpaceDetailPage = () => {
  const { isCreator, discussion, comments } = mockDiscussionData;

  const handleEditClick = () => {
    console.log('Edit clicked');
  };

  const handleDeleteClick = () => {
    console.log('Delete clicked');
  };

  const handleRecruitmentStatusChange = (isRecruiting: boolean) => {
    console.log('Recruitment status changed:', isRecruiting);
  };

  const handleLikeComment = (commentId: string, isLiked: boolean, count: number) => {
    console.log('Like comment:', { commentId, isLiked, count });
  };

  const handleReplyClick = (commentId: string) => {
    console.log('Reply clicked:', commentId);
  };

  const handleMemberListClick = () => {
    console.log('Member list clicked');
  };

  const handleSendMessage = (message: string) => {
    console.log('Message sent:', message);
  };

  return (
    <Container>
      <MainContent>
        <HeaderWrapper>
          <DetailsHeader
            title={discussion.title}
            creator={discussion.creator}
            profileImage={discussion.profileImage}
          />
          {isCreator && (
            <KebabMenuWrapper>
              <KebabMenu
                onEditClick={handleEditClick}
                onDeleteClick={handleDeleteClick}
                onRecruitmentStatusChange={handleRecruitmentStatusChange}
                initialRecruitmentStatus={discussion.isRecruiting}
              />
            </KebabMenuWrapper>
          )}
        </HeaderWrapper>

        <ContentArea>
          <Content>{discussion.content}</Content>
        </ContentArea>

        <MemberContainer
          memberCount={discussion.memberCount}
          lastChatTime={discussion.lastChatTime}
          onMemberListClick={handleMemberListClick}
        />

        <CommentArea>
          <CommentList
            comments={comments}
            onLikeComment={handleLikeComment}
            onReplyClick={handleReplyClick}
          />
        </CommentArea>
      </MainContent>

      <BottomSection>
        <InputBarWrapper>
          <ChatInputBar placeholder="메시지를 입력하세요." onSend={handleSendMessage} />
        </InputBarWrapper>

        <BottomNavigation>
          <NavButton>홈</NavButton>
          <NavButton>카테고리</NavButton>
          <NavButton>채팅</NavButton>
          <NavButton>마이</NavButton>
        </BottomNavigation>
      </BottomSection>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: ${theme.colors.white};
`;

const MainContent = styled.div`
  flex: 1;
  overflow-y: auto;
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${theme.colors.gray[100]};
`;

const KebabMenuWrapper = styled.div`
  padding-right: 1rem;
`;

const ContentArea = styled.div`
  padding: 1rem;
`;

const Content = styled.div`
  font-size: ${theme.typography.body2.size};
  color: ${theme.colors.black};
  white-space: pre-wrap;
`;

const CommentArea = styled.div`
  padding: 1rem;
  background-color: ${theme.colors.background};
`;

const BottomSection = styled.div`
  position: sticky;
  bottom: 0;
  background-color: ${theme.colors.white};
  border-top: 1px solid ${theme.colors.gray[100]};
`;

const InputBarWrapper = styled.div`
  padding: 1rem;
`;

const BottomNavigation = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 1rem;
  border-top: 1px solid ${theme.colors.gray[100]};
`;

const NavButton = styled.button`
  background: none;
  border: none;
  color: ${theme.colors.gray[400]};
  font-size: ${theme.typography.body2.size};
  font-family: ${theme.typography.fontFamily.korean};
  cursor: pointer;

  &:hover {
    color: ${theme.colors.gray[600]};
  }
`;

export default QSpaceDetailPage;
