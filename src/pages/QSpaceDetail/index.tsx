import BackButton from '@/components/ui/BackButton/BackButton';
import { CommentList } from '@/components/ui/CommentList/CommentList';
import HobbyTags from '@/components/ui/HobbyTag/HobbyTags';
import { mockDiscussionData } from '@/mocks/QspaceDetailData';
import ChatInputBar from '@/pages/ChatRoom/component/InputBar';
import DetailsHeader from '@/pages/QSpaceDetail/components/DetailsHeader/DetailsHeader';
import KebabMenu from '@/pages/QSpaceDetail/components/KebabMenu/KebabMenu';
import MemberContainer from '@/pages/QSpaceDetail/components/MemberContainer/MemberContainer';
import theme from '@/styles/theme';
import styled from '@emotion/styled';

const QSpaceDetailPage = () => {
  const { isCreator, discussion, comments } = mockDiscussionData;
  const hobbyTags = ['맛집'];

  return (
    <Container>
      <MainContent>
        <NavigationBar>
          <BackButton />
        </NavigationBar>

        <HeaderWrapper>
          <DetailsHeader
            title={discussion.title}
            creator={discussion.creator}
            profileImage={discussion.profileImage}
          />
          {isCreator && (
            <KebabMenuWrapper>
              <KebabMenu
                onEditClick={() => console.log('Edit clicked')}
                onDeleteClick={() => console.log('Delete clicked')}
                onRecruitmentStatusChange={(status) => console.log('Status changed:', status)}
                initialRecruitmentStatus={discussion.isRecruiting}
              />
            </KebabMenuWrapper>
          )}
        </HeaderWrapper>

        <ImageContainer>
          <DiscussionImage src="/src/assets/images/sample-image.jpg" alt="토론방 샘플 이미지" />
        </ImageContainer>

        <ContentArea>
          <Content>{discussion.content}</Content>
          <TagWrapper>
            <HobbyTags
              tags={hobbyTags}
              backgroundColor={theme.colors.background}
              borderColor={theme.colors.gray[200]}
              fontColor={theme.colors.gray[300]}
            />
          </TagWrapper>
        </ContentArea>

        <MemberContainer
          memberCount={discussion.memberCount}
          lastChatTime={discussion.lastChatTime}
          onMemberListClick={() => console.log('Member list clicked')}
        />

        <CommentArea>
          <CommentList
            comments={comments}
            onLikeComment={(commentId, isLiked, count) =>
              console.log('Like comment:', { commentId, isLiked, count })
            }
            onReplyClick={(commentId) => console.log('Reply clicked:', commentId)}
          />
        </CommentArea>
      </MainContent>

      <ChatInputWrapper>
        <ChatInputBar
          placeholder="메시지를 입력하세요."
          onSend={(message) => console.log('Message sent:', message)}
        />
      </ChatInputWrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 6rem);
  background-color: ${theme.colors.background};
  position: relative;
`;

const MainContent = styled.div`
  flex: 1;
  overflow-y: auto;
  padding-bottom: 4rem; /* ChatInputWrapper 높이만큼 여백 추가 */
`;

const NavigationBar = styled.div`
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${theme.colors.gray[100]};
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

const ImageContainer = styled.div`
  width: 80%;
  height: 320px;
  background-color: ${theme.colors.gray[100]};
  overflow: hidden;
  border-radius: 1rem;
  margin: 0 auto;
  margin-bottom: 1rem;
`;

const DiscussionImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ContentArea = styled.div`
  padding: 1rem;
`;

const Content = styled.div`
  font-size: ${theme.typography.body2.size};
  color: ${theme.colors.black};
  white-space: pre-wrap;
  margin-bottom: 1rem;
`;

const TagWrapper = styled.div`
  margin-top: 0.5rem;
`;

const CommentArea = styled.div`
  padding: 0.5rem;
  background-color: ${theme.colors.white80};
  padding-bottom: calc(5rem + 12px);
`;

const ChatInputWrapper = styled.div`
  position: fixed;
  bottom: 5rem; /* footer 높이만큼 위로 */
  left: 0;
  right: 0;
  background-color: ${theme.colors.white80};
  padding: 0.5rem;
  max-width: 430px;
  margin: 0 auto;
  z-index: 10;
`;

export default QSpaceDetailPage;
