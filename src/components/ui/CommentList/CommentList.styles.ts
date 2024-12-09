import styled from '@emotion/styled';
import theme from '@/styles/theme';
import { Avatar } from '@chakra-ui/react';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid ${theme.colors.gray[200]};
`;

export const CommentItem = styled.div`
  display: flex;
  gap: 1rem;
  cursor: pointer;
  &:hover {
    background: ${theme.colors.sub};
  }
  padding: 1rem 1.5rem;
`;

export const StyledAvatar = styled(Avatar)`
  width: 3rem !important;
  height: 3rem !important;
  border-radius: 100% !important;

  & > img {
    border-radius: 100% !important;
  }
`;

export const CommentContent = styled.div`
  flex: 1;
`;

export const AuthorInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.25rem;
`;

export const AuthorName = styled.span`
  color: ${theme.colors.gray[400]};
  font-weight: ${theme.typography.weights.medium};
  font-size: ${theme.typography.body2.size};
`;

export const CreatedAt = styled.span`
  color: ${theme.colors.gray[200]};
  font-size: ${theme.typography.body3.size};
`;

export const Content = styled.p`
  color: ${theme.colors.black};
  font-size: ${theme.typography.body2.size};
  font-weight: ${theme.typography.weights.regular};
`;

export const ActionButtons = styled.div`
  display: flex;
  margin-top: 0.5rem;
`;
