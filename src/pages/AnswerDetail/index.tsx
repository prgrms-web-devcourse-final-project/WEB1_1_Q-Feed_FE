import styled from '@emotion/styled';
import theme from '@/styles/theme';
import BackButton from '@/components/ui/BackButton/BackButton';
import { QuestionCard } from '@/pages/Main/components/QuestionCard/QuestionCard';
import { CommentItem } from '@/pages/AnswerDetail/components/CommentItem/CommentItem';
import { CommentList } from '@/components/ui/CommentList/CommentList';
import { dummyComments } from '@/pages/Main/type/dummyComments';
import { MessageBox } from '@/pages/AnswerDetail/components/MessageBox/MessageBox';
import { useState } from 'react';

const dummyComment = {
  id: '2',
  author: { name: '세계일주', profileImage: 'https://i.pravatar.cc/150?img=2' },
  content: '크리스마스 마켓 좋죠! 뉘른베르크 크리스마스 마켓도 추천합니다~',
  createdAt: '2024-11-28T09:30:00',
  likes: 8,
  isLiked: true,
  replyCount: 1,
};

const dummyTest = {
  commentCount: 7,
};

export const PostDetailPage = () => {
  const [comments, setComments] = useState(dummyComments);
  const handleLikeComment = (commentId: string, isLiked: boolean, count: number) => {
    console.log(commentId, isLiked, count);
    // 여기에 좋아요 처리 로직 추가
  };

  const handleReplyClick = (commentId: string) => {
    console.log(commentId);
    // 여기에 답글 클릭 처리 로직 추가
  };

  const handleMessage = (message: string) => {
    const newComment = {
      id: String(Date.now()), // 유니크한 ID 생성
      author: {
        name: '사용자', // 현재 로그인한 사용자 정보로 대체 가능
        profileImage: 'https://i.pravatar.cc/150?img=1',
      },
      content: message,
      createdAt: new Date().toISOString(),
      likes: 0,
      isLiked: false,
      replyCount: 0,
    };

    setComments((prevComments) => [newComment, ...prevComments]);
  };

  return (
    <Container>
      <Header>
        <BackButton />
        <Title>맛집</Title>
      </Header>
      <Body>
        <QuestionCard
          date="2024.11.28"
          question="오늘 당장 해외여행을 떠날수 있다면 어디로 갈건가요?"
        />
        <PostWrapper>
          <CommentItem
            comment={dummyComment}
            onLikeComment={handleLikeComment}
            onReplyClick={handleReplyClick}
          />
        </PostWrapper>
        <CommentHeader>
          <TextComment>댓글</TextComment>
          <TextCommentCount>({dummyTest.commentCount})</TextCommentCount>
        </CommentHeader>
        <CommentListWrapper>
          <CommentList
            comments={comments}
            onLikeComment={handleLikeComment}
            onReplyClick={handleReplyClick}
          />
        </CommentListWrapper>
        <MessageBoxWrapper>
          <MessageBox onSendMessage={handleMessage} />
        </MessageBoxWrapper>
      </Body>
    </Container>
  );
};
export default PostDetailPage;

const Container = styled.div`
  padding-bottom: calc(5.25rem + 84px); // footer-height + MessageBox height
  min-height: 100vh;
  position: relative;
`;
const Header = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
  background-color: ${theme.colors.white};
`;

const Title = styled.h1`
  font-family: ${theme.typography.header2.fontFamily.korean};
  font-size: ${theme.typography.header2.size};
  font-weight: ${theme.typography.header2.weight};
  line-height: ${theme.typography.header2.lineHeight};
  color: ${theme.colors.black};
  text-align: center;
  justify-items: center;
  align-items: center;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const PostWrapper = styled.div`
  margin-top: 40px;
`;

const Body = styled.div`
  width: 100%;
  background-color: ${theme.colors.background};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
`;

const CommentHeader = styled.div`
  display: flex;
  width: 100%;
  padding: 0.9375rem 1.5625rem;
  border-bottom: 1px solid ${theme.colors.gray[300]};
  background-color: ${theme.colors.white};
`;

const TextComment = styled.p`
  font-family: ${theme.typography.fontFamily.korean};
  font-weight: ${theme.typography.weights.regular};
  font-size: 0.875rem;
  color: ${theme.colors.gray[600]};
`;

const TextCommentCount = styled.p`
  font-family: ${theme.typography.fontFamily.english.header};
  font-weight: ${theme.typography.weights.regular};
  font-size: 0.875rem;
  color: ${theme.colors.gray[600]};
`;

const CommentListWrapper = styled.div`
  width: 100%;
  padding: 1.25rem;
  background-color: ${theme.colors.white};
`;

const MessageBoxWrapper = styled.div`
  position: fixed;
  bottom: 5.25rem;
  left: 0;
  right: 0;
  width: 100%;
  max-width: 430px;
  margin: 0 auto;
  background-color: ${theme.colors.white};
  padding: 10px 0;
  border-top: 1px solid ${theme.colors.gray[300]};
`;
