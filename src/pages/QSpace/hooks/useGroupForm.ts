import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useToast } from '@chakra-ui/react';
import { UseGroupFormReturn, GroupFormData } from '../types/group';

export const useGroupForm = (): UseGroupFormReturn => {
  const location = useLocation();
  const navigate = useNavigate();
  const toast = useToast();
  const { categoryId } = location.state as { categoryId: number };

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [isPending, setIsPending] = useState(false);

  const formData: GroupFormData = {
    title,
    description,
    imageFile,
    categoryId,
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
