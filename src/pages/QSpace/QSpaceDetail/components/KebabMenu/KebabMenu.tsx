import {
  Container,
  IconButton,
  MenuItem,
  MenuPopup,
} from '@/pages/QSpace/QSpaceDetail/components/KebabMenu/KebabMenu.styles';
import { useState, useRef, useEffect } from 'react';
import { VscKebabVertical } from 'react-icons/vsc';
interface KebabMenuProps {
  onEditClick?: () => void;
  onDeleteClick?: () => void;
  onRecruitmentStatusChange?: (isRecruiting: boolean) => void;
  initialRecruitmentStatus?: boolean;
}

const KebabMenu = ({
  onEditClick,
  onDeleteClick,
  onRecruitmentStatusChange,
  initialRecruitmentStatus = true, // true: 모집 중, false: 모집 완료
}: KebabMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isRecruiting, setIsRecruiting] = useState(initialRecruitmentStatus);
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

  const handleRecruitmentStatusClick = () => {
    const newStatus = !isRecruiting;
    setIsRecruiting(newStatus);
    onRecruitmentStatusChange?.(newStatus);
    setIsOpen(false);
  };

  return (
    <Container ref={menuRef}>
      <IconButton onClick={handleToggle}>
        <VscKebabVertical size={24} />
      </IconButton>

      {isOpen && (
        <MenuPopup>
          <MenuItem onClick={handleRecruitmentStatusClick}>
            {isRecruiting ? '모집 완료로 변경' : '모집 중으로 변경'}
          </MenuItem>
          <MenuItem onClick={onEditClick}>글 수정하기</MenuItem>
          <MenuItem onClick={onDeleteClick}>글 삭제하기</MenuItem>
        </MenuPopup>
      )}
    </Container>
  );
};

export default KebabMenu;
