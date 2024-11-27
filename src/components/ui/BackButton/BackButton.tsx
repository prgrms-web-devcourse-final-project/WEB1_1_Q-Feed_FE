import styled from '@emotion/styled';
import { Button as ChakraButton } from '@chakra-ui/react';
import { IoMdArrowRoundBack } from 'react-icons/io';

type BackButtonProps = {
  onClick?: () => void;
  width?: string | number;
  height?: string | number;
};

export const BackButton = ({ onClick, width = '2.5rem', height = '2.5rem' }: BackButtonProps) => {
  return (
    <StyledButton variant='ghost' size='md' onClick={onClick} width={width} height={height}>
      <IoMdArrowRoundBack />
    </StyledButton>
  );
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
    transition: all 0.3s ease-in-out;
  }

  &:hover {
    svg {
      color: gray;
      transform: translateX(-5px);
    }
  }
`;
