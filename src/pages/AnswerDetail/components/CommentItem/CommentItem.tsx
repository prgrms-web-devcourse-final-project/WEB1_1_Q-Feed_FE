import LikeButtonContainer from '@/components/ui/LikeButtonContainer/LikeButtonContainer';
import { Comment } from '@/pages/Main/type/comment';
import { useState } from 'react';
import { SlideDown } from 'react-slidedown';
import 'react-slidedown/lib/slidedown.css';
import { formatTime } from '@/pages/AnswerDetail/util/timeFormat';
import { SubCommentItem } from '@/pages/AnswerDetail/components/SubCommentItem/SubCommentItem';
import {
  Container,
  ActionButtons,
  AddReplyButton,
  AuthorInfo,
  AuthorName,
  CommentContent,
  CommentWrapper,
  Content,
  CreatedAt,
  RepliesWrapper,
  StyledAvatar,
} from '@/pages/AnswerDetail/components/CommentItem/CommentItem.styles';
import ReplyContainer from '@/components/ui/ReplyContainer/ReplyContainer';

type CommentItemProps = {
  comment: Comment;
  onLikeComment?: (commentId: string, isLiked: boolean, count: number) => void;
  onReplyClick?: (commentId: string) => void;
  onClick?: (commentId: string) => void;
  depth?: number;
  isCommentButtonExist?: boolean;
};

export const CommentItem = ({
  comment,
  onLikeComment,
  onReplyClick,
  onClick,
  depth = 0,
  isCommentButtonExist = false,
}: CommentItemProps) => {
  const [showReplies, setShowReplies] = useState(false);

  return (
    <CommentWrapper>
      <Container depth={depth} isCommentButtonExist={isCommentButtonExist}>
        <StyledAvatar src={comment.author.profileImage} name={comment.author.name} size="sm" />
        <CommentContent>
          <AuthorInfo>
            <AuthorName>{comment.author.name}</AuthorName>
            <CreatedAt>{formatTime(comment.createdAt)}</CreatedAt>
          </AuthorInfo>
          <Content
            onClick={() => {
              onClick?.(comment.id);
              setShowReplies(!showReplies);
            }}
          >
            {comment.content}
          </Content>
          <ActionButtons>
            <LikeButtonContainer
              size="small"
              initialCount={comment.likes}
              initialLiked={comment.isLiked}
              onLikeChange={(isLiked, count) => onLikeComment?.(comment.id, isLiked, count)}
            />
            <ReplyContainer
              replyCount={comment.replyCount}
              onReplyClick={() => {
                onReplyClick?.(comment.id);
                setShowReplies(!showReplies);
              }}
            />
            {isCommentButtonExist && <AddReplyButton>답글 달기</AddReplyButton>}
          </ActionButtons>
        </CommentContent>
      </Container>
      <SlideDown>
        {showReplies && comment.replies && (
          <RepliesWrapper>
            {comment.replies.map((reply) => (
              <SubCommentItem comment={reply} key={reply.id} onLikeComment={onLikeComment} />
            ))}
          </RepliesWrapper>
        )}
      </SlideDown>
    </CommentWrapper>
  );
};
