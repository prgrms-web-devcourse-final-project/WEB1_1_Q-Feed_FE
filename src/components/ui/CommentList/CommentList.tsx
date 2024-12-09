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
interface Comment {
  id: number; // groupPostId로 변경
  content: string;
  author: string; // nickname으로 변경
  profileImage: string; // profile로 변경
  createdAt: string;
  likeCount: number;
}

interface CommentListProps {
  comments: Comment[];
  onLikeComment?: (commentId: number) => void; // 좋아요만 처리하도록 변경
}

export const CommentList = ({ comments, onLikeComment }: CommentListProps) => {
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
            </ActionButtons>
          </CommentContent>
        </CommentItem>
      ))}
    </Container>
  );
};

export default CommentList;
