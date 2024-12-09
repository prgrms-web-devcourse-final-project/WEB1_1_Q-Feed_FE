import { VscKebabVertical } from 'react-icons/vsc';
import { useRef, useState, useEffect } from 'react';

import { Container, IconButton, MenuItem, MenuPopup } from './KebabMenu.styles';

interface KebabMenuProps {
  onEditClick: () => void;
  onDeleteClick: () => void;
}

const KebabMenu = ({ onEditClick, onDeleteClick }: KebabMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

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

  const handleEdit = () => {
    onEditClick();
    setIsOpen(false);
  };

  const handleDelete = () => {
    onDeleteClick();
    setIsOpen(false);
  };

  return (
    <Container ref={menuRef}>
      <IconButton onClick={handleToggle}>
        <VscKebabVertical size={24} />
      </IconButton>

      {isOpen && (
        <MenuPopup>
          <MenuItem onClick={handleEdit}>글 수정하기</MenuItem>
          <MenuItem onClick={handleDelete}>글 삭제하기</MenuItem>
        </MenuPopup>
      )}
    </Container>
  );
};

export default KebabMenu;
