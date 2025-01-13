import { CommentItem } from '@/pages/AnswerDetail/components/CommentItem/CommentItem';
import { PostComments } from '@/pages/AnswerDetail/type/postType';
import { useCancelLike } from '@/pages/Main/hooks/useCancelLikeFeed';
import { useLikeFeed } from '@/pages/Main/hooks/useLikeFeed';
import { Container } from '@chakra-ui/react';

type CommentItemListProps = {
  comments: PostComments[];
  onLikeComment?: (commentId: string, isLiked: boolean, count: number) => void;
  onReplyClick?: (commentId: string) => void;
  onLoadMore?: () => void;
};

export const CommentItemList = ({
  comments,
  onLikeComment,
  onReplyClick,
  onLoadMore,
}: CommentItemListProps) => {
  const likeMutation = useLikeFeed();
  const cancelLikeMutation = useCancelLike();
  const handleLikeComment = (commentId: string, isLiked: boolean, count: number) => {
    onLikeComment?.(commentId, isLiked, count);

    if (!isLiked) {
      cancelLikeMutation.mutate(commentId, {
        onSuccess: () => {},
        onError: (error) => {
          console.error(error);
        },
      });
    } else {
      likeMutation.mutate(commentId, {
        onSuccess: () => {},
        onError: (error) => {
          console.error(error);
        },
      });
    }
  };

  const handleReplyClick = (commentId: string) => {
    onReplyClick?.(commentId);
  };

  return (
    <Container>
      {comments.map((comment) => (
        <CommentItem
          key={comment.answerId}
          commentId={comment.answerId}
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
        />
      ))}

      {onLoadMore && <button onClick={onLoadMore}>더 많은 댓글 보기</button>}
    </Container>
  );
};
