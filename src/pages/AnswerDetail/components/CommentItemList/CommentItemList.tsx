import { CommentItem } from '@/pages/AnswerDetail/components/CommentItem/CommentItem';
import { PostComments } from '@/pages/AnswerDetail/type/postType';
import { Container } from '@chakra-ui/react';

type CommentItemListProps = {
  comments: PostComments[];
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
          key={comment.commentId}
          commentId={comment.commentId}
          profileImage={comment.profileImage}
          nickName={comment.authorNickname}
          content={comment.content}
          createdAt={comment.createdAt}
          likeCount={comment.likeCount}
          isLike={comment.isLike}
          replyCount={comment.childCommentCount}
          comments={comment.children}
          onLikeComment={handleLikeComment}
          onReplyClick={handleReplyClick}
          onClick={handleReplyClick}
          isCommentButtonExist={true}
        />
      ))}
    </Container>
  );
};
