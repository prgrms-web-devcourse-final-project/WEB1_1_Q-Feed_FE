import theme from '@/styles/theme';
import { Button } from '@chakra-ui/react';
import styled from '@emotion/styled';

export const Container = styled.div`
  background-color: ${theme.colors.background};
  min-height: calc(100vh - 5rem); // Footer 높이 5rem 제외
  padding-bottom: 5rem; // Footer 높이만큼 padding
`;

export const Header = styled.header`
  padding: 1rem;
  display: flex;
  align-items: center;
`;

export const Content = styled.main`
  padding: 0 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin-top: 2rem;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  position: relative;
`;

export const Label = styled.label`
  color: ${theme.colors.black};
  font-size: ${theme.typography.body1.size};
  font-weight: ${theme.typography.weights.medium};
`;

export const CharCount = styled.span`
  position: absolute;
  right: 0.5rem;
  bottom: -1.5rem;
  font-size: ${theme.typography.body3.size};
  color: ${theme.colors.gray[400]};
`;

export const ButtonWrapper = styled.div`
  position: fixed;
  bottom: 5rem; // Footer 높이만큼 띄우기
  left: 1rem;
  right: 1rem;
  padding: 1rem 0;
  background-color: ${theme.colors.background};
`;

export const CreateButton = styled(Button)`
  width: 100%;
  margin-bottom: 1rem;
  border-radius: 1rem;
`;
