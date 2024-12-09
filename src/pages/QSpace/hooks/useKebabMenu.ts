import { useState, useRef, useEffect } from 'react';
import { useToast } from '@chakra-ui/react';
import { Group } from '@/pages/QSpace/types/group';
import { groupAPI } from '@/pages/QSpace/api/groupAPI';

interface UseKebabMenuProps {
  group: Group;
  onEditClick?: () => void;
  onDeleteSuccess?: () => void;
  onStatusChange?: (isOpen: boolean) => void;
}

interface UseKebabMenuReturn {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  isPending: boolean;
  menuRef: React.RefObject<HTMLDivElement>;
  handleToggle: () => void;
  handleStatusChange: () => Promise<void>;
  handleDelete: () => Promise<void>;
}

export const useKebabMenu = ({
  group,

  onDeleteSuccess,
  onStatusChange,
}: UseKebabMenuProps): UseKebabMenuReturn => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const toast = useToast();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleStatusChange = async () => {
    try {
      setIsPending(true);
      await groupAPI.updateGroup({
        groupId: group.groupId,
        isOpen: !group.isOpen,
      });

      onStatusChange?.(!group.isOpen);
      toast({
        title: `모집 상태가 ${!group.isOpen ? '모집중' : '모집완료'}으로 변경되었습니다.`,
        status: 'success',
      });
      setIsOpen(false);
    } catch (error) {
      toast({
        title: '모집 상태 변경에 실패했습니다.',
        status: 'error',
      });
      console.error('Failed to update group status:', error);
    } finally {
      setIsPending(false);
    }
  };

  const handleDelete = async () => {
    if (!window.confirm('정말로 이 그룹을 삭제하시겠습니까?')) {
      return;
    }

    try {
      setIsPending(true);
      await groupAPI.deleteGroup(group.groupId);

      onDeleteSuccess?.();
      toast({
        title: '그룹이 삭제되었습니다.',
        status: 'success',
      });
      setIsOpen(false);
    } catch (error) {
      toast({
        title: '그룹 삭제에 실패했습니다.',
        status: 'error',
      });
      console.error('Failed to delete group:', error);
    } finally {
      setIsPending(false);
    }
  };

  return {
    isOpen,
    setIsOpen,
    isPending,
    menuRef,
    handleToggle,
    handleStatusChange,
    handleDelete,
  };
};
