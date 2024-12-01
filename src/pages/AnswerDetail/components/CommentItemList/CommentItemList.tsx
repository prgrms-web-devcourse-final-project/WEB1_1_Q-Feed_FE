import { CommentItem } from '@/pages/AnswerDetail/components/CommentItem/CommentItem';
import { Comment } from '@/pages/Main/type/comment';
import { Container } from '@chakra-ui/react';

type CommentItemListProps = {
  comments: Comment[];
  onLikeComment?: (commentId: string, isLiked: boolean, count: number) => void;
  onReplyClick?: (commentId: string) => void;
};

export const CommentItemList = ({
  comments,
  onLikeComment,
  onReplyClick,
}: CommentItemListProps) => {
  const handleLikeComment = (commentId: string, isLiked: boolean, count: number) => {
    onLikeComment?.(commentId, isLiked, count);
  };

  const handleReplyClick = (commentId: string) => {
    onReplyClick?.(commentId);
  };

  return (
    <Container>
      {comments.map((comment) => (
        <CommentItem
          key={comment.id}
          comment={comment}
          onLikeComment={handleLikeComment}
          onReplyClick={handleReplyClick}
          onClick={handleReplyClick}
          isCommentButtonExist={true}
        />
      ))}
    </Container>
  );
};
