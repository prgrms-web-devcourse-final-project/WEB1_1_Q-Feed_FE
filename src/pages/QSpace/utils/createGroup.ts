import { groupAPI } from '@/pages/QSpace/api/groupAPI';
import { CreateGroupParams, CreateGroupRequest } from '@/pages/QSpace/types/group';
import { showErrorToast, showSuccessToast, uploadImage } from '@/pages/QSpace/utils/uploadImage';

export const createGroup = async ({
  formData,
  setIsPending,
  toast,
  navigate,
}: CreateGroupParams) => {
  const { title, description, imageFile, categoryId } = formData;

  if (!title || !description) {
    toast({
      title: '입력 확인',
      description: '방 제목과 설명을 입력해주세요.',
      status: 'warning',
      duration: 3000,
      isClosable: true,
    });
    return;
  }

  try {
    setIsPending(true);
    const createGroupData: Partial<CreateGroupRequest> = {
      groupName: title,
      description,
      categoryId,
      isOpen: true,
    };

    if (imageFile) {
      const imageUrl = await uploadImage(imageFile, toast);
      if (imageUrl) createGroupData.url = imageUrl;
    }

    await groupAPI.createGroup(createGroupData as CreateGroupRequest);
    showSuccessToast(toast);
    navigate('/qspace');
  } catch (error) {
    showErrorToast(toast, error);
  } finally {
    setIsPending(false);
  }
};
