import React from 'react';
import styled from '@emotion/styled';
import theme from '@/styles/theme';

interface HobbyTagsProps {
  tags: string[]; // 태그 목록
}

export const HobbyTags: React.FC<HobbyTagsProps> = ({ tags }) => {
  return (
    <TagContainer>
      {tags.map((tag) => (
        <Tag key={tag}>{tag}</Tag>
      ))}
    </TagContainer>
  );
};

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const Tag = styled.span`
  padding: 0.5rem 1rem;
  border-radius: 3.125rem;
  border: 1px solid ${theme.colors.primary};
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
  font-size: 1rem;
`;
