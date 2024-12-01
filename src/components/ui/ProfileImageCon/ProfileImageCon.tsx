/** @jsxImportSource @emotion/react */
import {
  containerStyle,
  iconStyle,
  imageStyle,
} from '@/components/ui/ProfileImageCon/ProfileImageCon.styles';
import { IoPerson } from 'react-icons/io5';

// Props 타입 정의
interface ProfileImageProps {
  src?: string; // 이미지 URL (선택적)
  size?: number; // 이미지 크기 (px)
  bgColor?: string; // 배경색
  alt?: string; // 대체 텍스트
}

const ProfileImage = ({
  src,
  size = 50, // 기본 크기 50px
  bgColor = '#d3cdcd', // 기본 배경색
  alt = 'Profile Image', // 기본 대체 텍스트
}: ProfileImageProps) => {
  return (
    <div css={containerStyle(size, bgColor)}>
      {src ? <img css={imageStyle(size)} src={src} alt={alt} /> : <IoPerson css={iconStyle()} />}
    </div>
  );
};

export default ProfileImage;
