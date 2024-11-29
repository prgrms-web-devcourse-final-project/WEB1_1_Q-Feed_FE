/** @jsxImportSource @emotion/react */
import theme from '@/styles/theme';
import { css } from '@emotion/react';
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

// 컨테이너 스타일
const containerStyle = (size: number, bgColor: string) => css`
  width: ${size}px;
  height: ${size}px;
  background-color: ${bgColor};
  border-radius: 50%; /* 동그란 모양 */
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

// 이미지 스타일
const imageStyle = (size: number) => css`
  width: ${size}px;
  height: ${size}px;
  object-fit: cover;
`;

// 아이콘 스타일
const iconStyle = () => css`
  width: 80%;
  height: 80%;
  color: ${theme.colors.gray[100]};
`;

export default ProfileImage;
