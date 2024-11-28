import styled from '@emotion/styled';
import { Button as ChakraButton, Tooltip } from '@chakra-ui/react';
import { FaTrashCan } from 'react-icons/fa6';

type DeleteButtonProps = {
  onClick?: () => void;
  width?: string | number;
  height?: string | number;
};

const StyledButton = styled(ChakraButton)<{ width?: string | number; height?: string | number }>`
  cursor: pointer;
  border: none;
  background: transparent;
  width: ${(props) => props.width || 'auto'};
  height: ${(props) => props.height || 'auto'};

  svg {
    width: 70%;
    height: 70%;
  }

  &:hover {
    svg {
      color: gray;
    }
  }
`;

export const DeleteButton = ({
  onClick,
  width = '2.5rem',
  height = '2.5rem',
}: DeleteButtonProps) => {
  return (
    <Tooltip label="삭제하기" placement="top" hasArrow>
      <StyledButton variant="ghost" size="md" onClick={onClick} width={width} height={height}>
        <FaTrashCan />
      </StyledButton>
    </Tooltip>
  );
};
