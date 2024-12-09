import LikeButtonContainer from '@/components/ui/LikeButtonContainer/LikeButtonContainer';
import { useState } from 'react';
import { SlideDown } from 'react-slidedown';
import 'react-slidedown/lib/slidedown.css';
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
import { PostComments } from '@/pages/AnswerDetail/type/postType';
import { formatLastUpdated } from '@/utils/formatLastUpdated';

type CommentItemProps = {
  commentId: number;
  profileImage: string;
  nickName: string;
  content: string;
  createdAt: string;
  likeCount: number;
  isLike: boolean;
  replyCount: number;
  comments: PostComments[];
  onLikeComment?: (commentId: string, isLiked: boolean, count: number) => void;
  onReplyClick?: (commentId: string) => void;
  onClick?: (commentId: string) => void;
  depth?: number;
  isCommentButtonExist?: boolean;
};

export const CommentItem = ({
  commentId,
  profileImage,
  nickName,
  content,
  createdAt,
  likeCount,
  isLike,
  replyCount,
  comments,
  onLikeComment,
  onReplyClick,
  onClick,
  depth = 0,
  isCommentButtonExist = false,
}: CommentItemProps) => {
  const [showReplies, setShowReplies] = useState(false);

  return (
    <CommentWrapper hideBorder={true}>
      <Container depth={depth} isCommentButtonExist={isCommentButtonExist}>
        <StyledAvatar src={profileImage} name={nickName} size="sm" />
        <CommentContent>
          <AuthorInfo>
            <AuthorName>{nickName}</AuthorName>
            <CreatedAt>{formatLastUpdated(createdAt)}</CreatedAt>
          </AuthorInfo>
          <Content
            onClick={() => {
              onClick?.(commentId.toString());
              setShowReplies(!showReplies);
            }}
          >
            {content}
          </Content>
          <ActionButtons>
            <LikeButtonContainer
              size="small"
              initialCount={likeCount}
              initialLiked={isLike}
              onLikeChange={(isLiked, count) =>
                onLikeComment?.(commentId.toString(), isLiked, count)
              }
            />
            <ReplyContainer
              replyCount={replyCount}
              onReplyClick={() => {
                onReplyClick?.(commentId.toString());
                setShowReplies(!showReplies);
              }}
            />
            {isCommentButtonExist && <AddReplyButton>답글 달기</AddReplyButton>}
          </ActionButtons>
        </CommentContent>
      </Container>
      <SlideDown>
        {showReplies && comments && (
          <RepliesWrapper>
            {comments.map((reply) => (
              <SubCommentItem key={reply.commentId} comment={reply} onLikeComment={onLikeComment} />
            ))}
          </RepliesWrapper>
        )}
      </SlideDown>
    </CommentWrapper>
  );
};
