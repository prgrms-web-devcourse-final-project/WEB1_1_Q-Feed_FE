import { useState, useRef, useEffect } from 'react';
import styled from '@emotion/styled';
import { VscKebabVertical } from 'react-icons/vsc';
import theme from '@/styles/theme';

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

const Container = styled.div`
  position: relative;
  display: inline-block;
`;

const IconButton = styled.button`
  background: none;
  border: none;
  padding: 0.5rem;
  cursor: pointer;
  color: ${theme.colors.gray[400]};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: ${theme.colors.gray[600]};
  }
`;

const MenuPopup = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  min-width: 160px;
  background-color: ${theme.colors.white};
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  z-index: 1000;
`;

const MenuItem = styled.button`
  width: 100%;
  padding: 0.75rem 1rem;
  border: none;
  background: none;
  text-align: left;
  font-family: ${theme.typography.fontFamily.korean};
  font-size: ${theme.typography.body2.size};
  color: ${theme.colors.gray[600]};
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: ${theme.colors.sub};
  }

  &:not(:last-child) {
    border-bottom: 1px solid ${theme.colors.gray[100]};
  }
`;

export default KebabMenu;
