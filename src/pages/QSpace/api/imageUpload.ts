import { apiClient } from '@/api/fetch';
import { ActionResponse } from '@/types/response';

export const uploadAPI = {
  uploadImage: (file: File) => {
    const formData = new FormData();
    formData.append('file', file);

    return apiClient.post<ActionResponse>('/upload/image', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },
};
