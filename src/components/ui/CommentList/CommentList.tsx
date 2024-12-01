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
  id: string;
  author: {
    name: string;
    profileImage?: string;
  };
  content: string;
  createdAt: string;
  likes: number;
  isLiked: boolean;
  replyCount: number;
}

interface CommentListProps {
  comments: Comment[];
  onLikeComment?: (commentId: string, isLiked: boolean, count: number) => void;
  onReplyClick?: (commentId: string) => void;
}

export const CommentList = ({ comments, onLikeComment, onReplyClick }: CommentListProps) => {
  const formatTime = (dateString: string) => {
    const now = new Date();
    const commentDate = new Date(dateString);
    const diffInHours = Math.floor((now.getTime() - commentDate.getTime()) / (1000 * 60 * 60));

    if (diffInHours < 1) {
      const diffInMinutes = Math.floor((now.getTime() - commentDate.getTime()) / (1000 * 60));
      return `${diffInMinutes}분 전`;
    }
    if (diffInHours < 24) {
      return `${diffInHours}시간 전`;
    }
    const diffInDays = Math.floor(diffInHours / 24);
    return `${diffInDays}일 전`;
  };

  return (
    <Container>
      {comments.map((comment) => (
        <CommentItem key={comment.id}>
          <StyledAvatar src={comment.author.profileImage} name={comment.author.name} size="sm" />
          <CommentContent>
            <AuthorInfo>
              <AuthorName>{comment.author.name}</AuthorName>
              <CreatedAt>{formatTime(comment.createdAt)}</CreatedAt>
            </AuthorInfo>
            <Content>{comment.content}</Content>
            <ActionButtons>
              <LikeButtonContainer
                size="small"
                initialCount={comment.likes}
                initialLiked={comment.isLiked}
                onLikeChange={(isLiked, count) => onLikeComment?.(comment.id, isLiked, count)}
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
