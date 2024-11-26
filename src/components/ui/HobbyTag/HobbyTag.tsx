import React from 'react';
import styled from '@emotion/styled';

interface HobbyTagProps {
  text: string;
  isSelected: boolean;
  onClick: () => void;
}

export const HobbyTag: React.FC<HobbyTagProps> = ({ text, isSelected, onClick }) => {
  return (
    <Tag isSelected={isSelected} onClick={onClick}>
      {text}
    </Tag>
  );
};

const Tag = styled.button<{ isSelected: boolean }>`
  height: 2.25rem;
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3.125rem;
  border: ${({ isSelected }) => (isSelected ? '1px solid #9D6F70' : '1px solid #BAB0B1')};
  background-color: ${({ isSelected }) => (isSelected ? '#9D6F70' : 'transparent')};
  color: ${({ isSelected }) => (isSelected ? '#FFFFFF' : '#BAB0B1')};
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s;
  white-space: nowrap;

  &:hover {
    color: #FFFFFF;
    border-color: #BAB0B1;
    background-color: #BAB0B1;
  }
`;

