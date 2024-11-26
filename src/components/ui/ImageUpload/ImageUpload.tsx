import React, { useState } from 'react';
import styled from '@emotion/styled';
import { LuImagePlus, LuImageOff } from 'react-icons/lu';
import theme from '@/styles/theme';

interface ImageUploadProps {
  onImageUpload?: (file: File) => void; // 이미지 업로드 이벤트 콜백
}

export const ImageUpload: React.FC<ImageUploadProps> = ({ onImageUpload }) => {
  const [preview, setPreview] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const validImageTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];

  const processFile = (file: File) => {
    if (!validImageTypes.includes(file.type)) {
      setError('이미지 파일(JPEG, PNG, GIF, WEBP)만 허용됩니다.');
      return;
    }
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result as string);
      setError(null);
    };
    reader.readAsDataURL(file);
    onImageUpload?.(file);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) processFile(file);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file) processFile(file);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleBoxClick = () => {
    if (preview) {
      setPreview(null);
      setError(null);
    }
  };

  return (
    <Container>
      <UploadBox
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onClick={handleBoxClick}
        hasPreview={!!preview}
      >
        <input type="file" accept="image/*" onChange={handleFileChange} />
        {preview ? (
          <PreviewContainer>
            <PreviewImage src={preview} alt="Uploaded Preview" />
            <RemoveOverlay>
              <LuImageOff size="3rem" color={theme.colors.primary} />
            </RemoveOverlay>
          </PreviewContainer>
        ) : (
          <Placeholder>
            <LuImagePlus size="3rem" color={theme.colors.primary} />
          </Placeholder>
        )}
      </UploadBox>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const UploadBox = styled.div<{ hasPreview: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 23.562rem;
  height: 16.25rem;
  border: ${({ hasPreview }) => (hasPreview ? '0.125rem solid' : '0.125rem dashed')} ${theme.colors.primary};
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

const Placeholder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #aaa;
  font-size: 1rem;
  text-align: center;
`;

const PreviewContainer = styled.div`
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

const PreviewImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0.625rem;
  transition: all 0.2s;

  &:hover {
    filter: brightness(0.7);
  }
`;

const RemoveOverlay = styled.div`
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

const ErrorMessage = styled.p`
  margin-top: 1rem;
  color: #f44336;
  font-size: 0.875rem;
`;
