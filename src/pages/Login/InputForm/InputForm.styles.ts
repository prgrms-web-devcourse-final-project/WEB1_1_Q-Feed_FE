import styled from '@emotion/styled';
import { Input } from '@chakra-ui/react';
import theme from '@/styles/theme';

export const Container = styled.div``;

export const Title = styled.h1`
  font-size: ${theme.typography.body1.size};
  line-height: ${theme.typography.body1.lineHeight};
  font-weight: ${theme.typography.body1.weight};
  text-align: left;
  margin-bottom: 15px;
`;

export const StyledInput = styled(Input)`
  width: 100%;
  min-width: 377px;
  height: 56px;
  color: ${theme.colors.gray[300]};
  font-size: 1rem;
  border-radius: 15px;
  padding: 0 1rem;
  border: 1px solid ${(props) => (props.isInvalid ? theme.colors.notice : theme.colors.gray[300])};

  &:focus {
    border-color: ${(props) => (props.isInvalid ? theme.colors.notice : theme.colors.primary)};
    box-shadow: 0 0 0 1px
      ${(props) => (props.isInvalid ? theme.colors.notice : theme.colors.primary)};
  }
`;
