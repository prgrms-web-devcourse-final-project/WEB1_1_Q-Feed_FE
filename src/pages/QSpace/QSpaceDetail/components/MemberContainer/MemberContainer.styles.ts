import styled from '@emotion/styled';
import theme from '@/styles/theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  width: 100%;
  gap: 1rem;
  border-top: 1px solid ${theme.colors.gray[200]};
  background-color: ${theme.colors.background};
`;

export const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const BottomSection = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const IconsWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const IconContainer = styled.div<{ size: number; isStacked: boolean }>`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  background-color: ${theme.colors.gray[200]};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: ${(props) => (props.isStacked ? '-8px' : '0')};
  border: 2px solid ${theme.colors.white};
  color: ${theme.colors.gray[100]};
`;

export const Count = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: ${theme.colors.gray[400]};
  font-family: ${theme.typography.fontFamily.korean};
  font-size: ${theme.typography.body2.size};

  svg {
    color: ${theme.colors.gray[400]};
  }
`;

export const LastChatTime = styled.span`
  color: ${theme.colors.blue};
  font-size: ${theme.typography.body3.size};
  font-family: ${theme.typography.fontFamily.korean};
`;
