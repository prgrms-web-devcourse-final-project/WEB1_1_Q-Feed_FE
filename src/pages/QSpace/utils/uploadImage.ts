// import { uploadAPI } from '@/pages/QSpace/api/imageUpload';
import { useToast } from '@chakra-ui/react';

export const uploadImage = async (
  imageFile: File,
  toast: ReturnType<typeof useToast>
): Promise<string | null> => {
  try {
    console.log('image', imageFile);

    // const { data: uploadResponse } = await uploadAPI.uploadImage(imageFile);
    // if (!uploadResponse?.imageUrl) {
    //   throw new Error('이미지 업로드에 실패했습니다.');
    // }
    // return uploadResponse.imageUrl;
    return null;
  } catch (error) {
    console.error('Failed to upload image:', error);
    toast({
      title: '이미지 업로드 실패',
      description: '이미지 업로드에 실패했습니다. 다시 시도해주세요.',
      status: 'error',
      duration: 3000,
      isClosable: true,
    });
    return null;
  }
};

export const showSuccessToast = (toast: ReturnType<typeof useToast>) => {
  toast({
    title: '그룹 생성 완료',
    description: '새로운 그룹이 생성되었습니다.',
    status: 'success',
    duration: 3000,
    isClosable: true,
  });
};

export const showErrorToast = (toast: ReturnType<typeof useToast>, error: unknown) => {
  toast({
    title: '그룹 생성 실패',
    description:
      error instanceof Error ? error.message : '그룹 생성에 실패했습니다. 다시 시도해주세요.',
    status: 'error',
    duration: 3000,
    isClosable: true,
  });
};
