import { postAPI } from '@/pages/AnswerDetail/api/fetchPost';
import { useState, useCallback } from 'react';

interface UseCommentLikeProps {
  commentId: number;
}

export const useCommentLike = ({ commentId }: UseCommentLikeProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const toggleLike = useCallback(async () => {
    if (loading) return; // 이미 요청 중인 경우 중복 요청 방지
    setLoading(true);
    setError(null);

    try {
      if (isLiked) {
        // 좋아요 해제
        await postAPI.cancleCommentLike(commentId);
      } else {
        // 좋아요 추가
        await postAPI.setCommentLike(commentId);
      }
      setIsLiked((prevState) => !prevState);
    } catch (err) {
      setError('댓글 좋아요 처리에 실패했습니다.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [commentId, isLiked, loading]);

  return {
    isLiked,
    loading,
    error,
    toggleLike,
  };
};
