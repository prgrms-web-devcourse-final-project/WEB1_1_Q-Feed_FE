import styled from '@emotion/styled';
import theme from '@/styles/theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border: none;
  border-radius: 0.5rem;
  background-color: ${theme.colors.white};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  gap: 0.5rem;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const ImageContainer = styled.div`
  flex: 0 0 6.25rem;
  height: 6.25rem;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0.5rem;
`;

export const TextContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const RecruitingStatus = styled.span<{ isRecruiting: boolean }>`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: 1.875rem;
  font-size: 0.75rem;
  font-weight: bold;
  color: ${({ isRecruiting }) => (isRecruiting ? theme.colors.textYellow : theme.colors.gray[300])};
  background-color: ${({ isRecruiting }) =>
    isRecruiting ? theme.colors.yellow : theme.colors.gray[100]};
  width: fit-content;
`;

export const Title = styled.h2`
  font-size: 1rem;
  font-weight: bold;
  margin: 0;
  color: ${theme.colors.black};
`;

export const Description = styled.p`
  font-size: 0.875rem;
  margin: 0;
  color: ${theme.colors.gray[300]};
`;

export const Divider = styled.hr`
  border: none;
  border-top: 0.25px solid ${theme.colors.gray[200]};
  margin: 0.5rem 0;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.875rem;
`;

export const Members = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
  color: ${theme.colors.gray[300]};
`;

export const MemberCount = styled.span`
  font-size: 0.875rem;
`;

export const LastUpdated = styled.span`
  font-size: 0.875rem;
  color: ${theme.colors.blue};
`;
