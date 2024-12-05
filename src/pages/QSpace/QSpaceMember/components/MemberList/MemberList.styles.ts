import styled from '@emotion/styled';
import theme from '@/styles/theme';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const MemberItem = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  background-color: none;
  border-radius: 8px;
  border-bottom: 1px solid ${theme.colors.gray[100]};
`;

export const InfoContainer = styled.div`
  flex: 1;
  margin-left: 1rem;
`;

export const Name = styled.div`
  font-family: ${theme.typography.title2.fontFamily.korean};
  font-size: ${theme.typography.title2.size};
  line-height: ${theme.typography.title2.lineHeight};
  font-weight: ${theme.typography.title2.weight};
  color: ${theme.colors.black};
  margin-bottom: 0.25rem;
`;

export const Role = styled.div`
  font-family: ${theme.typography.body2.fontFamily.korean};
  font-size: ${theme.typography.body2.size};
  line-height: ${theme.typography.body2.lineHeight};
  font-weight: ${theme.typography.body2.weight};
  color: ${theme.colors.gray[400]};
`;
