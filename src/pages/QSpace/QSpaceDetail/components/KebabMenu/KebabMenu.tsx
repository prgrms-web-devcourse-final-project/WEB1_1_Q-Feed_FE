import { VscKebabVertical } from 'react-icons/vsc';

import { Group } from '@/pages/QSpace/types/group';
import { useKebabMenu } from '@/pages/QSpace/hooks/useKebabMenu';

import {
  Container,
  IconButton,
  MenuItem,
  MenuPopup,
} from '@/pages/QSpace/QSpaceDetail/components/KebabMenu/KebabMenu.styles';

interface KebabMenuProps {
  group: Group;
  onEditClick?: () => void;
  onDeleteSuccess?: () => void;
  onStatusChange?: (isOpen: boolean) => void;
}

const KebabMenu = ({ group, onEditClick, onDeleteSuccess, onStatusChange }: KebabMenuProps) => {
  const { isOpen, setIsOpen, isPending, menuRef, handleToggle, handleStatusChange, handleDelete } =
    useKebabMenu({
      group,

      onDeleteSuccess,
      onStatusChange,
    });

  return (
    <Container ref={menuRef}>
      <IconButton onClick={handleToggle} disabled={isPending}>
        <VscKebabVertical size={24} />
      </IconButton>

      {isOpen && (
        <MenuPopup>
          <MenuItem onClick={handleStatusChange} disabled={isPending}>
            {group.isOpen ? '모집 완료로 변경' : '모집 중으로 변경'}
          </MenuItem>
          <MenuItem
            onClick={() => {
              onEditClick?.();
              setIsOpen(false);
            }}
            disabled={isPending}
          >
            글 수정하기
          </MenuItem>
          <MenuItem onClick={handleDelete} disabled={isPending}>
            글 삭제하기
          </MenuItem>
        </MenuPopup>
      )}
    </Container>
  );
};

export default KebabMenu;
