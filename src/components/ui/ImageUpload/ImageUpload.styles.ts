import styled from '@emotion/styled';
import theme from '@/styles/theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const UploadBox = styled.div<{ hasPreview: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 16.25rem;
  border: ${({ hasPreview }) => (hasPreview ? '0.125rem solid' : '0.125rem dashed')};
  ${theme.colors.primary};
  border-radius: 1rem;
  background-color: #efe7de;
  position: relative;
  overflow: hidden;
  cursor: pointer;

  input {
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
  }
`;

export const Placeholder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #aaa;
  font-size: 1rem;
  text-align: center;
`;

export const PreviewContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover > div {
    opacity: 1;
  }
`;

export const PreviewImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0.625rem;
  transition: all 0.2s;

  &:hover {
    filter: brightness(0.7);
  }
`;

export const RemoveOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.2s;
`;

export const ErrorMessage = styled.p`
  margin-top: 1rem;
  color: ${theme.colors.notice};
  font-size: 0.875rem;
`;
