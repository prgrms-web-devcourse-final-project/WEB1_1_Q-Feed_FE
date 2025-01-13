// ImageUpload.tsx
import { useState } from 'react';
import { LuImagePlus, LuImageOff } from 'react-icons/lu';
import theme from '@/styles/theme';
import {
  Container,
  ErrorMessage,
  Placeholder,
  PreviewContainer,
  PreviewImage,
  RemoveOverlay,
  UploadBox,
} from './ImageUpload.styles';

interface ImageUploadProps {
  onImageUpload?: (file: File | null) => void;
  maxSize?: number;
}

const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'image/jpg']; // 허용 MIME 타입
const ERROR_MESSAGES = {
  INVALID_TYPE: 'jpg 또는 png 파일만 업로드할 수 있습니다.',
  SIZE_EXCEEDED: '파일 크기가 너무 큽니다.',
};

export const ImageUpload = ({
  onImageUpload,
  maxSize = 5 * 1024 * 1024, // 기본 파일 크기 제한: 5MB
}: ImageUploadProps) => {
  const [preview, setPreview] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const processFile = (file: File) => {
    if (!ALLOWED_TYPES.includes(file.type)) {
      setError(ERROR_MESSAGES.INVALID_TYPE);
      return;
    }

    if (file.size > maxSize) {
      setError(ERROR_MESSAGES.SIZE_EXCEEDED);
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
      onImageUpload?.(null);
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
        <input type="file" accept=".jpg,.jpeg,.png" onChange={handleFileChange} />
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

export default ImageUpload;
