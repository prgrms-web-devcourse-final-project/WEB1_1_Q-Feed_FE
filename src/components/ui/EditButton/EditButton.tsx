import styled from '@emotion/styled';
import { Button as ChakraButton, Tooltip } from '@chakra-ui/react';
import { MdEdit } from 'react-icons/md';

type EditButtonProps = {
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

export const EditButton = ({ onClick, width = '2.5rem', height = '2.5rem' }: EditButtonProps) => {
  return (
    <Tooltip label="수정하기" placement="top" hasArrow>
      <StyledButton variant="ghost" size="md" onClick={onClick} width={width} height={height}>
        <MdEdit />
      </StyledButton>
    </Tooltip>
  );
};
