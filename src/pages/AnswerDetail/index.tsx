import BackButton from '@/components/ui/BackButton/BackButton';
import { QuestionCard } from '@/pages/Main/components/QuestionCard/QuestionCard';
import { CommentItem } from '@/pages/AnswerDetail/components/CommentItem/CommentItem';
import { MessageBox } from '@/pages/AnswerDetail/components/MessageBox/MessageBox';
import { CommentItemList } from '@/pages/AnswerDetail/components/CommentItemList/CommentItemList';
import { useParams } from 'react-router-dom';
import {
  Body,
  CommentHeader,
  CommentListWrapper,
  Container,
  Header,
  MessageBoxWrapper,
  PostWrapper,
  TextComment,
  TextCommentCount,
  Title,
} from '@/pages/AnswerDetail/styles';
import { usePostDetail } from '@/pages/AnswerDetail/hooks/usePostDetail';
import { useFetchQuestion } from '@/pages/AnswerDetail/hooks/useFetchQuestion';
import { HobbyTag } from '@/constants/hobbytag';
import { formatLastUpdated } from '@/utils/formatLastUpdated';
import { useUserStore } from '@/store/userStore';
import { QFeedLoadingSpinner } from '@/components/ui/QFeedLoadingSpinner/QFeedLoadingSpinner';
import { useUserProfile } from '@/pages/MyPage/hooks/useUserProfile';
import { useAddComments } from '@/pages/AnswerDetail/hooks/useAddComments';
// import { useCancleCommentLike } from '@/pages/AnswerDetail/hooks/useCancleCommentLike';
// import { useCommentLike } from '@/pages/AnswerDetail/hooks/useCommentLike';

export const PostDetailPage = () => {
  const { postId, categoryId } = useParams();
  const parsedPostId = Number(postId);
  const parsedCategoryId = Number(categoryId);
  const {
    data: postDetail,
    isLoading,
    isError,
    refetch: refetchPostDetail,
  } = usePostDetail(parsedPostId);

  const { data: todayQuestion } = useFetchQuestion(parsedCategoryId);
  const { userId } = useUserStore();
  const { data: profile, isLoading: profileLoading } = useUserProfile(userId || '');

  const { mutate: addCommentMutate } = useAddComments();
  // const { mutate: likeCommentMutate } = useCommentLike();
  // const { mutate: cancelLikeCommentMutate } = useCancleCommentLike();

  console.log(profile);

  if (!postId || isNaN(parsedPostId)) {
    return <div>유효하지 않은 게시물입니다</div>;
  }

  if (isLoading) <QFeedLoadingSpinner />;
  if (isError) alert('Error');

  // const handleMutationSuccess = (message: string) => {
  //   console.log(message);
  //   refetchPostDetail(); // 데이터 갱신
  // };

  // const handleMutationError = (error: unknown) => {
  //   console.error('오류 발생:', error);
  // };

  // const handleLikeComment = (commentId: number, isLiked: boolean, count: number) => {
  //   console.log(count);

  //   if (!isLiked) {
  //     likeCommentMutate(commentId, {
  //       onSuccess: () => {
  //         console.log('댓글 좋아요 성공');
  //         handleMutationSuccess('댓글 좋아요 성공');
  //       },
  //       onError: handleMutationError,
  //     });
  //   } else {
  //     cancelLikeCommentMutate(commentId, {
  //       onSuccess: () => handleMutationSuccess('댓글 좋아요 취소 성공'),
  //       onError: handleMutationError,
  //     });
  //   }
  // };

  const handleLikeReplyComment = (commentId: string, isLiked: boolean, count: number) => {
    console.log(commentId, isLiked, count);
  };

  const handleReplyClick = (commentId: string) => {
    console.log(commentId);
    // 답글 클릭 처리
  };

  const handleMessage = (message: string) => {
    addCommentMutate(
      {
        answerId: parsedPostId,
        parentCommentId: undefined,
        content: message,
      },
      {
        onSuccess: () => {
          console.log('댓글이 성공적으로 추가되었습니다');
          refetchPostDetail();
        },
        onError: (error) => {
          console.error('댓글 추가 중 오류 발생:', error);
        },
      }
    );
  };

  return (
    <Container>
      {profileLoading ? (
        <QFeedLoadingSpinner />
      ) : (
        <>
          <Header>
            <BackButton />
            <Title>{HobbyTag[parsedCategoryId - 1]}</Title>
          </Header>
          <Body>
            <QuestionCard
              date={formatLastUpdated(todayQuestion?.createdAt || '2024-12-12')}
              question={todayQuestion?.content || '오늘의 질문은 무엇이야??'}
            />
            <PostWrapper>
              {postDetail && (
                <CommentItem
                  commentId={postDetail.answerId}
                  profileImage={postDetail.profileImage}
                  userId={postDetail.userId}
                  nickName={postDetail.authorNickname}
                  content={postDetail.content}
                  createdAt={postDetail.createdAt}
                  likeCount={postDetail.likeCount}
                  isLike={postDetail.isLike}
                  replyCount={postDetail.commentCount}
                  comments={postDetail.comments}
                  onLikeComment={handleLikeReplyComment}
                  onClick={handleReplyClick}
                  onReplyClick={handleReplyClick}
                />
              )}
            </PostWrapper>
            <CommentHeader>
              <TextComment>댓글</TextComment>
              <TextCommentCount>({postDetail?.commentCount})</TextCommentCount>
            </CommentHeader>
            <CommentListWrapper>
              {postDetail?.comments && (
                <CommentItemList
                  comments={postDetail?.comments}
                  onLikeComment={handleLikeReplyComment}
                  onReplyClick={handleReplyClick}
                />
              )}
            </CommentListWrapper>
            <MessageBoxWrapper>
              <MessageBox onSendMessage={handleMessage} />
            </MessageBoxWrapper>
          </Body>
        </>
      )}
    </Container>
  );
};
export default PostDetailPage;
