import { useMutation, useQueryClient } from '@tanstack/react-query';
import { groupAPI } from '@/pages/QSpace/api/groupAPI';
import { GROUP_KEYS } from '@/api/queryKeys';
import { useNavigate } from 'react-router';
import { useToast } from '@chakra-ui/react';

export const useJoinGroup = (groupId: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () => {
      const response = await groupAPI.joinGroup(groupId);
      return response;
    },
    onSuccess: () => {
      // 그룹 데이터 갱신을 위해 쿼리 무효화
      queryClient.invalidateQueries({ queryKey: [GROUP_KEYS.ROOT, groupId] });
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
      if (!content || content.trim() === '') {
        throw new Error('내용을 입력해주세요');
      }

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

export const useUpdateGroupStatus = (groupId: number) => {
  const queryClient = useQueryClient();
  const toast = useToast();

  return useMutation({
    mutationFn: () => groupAPI.updateGroupStatus(groupId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [GROUP_KEYS.ROOT, groupId] });
      queryClient.invalidateQueries({ queryKey: [GROUP_KEYS.ROOT] });
      toast({
        title: '모집 상태가 변경되었습니다',
        status: 'success',
        duration: 3000,
      });
    },
    onError: (error: Error) => {
      toast({
        title: '모집 상태 변경 실패',
        description: error instanceof Error ? error.message : '다시 시도해주세요',
        status: 'error',
        duration: 3000,
      });
    },
  });
};

export const useDeleteGroup = (groupId: number) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const toast = useToast();

  return useMutation({
    mutationFn: async () => {
      const response = await groupAPI.deleteGroup(groupId);
      if (!response.success) {
        throw new Error(response.error?.message || '토론방 삭제에 실패했습니다');
      }
      return response;
    },
    onSuccess: () => {
      // 목록 데이터 갱신
      queryClient.invalidateQueries({ queryKey: [GROUP_KEYS.ROOT] });

      // 성공 메시지 표시
      toast({
        title: '토론방이 삭제되었습니다',
        status: 'success',
        duration: 3000,
      });

      // 목록 페이지로 리다이렉트
      navigate('/groups');
    },
    onError: (error: Error) => {
      // 에러 메시지 표시
      toast({
        title: '토론방 삭제 실패',
        description: error.message,
        status: 'error',
        duration: 3000,
      });
    },
  });
};
