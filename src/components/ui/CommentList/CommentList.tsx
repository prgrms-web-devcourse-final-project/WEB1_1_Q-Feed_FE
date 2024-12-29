import {
  ActionButtons,
  AuthorInfo,
  AuthorName,
  CommentContent,
  CommentItem,
  Container,
  Content,
  CreatedAt,
  StyledAvatar,
} from '@/components/ui/CommentList/CommentList.styles';
import LikeButtonContainer from '@/components/ui/LikeButtonContainer/LikeButtonContainer';
import ReplyContainer from '@/components/ui/ReplyContainer/ReplyContainer';
interface Comment {
  id: number;
  content: string;
  author: string;
  profileImage: string;
  createdAt: string;
  likeCount: number;
  replyCount: number;
}

interface CommentListProps {
  comments: Comment[];
  onLikeComment?: (commentId: number) => void;
  onReplyClick?: (commentId: number) => void;
}

export const CommentList = ({ comments, onLikeComment, onReplyClick }: CommentListProps) => {
  return (
    <Container>
      {comments.map((comment) => (
        <CommentItem key={comment.id}>
          <StyledAvatar src={comment.profileImage} name={comment.author} size="sm" />
          <CommentContent>
            <AuthorInfo>
              <AuthorName>{comment.author}</AuthorName>
              <CreatedAt>{comment.createdAt}</CreatedAt>
            </AuthorInfo>
            <Content>{comment.content}</Content>
            <ActionButtons>
              <LikeButtonContainer
                size="small"
                initialCount={comment.likeCount}
                onLikeChange={() => onLikeComment?.(comment.id)}
              />
              <ReplyContainer
                replyCount={comment.replyCount}
                onReplyClick={() => onReplyClick?.(comment.id)}
              />
            </ActionButtons>
          </CommentContent>
        </CommentItem>
      ))}
    </Container>
  );
};

export default CommentList;
