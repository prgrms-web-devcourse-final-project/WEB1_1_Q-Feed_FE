import { AUTH_KEYS } from '@/api/queryKeys';
import { resetAPI } from '@/pages/ResetPassword/api/auth';
import { ResetRequest, ResetResponse } from '@/pages/ResetPassword/type/reset';
import { useMutation } from '@tanstack/react-query';

export const useResetPassword = () => {
  return useMutation<ResetResponse, Error, ResetRequest>({
    mutationKey: [AUTH_KEYS.ROOT, AUTH_KEYS.ACTIONS.RESETPASSWORD],
    mutationFn: async (resetData: ResetRequest): Promise<ResetResponse> => {
      const apiResponse = await resetAPI.resetpassword(resetData);
      if (apiResponse.success) {
        return {
          message: apiResponse.data?.message || '비밀번호 재설정 성공',
        };
      } else {
        throw new Error('비밀번호 재설정 실패');
      }
    },
    onSuccess: (data: ResetResponse) => {
      console.log('비밀번호 재설정 성공:', data.message);
    },
    onError: (error: Error) => {
      console.error('비밀번호 재설정 오류:', error);
    },
  });
};
