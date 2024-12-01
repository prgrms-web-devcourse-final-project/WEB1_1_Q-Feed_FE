import BackButton from '@/components/ui/BackButton/BackButton';
import { CommentList } from '@/components/ui/CommentList/CommentList';
import HobbyTags from '@/components/ui/HobbyTag/HobbyTags';
import { mockDiscussionData } from '@/mocks/QspaceDetailData';
import ChatInputBar from '@/pages/ChatRoom/component/InputBar';
import DetailsHeader from '@/pages/QSpaceDetail/components/DetailsHeader/DetailsHeader';
import KebabMenu from '@/pages/QSpaceDetail/components/KebabMenu/KebabMenu';
import MemberContainer from '@/pages/QSpaceDetail/components/MemberContainer/MemberContainer';
import {
  ChatInputWrapper,
  CommentArea,
  Container,
  Content,
  ContentArea,
  DiscussionImage,
  HeaderWrapper,
  ImageContainer,
  KebabMenuWrapper,
  MainContent,
  NavigationBar,
  TagWrapper,
} from '@/pages/QSpaceDetail/styles';
import theme from '@/styles/theme';

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

export default QSpaceDetailPage;
