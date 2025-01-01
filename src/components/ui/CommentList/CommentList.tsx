import {
  ActionButtons,
  AuthorInfo,
  AuthorName,
  CommentContent,
  CommentItem,
  Container,
  Content,
  CreatedAt,
  ReplyInputContainer,
  ReplyItem,
  ReplySection,
  StyledAvatar,
} from '@/components/ui/CommentList/CommentList.styles';
import LikeButtonContainer from '@/components/ui/LikeButtonContainer/LikeButtonContainer';
import ReplyContainer from '@/components/ui/ReplyContainer/ReplyContainer';
import ChatInputBar from '@/pages/ChatRoom/component/InputBar';
import { useCreateComment } from '@/pages/QSpace/hooks/Mutation/useCreateComment';
import { useComments } from '@/pages/QSpace/hooks/Query/useComments';
import { GroupDetail } from '@/pages/QSpace/types/group';
import { formatLastUpdated } from '@/utils/formatLastUpdated';
import { useState } from 'react';

type CommentType = GroupDetail['posts'][0];

interface Comment extends CommentType {}

interface CommentListProps {
  comments: Comment[];
  onLikeComment?: (commentId: number) => void;
  onReplyClick?: (commentId: number) => void;
}

export const CommentList = ({ comments, onLikeComment, onReplyClick }: CommentListProps) => {
  const [expandedCommentId, setExpandedCommentId] = useState<number | null>(null);
  const { data: groupComments = [] } = useComments(expandedCommentId || -1);
  const createGroupComment = useCreateComment(expandedCommentId || -1);

  const handleReplyClick = (commentId: number) => {
    setExpandedCommentId(expandedCommentId === commentId ? null : commentId);
    onReplyClick?.(commentId);
  };

  const handleSubmitReply = (content: string) => {
    if (expandedCommentId) {
      createGroupComment.mutate(content);
    }
  };

  return (
    <Container>
      {comments.map((comment) => (
        <div key={comment.groupPostId}>
          <CommentItem>
            <StyledAvatar src={comment.profile} name={comment.nickname} size="sm" />
            <CommentContent>
              <AuthorInfo>
                <AuthorName>{comment.nickname}</AuthorName>
                <CreatedAt>{formatLastUpdated(comment.createAt)}</CreatedAt>
              </AuthorInfo>
              <Content>{comment.content}</Content>
              <ActionButtons>
                <LikeButtonContainer
                  size="small"
                  initialCount={comment.likeCount}
                  onLikeChange={() => onLikeComment?.(comment.groupPostId)}
                />
                <ReplyContainer
                  groupCommentCount={comment.groupCommentCount}
                  onReplyClick={() => handleReplyClick(comment.groupPostId)}
                />
              </ActionButtons>
            </CommentContent>
          </CommentItem>
          {expandedCommentId === comment.groupPostId && (
            <ReplySection>
              {groupComments?.map((reply) => (
                <ReplyItem key={reply.groupCommentId}>
                  <StyledAvatar src={reply.profile} name={reply.nickname} size="sm" />
                  <CommentContent>
                    <AuthorInfo>
                      <AuthorName>{reply.nickname}</AuthorName>
                      <CreatedAt>{formatLastUpdated(reply.createdAt)}</CreatedAt>
                    </AuthorInfo>
                    <Content>{reply.content}</Content>
                    <ActionButtons>
                      <LikeButtonContainer
                        size="small"
                        initialCount={reply.likeCount}
                        onLikeChange={() => onLikeComment?.(reply.groupCommentId)}
                      />
                    </ActionButtons>
                  </CommentContent>
                </ReplyItem>
              ))}
              <ReplyInputContainer>
                <ChatInputBar placeholder="답글을 입력하세요" onSend={handleSubmitReply} />
              </ReplyInputContainer>
            </ReplySection>
          )}
        </div>
      ))}
    </Container>
  );
};

export default CommentList;
