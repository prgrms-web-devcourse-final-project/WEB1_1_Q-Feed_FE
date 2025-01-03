import styled from '@emotion/styled';
import theme from '@/styles/theme';
import { BiComment } from 'react-icons/bi';

export const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: none;
  gap: 0.25rem;
  cursor: pointer;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
`;

export const ReplyIcon = styled(BiComment)`
  font-size: ${theme.typography.body1.size};
  color: ${theme.colors.gray[400]};
`;

export const ReplyCount = styled.span`
  font-size: ${theme.typography.body3.size};
  color: ${theme.colors.gray[400]};
`;
