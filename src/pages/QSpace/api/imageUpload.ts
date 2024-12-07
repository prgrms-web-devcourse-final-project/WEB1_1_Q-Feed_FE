import { apiClient } from '@/api/fetch';
import { UploadResponse } from '@/pages/QSpace/types/group';

export const uploadAPI = {
  uploadImage: (file: File) => {
    const formData = new FormData();
    formData.append('file', file);

    return apiClient.post<UploadResponse>('/upload/image', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },
};
