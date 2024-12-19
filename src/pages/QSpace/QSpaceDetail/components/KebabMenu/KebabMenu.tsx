import { VscKebabVertical } from 'react-icons/vsc';
import { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useUpdateGroupStatus } from '@/pages/QSpace/hooks/Mutation/useGroupMutations';
import { Container, IconButton, MenuItem, MenuPopup } from './KebabMenu.styles';

interface KebabMenuProps {
  onEditClick: () => void;
  onDeleteClick: () => void;
  groupId: number;
  isOpen?: boolean; // 모집 상태
}

const KebabMenu = ({ onEditClick, onDeleteClick, groupId, isOpen = true }: KebabMenuProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const updateStatus = useUpdateGroupStatus(groupId);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleEdit = () => {
    onEditClick();
    setIsMenuOpen(false);
    navigate(`/qspace/${groupId}/edit`);
  };

  const handleDelete = () => {
    onDeleteClick();
    setIsMenuOpen(false);
  };

  const handleStateChange = () => {
    updateStatus.mutate();
    setIsMenuOpen(false);
  };

  return (
    <Container ref={menuRef}>
      <IconButton onClick={handleToggle}>
        <VscKebabVertical size={24} />
      </IconButton>

      {isMenuOpen && (
        <MenuPopup>
          <MenuItem onClick={handleEdit}>글 수정하기</MenuItem>
          <MenuItem onClick={handleStateChange}>
            {isOpen ? '모집 완료로 변경' : '모집중으로 변경'}
          </MenuItem>
          <MenuItem onClick={handleDelete}>글 삭제하기</MenuItem>
        </MenuPopup>
      )}
    </Container>
  );
};

export default KebabMenu;
