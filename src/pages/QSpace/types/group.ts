import { useToast } from '@chakra-ui/react';
import { NavigateFunction } from 'react-router';

// Base Types
export interface BaseGroup {
  groupId: number;
  groupName: string;
  description: string;
  isOpen: boolean;
  createdAt: string;
  memberCount: number;
}

// API Response Types
export interface Group extends BaseGroup {
  url: string;
}

export interface GroupDetail extends BaseGroup {
  imageUrl: string;
  creator: {
    id: string;
    nickname: string;
    profileImage: string;
  };
  lastChatTime: string;
  tags: string[];
  isRecruiting: boolean;
}

export interface GroupMember {
  userId: string;
  nickname: string;
  profileImage: string;
  joinedAt: string;
}

export interface Comment {
  commentId: number;
  userId: string;
  nickname: string;
  profileImage: string;
  content: string;
  likeCount: number;
  isLiked: boolean;
  createdAt: string;
}

// API Request Types
export interface CreateGroupRequest {
  groupName: string;
  description: string;
  categoryId: number;
  url: string;
  isOpen: boolean;
}

export interface UpdateGroupRequest extends Partial<CreateGroupRequest> {
  groupId: number;
}

// Response Types
export interface UploadResponse {
  imageUrl: string;
}

// Form Types
export interface GroupFormData {
  groupName: string;
  description: string;
  imageFile: File | null;
  categoryId: number;
  isOpen: boolean;
}

export interface CreateGroupParams {
  formData: GroupFormData;
  setIsPending: (value: boolean) => void;
  toast: ReturnType<typeof useToast>;
  navigate: NavigateFunction;
}

export interface UseGroupFormReturn {
  formData: GroupFormData;
  formActions: {
    setGroupName: (value: string) => void;
    setDescription: (value: string) => void;
    setImageFile: (file: File | null) => void;
    setIsOpen: (value: boolean) => void;
    setCategoryId: (value: number) => void;
  };
  formState: {
    isPending: boolean;
    setIsPending: (value: boolean) => void;
  };
  toast: ReturnType<typeof useToast>;
  navigate: NavigateFunction;
}
