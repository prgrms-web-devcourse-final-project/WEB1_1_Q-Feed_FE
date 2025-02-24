import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useToast } from '@chakra-ui/react';
import { GroupFormData, GroupDetail } from '../types/group';

export const useGroupForm = (
  { initialData, mode }: { initialData?: GroupDetail; mode: 'create' | 'edit' } = { mode: 'create' }
) => {
  const location = useLocation();
  const navigate = useNavigate();
  const toast = useToast();

  const categoryId =
    mode === 'edit'
      ? initialData?.categoryId
      : (location.state as { categoryId: number })?.categoryId;

  const [title, setTitle] = useState(initialData?.groupName || '');
  const [description, setDescription] = useState(initialData?.description || '');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [isPending, setIsPending] = useState(false);

  const formData: GroupFormData = {
    title,
    description,
    imageFile,
    categoryId: categoryId as number,
  };

  const formActions = {
    setTitle,
    setDescription,
    setImageFile,
  };

  const formState = {
    isPending,
    setIsPending,
  };

  return {
    formData,
    formActions,
    formState,
    toast,
    navigate,
  };
};
