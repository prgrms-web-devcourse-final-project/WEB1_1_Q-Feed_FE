import styled from '@emotion/styled';
import theme from '@/styles/theme';

export const Container = styled.div`
  background-color: ${theme.colors.white80};
  width: 100%;
  display: flex;
  gap: 0.625rem;
  padding: 0 1.25rem;
`;

export const InputWrapper = styled.div`
  flex: 1;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
`;
