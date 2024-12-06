import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useToast } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { groupAPI } from '@/pages/QSpace/api/groupAPI';
import { GROUP_KEYS } from '@/api/queryKeys';

export const useJoinGroup = (groupId: number) => {
  const queryClient = useQueryClient();
  const toast = useToast();

  return useMutation({
    mutationFn: async () => {
      const response = await groupAPI.joinGroup(groupId);
      if (!response.success) {
        throw new Error(response.error?.message || '그룹 참여에 실패했습니다');
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [GROUP_KEYS.ROOT, groupId] });
      toast({
        title: '토론방에 참여했습니다',
        status: 'success',
      });
    },
    onError: (error: Error) => {
      toast({
        title: error.message,
        status: 'error',
      });
    },
  });
};

export const useCreatePost = (groupId: number) => {
  const queryClient = useQueryClient();
  const toast = useToast();

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
      toast({
        title: error.message,
        status: 'error',
      });
    },
  });
};

export const useLikePost = (groupId: number) => {
  const queryClient = useQueryClient();
  const toast = useToast();

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
      toast({
        title: error.message,
        status: 'error',
      });
    },
  });
};

export const useDeleteGroup = (groupId: number) => {
  const queryClient = useQueryClient();
  const toast = useToast();
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
      toast({
        title: '토론방이 삭제되었습니다',
        status: 'success',
      });
      navigate('/groups');
    },
    onError: (error: Error) => {
      toast({
        title: error.message,
        status: 'error',
      });
    },
  });
};
