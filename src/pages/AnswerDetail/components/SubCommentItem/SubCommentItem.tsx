import { Comment } from '@/pages/Main/type/comment';
import { formatTime } from '@/pages/AnswerDetail/util/timeFormat';
import { VerticalHeartButton } from '@/pages/AnswerDetail/components/VerticalHeartButton/VerticalHeartButton';
import {
  ActionButtons,
  AuthorInfo,
  AuthorName,
  CommentContent,
  Content,
  CreatedAt,
  StyledAvatar,
} from '@/pages/AnswerDetail/components/CommentItem/CommentItem.styles';
import {
  Container,
  ContentWrapper,
} from '@/pages/AnswerDetail/components/SubCommentItem/SubCommentItem.styles';

type SubCommentItemProps = {
  comment: Comment;
  onLikeComment?: (commentId: string, isLiked: boolean, count: number) => void;
};

export const SubCommentItem = ({ comment, onLikeComment }: SubCommentItemProps) => {
  return (
    <Container>
      <StyledAvatar src={comment.author.profileImage} name={comment.author.name} size="sm" />
      <CommentContent>
        <AuthorInfo>
          <AuthorName>{comment.author.name}</AuthorName>
          <CreatedAt>{formatTime(comment.createdAt)}</CreatedAt>
        </AuthorInfo>
        <ContentWrapper>
          <Content>{comment.content}</Content>
          <ActionButtons>
            <VerticalHeartButton
              size="medium"
              initialCount={comment.likes}
              initialLiked={comment.isLiked}
              onLikeChange={(isLiked, count) => onLikeComment?.(comment.id, isLiked, count)}
            />
          </ActionButtons>
        </ContentWrapper>
      </CommentContent>
    </Container>
  );
};
