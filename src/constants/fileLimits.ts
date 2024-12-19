export const FILE_LIMITS = {
  IMAGE: {
    MAX_SIZE: 5 * 1024 * 1024, // 5MB
    MAX_SIZE_TEXT: '5MB',
    ALLOWED_TYPES: ['image/jpeg', 'image/png', 'image/gif', 'image/webp'],
    ERROR_MESSAGES: {
      SIZE_EXCEEDED: '파일 크기는 5MB 이하여야 합니다.',
      INVALID_TYPE: '이미지 파일(JPEG, PNG, GIF, WEBP)만 허용됩니다.',
    },
  },
} as const;

export type AllowedImageType = (typeof FILE_LIMITS.IMAGE.ALLOWED_TYPES)[number];
