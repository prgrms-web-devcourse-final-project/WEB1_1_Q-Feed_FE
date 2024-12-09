import { GROUP_KEYS } from '@/api/queryKeys';
import { groupAPI } from '@/pages/QSpace/api/groupAPI';
import { useToast } from '@chakra-ui/react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router';

export const useUpdateGroup = (groupId: number) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const toast = useToast();

  return useMutation({
    mutationFn: async (form: FormData) => {
      const response = await groupAPI.updateGroup(groupId, form);
      if (!response.success) {
        throw new Error(response.error?.message || '토론방 수정에 실패했습니다');
      }
      return response.data;
    },
    onSuccess: () => {
      // 그룹 상세 데이터 갱신
      queryClient.invalidateQueries({ queryKey: [GROUP_KEYS.ROOT, groupId] });

      toast({
        title: '토론방이 수정되었습니다',
        status: 'success',
        duration: 3000,
      });

      // 상세 페이지로 이동
      navigate(`/groups/${groupId}/detail`);
    },
    onError: (error) => {
      toast({
        title: '토론방 수정 실패',
        description: error instanceof Error ? error.message : '다시 시도해주세요',
        status: 'error',
        duration: 3000,
      });
    },
  });
};
