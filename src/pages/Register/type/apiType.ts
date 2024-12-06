interface APIResponse<T> {
  statusCode: number; // 서버 상태 코드
  errorCode: number; // 서버 에러 코드
  message: string; // 응답 메시지
  result: T; // 실제 데이터 (제네릭 타입)
  timestamp: Date; // 응답 시간
}

// 에러 응답을 위한 타입
interface ErrorResponse {
  statusCode: number;
  errorCode: number;
  message: string;
  timestamp: Date;
}

export type { APIResponse, ErrorResponse };
