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
import { PostComments } from '@/pages/AnswerDetail/type/postType';
import { formatLastUpdated } from '@/utils/formatLastUpdated';

// comment: Comment;
type SubCommentItemProps = {
  comment: PostComments;
  onLikeComment?: (commentId: string, isLiked: boolean, count: number) => void;
};

export const SubCommentItem = ({ comment, onLikeComment }: SubCommentItemProps) => {
  return (
    <Container>
      <StyledAvatar src={comment.profileImage} name={comment.authorNickname} size="sm" />
      <CommentContent>
        <AuthorInfo>
          <AuthorName>{comment.authorNickname}</AuthorName>
          <CreatedAt>{formatLastUpdated(comment.createdAt)}</CreatedAt>
        </AuthorInfo>
        <ContentWrapper>
          <Content>{comment.content}</Content>
          <ActionButtons>
            <VerticalHeartButton
              size="medium"
              initialCount={comment.likeCount}
              initialLiked={comment.isLike}
              onLikeChange={(isLiked, count) =>
                onLikeComment?.(comment.answerId.toString(), isLiked, count)
              }
            />
          </ActionButtons>
        </ContentWrapper>
      </CommentContent>
    </Container>
  );
};
