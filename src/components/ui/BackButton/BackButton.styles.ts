import styled from '@emotion/styled';

interface BackButtonProps {
  width?: string;
  height?: string;
}

export const Button = styled.button<BackButtonProps>`
  cursor: pointer;
  border: none;
  background: transparent;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;

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
