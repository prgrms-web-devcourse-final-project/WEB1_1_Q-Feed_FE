import styled from '@emotion/styled';
import theme from '@/styles/theme';

export const ButtonContainer = styled.button<{ isLiked: boolean; disabled?: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0;
  border: none;
  background: none;
  transition: all 0.3s ease;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
`;

export const IconWrapper = styled.div<{ isLiked: boolean }>`
  display: flex;
  align-items: center;
  color: ${(props) => (props.isLiked ? theme.colors.notice : theme.colors.gray[400])};
`;

export const Count = styled.span<{ isLiked: boolean }>`
  font-size: ${theme.typography.body3.size};
  color: ${theme.colors.gray[400]};
`;
