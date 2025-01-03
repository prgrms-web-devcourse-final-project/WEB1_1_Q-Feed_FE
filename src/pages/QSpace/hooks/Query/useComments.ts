// useComments.ts
import { GROUP_KEYS } from '@/api/queryKeys';
import { groupAPI } from '@/pages/QSpace/api/groupAPI';
import { Reply } from '@/pages/QSpace/types/group';
import { useQueries, useQuery } from '@tanstack/react-query';

// 단일 댓글의 답글을 가져오는 Hook
export const useSingleComments = (postId: number) => {
  return useQuery<Reply[], Error>({
    queryKey: [GROUP_KEYS.ROOT, GROUP_KEYS.ACTIONS.COMMENTS, postId],
    queryFn: async () => {
      const response = await groupAPI.getComments(postId);
      if (!response.success || !response.data) {
        throw new Error(response.error?.message || 'Failed to fetch comments');
      }
      return response.data;
    },
    enabled: postId > 0,
  });
};

// 여러 댓글의 답글을 가져오는 함수
export const useCommentsQueries = (postIds: number[]) => {
  return useQueries({
    queries: postIds.map((id) => ({
      queryKey: [GROUP_KEYS.ROOT, GROUP_KEYS.ACTIONS.COMMENTS, id],
      queryFn: async () => {
        const response = await groupAPI.getComments(id);
        if (!response.success || !response.data) {
          throw new Error(response.error?.message || 'Failed to fetch comments');
        }
        return response.data;
      },
      enabled: id > 0,
    })),
  });
};
