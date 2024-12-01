import styled from '@emotion/styled';
import { Avatar } from '@chakra-ui/react';
import theme from '@/styles/theme';

export const Container = styled.div`
  display: flex;
  gap: 1rem;
  margin: 0.9375rem 0;
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

export const ContentWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.0625rem;
`;

export const Content = styled.p`
  flex: 1;
  color: ${theme.colors.black};
  font-size: ${theme.typography.body2.size};
  font-weight: ${theme.typography.weights.regular};
`;

export const ActionButtons = styled.div`
  display: flex;
  flex-shrink: 0;
`;
