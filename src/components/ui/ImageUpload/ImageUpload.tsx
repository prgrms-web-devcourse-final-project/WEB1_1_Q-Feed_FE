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
} from '@/components/ui/ImageUpload/ImageUpload.styles';

interface ImageUploadProps {
  onImageUpload?: (file: File | null) => void; // 이미지 업로드 이벤트 콜백
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

export default ImageUpload;
