import styled from '@emotion/styled';
import theme from '@/styles/theme';
import { Avatar } from '@chakra-ui/react';

export const CommentWrapper = styled.div<{ hideBorder?: boolean }>`
  width: 100%;
  cursor: pointer;
  border-bottom: ${({ hideBorder }) =>
    hideBorder ? 'none' : `0.0625rem solid ${theme.colors.gray[300]}`};
`;

export const Container = styled.div<{ depth: number; isCommentButtonExist: boolean }>`
  width: 100%;
  display: flex;
  gap: 1rem;
  border-bottom: 1px solid ${theme.colors.gray[100]};
  padding: 0.75rem 1rem;
  margin-left: ${(props) => props.depth * 2}rem;
  width: ${(props) => `calc(100% - ${props.depth * 2}rem)`};

  ${(props) =>
    props.isCommentButtonExist &&
    `
    &:hover {
      background: ${theme.colors.sub};
    }
  `}
`;

export const RepliesWrapper = styled.div`
  width: 90%;
  margin-left: auto;
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

export const StyledAvatar = styled(Avatar)`
  width: 3rem !important;
  height: 3rem !important;
  border-radius: 100% !important;

  & > img {
    width: 100% !important;
    height: 100% !important;
    object-fit: cover !important;
    border-radius: 100% !important;
  }
`;

export const AddReplyButton = styled.h1`
  font-family: ${theme.typography.fontFamily.english.header};
  color: ${theme.colors.gray[300]};
  font-size: ${theme.typography.body3.size};
  padding: 0.25rem;

  &:hover {
    font-weight: bold;
  }
`;
