import { GROUP_KEYS } from '@/api/queryKeys';
import { groupAPI } from '@/pages/QSpace/api/groupAPI';
import { useToast } from '@chakra-ui/react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router';

export const usePostGroup = () => {
  const queryClient = useQueryClient();
  const toast = useToast();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: async (form: FormData) => {
      const response = await groupAPI.createGroup(form);
      return response;
    },
    onSuccess: () => {
      // 데이터 리페칭
      queryClient.invalidateQueries({ queryKey: [GROUP_KEYS.ROOT] });

      toast({
        title: '토론방이 생성되었습니다',
        status: 'success',
        duration: 3000,
      });
      navigate('/qspace');
    },
    onError: (error) => {
      toast({
        title: '토론방 생성에 실패했습니다',
        description: error instanceof Error ? error.message : '다시 시도해주세요',
        status: 'error',
        duration: 3000,
      });
    },
  });
};
