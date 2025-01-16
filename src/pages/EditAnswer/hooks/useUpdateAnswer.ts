import { useState } from 'react';
import { FeedAPI, RequestAnswer, ResponseAnswer } from '@/pages/EditAnswer/api/answer';

export const useUpdateAnswer = () => {
  const [data, setData] = useState<ResponseAnswer | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(false);

  const updateAnswer = async (answerId: string, answerData: RequestAnswer) => {
    setLoading(true);
    try {
      const response = await FeedAPI.updateAnswer(answerId, answerData);
      setData(response); // 성공 시 데이터 저장
    } catch (err) {
      setError(err as Error); // 오류 처리
    } finally {
      setLoading(false);
    }
  };

  return {
    data,
    error,
    loading,
    updateAnswer,
  };
};
