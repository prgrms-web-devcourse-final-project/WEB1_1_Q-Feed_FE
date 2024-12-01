import React from 'react';
import styled from '@emotion/styled';
import theme from '@/styles/theme';

interface TagsProps {
  tags: string[]; // 태그 목록
}

const Tags: React.FC<TagsProps> = ({ tags }) => {
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
  padding: 0.3rem 0.5rem;
  border-radius: 3.125rem;
  border: none;
  background-color: ${theme.colors.sub};
  color: ${theme.colors.gray[400]};
  font-size: 0.75rem;
  font-weight: bold;
`;

export default Tags;
