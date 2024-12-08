import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { groupAPI } from '@/pages/QSpace/api/groupAPI';
import { GROUP_KEYS } from '@/api/queryKeys';

export const useJoinGroup = (groupId: number) => {
  return useMutation({
    mutationFn: async () => {
      const response = await groupAPI.joinGroup(groupId);
      return response;
    },
    onError: (error: Error) => {
      console.log(error);
    },
  });
};

export const useCreatePost = (groupId: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (content: string) => {
      const response = await groupAPI.createPost(groupId, content);
      if (!response.success) {
        throw new Error(response.error?.message || '게시글 작성에 실패했습니다');
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [GROUP_KEYS.ROOT, groupId] });
    },
    onError: (error: Error) => {
      console.log(error);
    },
  });
};

export const useLikePost = (groupId: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (postId: number) => {
      const response = await groupAPI.likePost(postId);
      if (!response.success) {
        throw new Error(response.error?.message || '게시글 좋아요에 실패했습니다');
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [GROUP_KEYS.ROOT, groupId] });
    },
    onError: (error: Error) => {
      console.log(error);
    },
  });
};

export const useDeleteGroup = (groupId: number) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: async () => {
      const response = await groupAPI.deleteGroup(groupId);
      if (!response.success) {
        throw new Error(response.error?.message || '토론방 삭제에 실패했습니다');
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [GROUP_KEYS.ROOT] });
      navigate('/groups');
    },
    onError: (error: Error) => {
      console.log(error);
    },
  });
};
