import { useToast } from '@chakra-ui/react';
import { NavigateFunction } from 'react-router';

export interface Group {
  groupId: number;
  url: string;
  groupName: string;
  description: string;
  isOpen: boolean;
  createdAt: string;
  membersCount: number;
}

export interface GroupDetail {
  groupId: number;
  categoryName: string;
  categoryId: number;
  url: string;
  groupName: string;
  description: string;
  adminId: string;
  createdAt: string;
  isOpen: boolean;
  members: {
    groupMemberId: number;
    userId: string;
    userNickname: string;
    userProfile: string;
  }[];
  posts: {
    groupPostId: number;
    nickname: string;
    profile: string;
    content: string;
    createAt: string;
    likeCount: number;
    groupCommentCount: number;
  }[];
}

export interface GroupMember {
  groupMemberId: number;
  userId: string;
  userNickname: string;
  userProfile: string;
  description: string;
}

export interface GroupPost {
  groupPostId: number;
  nickname: string;
  profile: string;
  content: string;
  createdAt: string;
  likeCount: number;
}

export interface GroupFormData {
  title: string;
  description: string;
  imageFile: File | null;
  categoryId: number;
}

export interface Reply {
  groupCommentId: number;
  profile: string;
  content: string;
  createdAt: string;
  userId: string;
  nickname: string;
  likeCount: number;
  groupPostId: number;
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
    setTitle: (value: string) => void;
    setDescription: (value: string) => void;
    setImageFile: (file: File | null) => void;
  };
  formState: {
    isPending: boolean;
    setIsPending: (value: boolean) => void;
  };
  toast: ReturnType<typeof useToast>;
  navigate: NavigateFunction;
}
