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
import { useNavigation } from '@/hooks/useNavigation';

type CommentItemProps = {
  commentId: number;
  profileImage: string;
  userId: string;
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
  onClickProfile?: (userId: string) => void;
  depth?: number;
  isCommentButtonExist?: boolean;
  isCommentShow?: boolean;
};

export const CommentItem = ({
  commentId,
  profileImage,
  userId,
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
  isCommentShow = false,
}: CommentItemProps) => {
  const [showReplies, setShowReplies] = useState(false);
  const { gotoProfilePage } = useNavigation();

  const clickProfile = () => {
    gotoProfilePage(userId);
  };

  return (
    <CommentWrapper hideBorder={true}>
      <Container depth={depth} isCommentButtonExist={isCommentButtonExist}>
        <StyledAvatar
          src={profileImage}
          crossOrigin="anonymous"
          name={nickName}
          size="sm"
          onClick={clickProfile}
        />
        <CommentContent>
          <AuthorInfo>
            <AuthorName>{nickName}</AuthorName>
            <CreatedAt>{formatLastUpdated(createdAt)}</CreatedAt>
          </AuthorInfo>
          <Content
            onClick={() => {
              onClick?.(String(commentId));

              if (isCommentShow) {
                setShowReplies(!showReplies);
              }
            }}
          >
            {content}
          </Content>
          <ActionButtons>
            <LikeButtonContainer
              size="small"
              initialCount={likeCount}
              initialLiked={isLike}
              onLikeChange={(isLiked, count) => onLikeComment?.(String(commentId), isLiked, count)}
            />
            <ReplyContainer
              groupCommentCount={replyCount}
              onReplyClick={() => {
                onReplyClick?.(String(commentId));
                if (isCommentShow) {
                  setShowReplies(!showReplies);
                }
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
              <SubCommentItem key={reply.answerId} comment={reply} />
            ))}
          </RepliesWrapper>
        )}
      </SlideDown>
    </CommentWrapper>
  );
};
