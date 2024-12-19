import { useQuery } from '@tanstack/react-query';
import { POST_KEYS } from '@/api/queryKeys';
import { postAPI } from '@/pages/AnswerDetail/api/fetchPost';
import { PostDetail } from '@/pages/AnswerDetail/type/postType';

export const usePostDetail = (postId: number) => {
  return useQuery<PostDetail>({
    queryKey: [POST_KEYS.ACTIONS.DETAIL, postId],
    queryFn: async () => {
      const response = await postAPI.getPostDetail(postId);
      if (!response.success || !response.data) {
        throw new Error(response.error?.message || '답변을 불러오는데 실패했습니다');
      }
      return response.data;
    },
  });
};
