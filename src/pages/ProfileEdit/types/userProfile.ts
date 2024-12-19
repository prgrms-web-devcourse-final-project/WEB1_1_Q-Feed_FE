export interface UpdateUserProfileRequest {
  nickname: string; // 사용자 이름
  description: string; // 사용자 소개
  profileImageFile?: File | null; // 선택적 프로필 이미지 파일
}

export interface UpdateUserProfileResponse {
  message: string; // 서버 응답 메시지
}

export interface ApiErrorResponse {
  error: {
    message: string;
    details?: string;
  };
  status: number;
  success: boolean;
}