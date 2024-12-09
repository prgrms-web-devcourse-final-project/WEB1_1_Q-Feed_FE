import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useToast } from '@chakra-ui/react';
import { groupAPI } from '@/pages/QSpace/api/groupAPI';

export const useRemoveMember = (groupId: number) => {
  const queryClient = useQueryClient();
  const toast = useToast();

  return useMutation({
    mutationFn: (memberId: number) => groupAPI.removeMember(groupId, memberId),
    onSuccess: () => {
      // 멤버 목록 캐시 갱신
      queryClient.invalidateQueries({ queryKey: ['members', groupId] });
      toast({
        title: '멤버가 성공적으로 퇴장되었습니다.',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
    },
    onError: (error) => {
      toast({
        title: '멤버 퇴장에 실패했습니다.',
        description: error instanceof Error ? error.message : '알 수 없는 오류가 발생했습니다.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    },
  });
};
