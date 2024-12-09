import { Client } from '@stomp/stompjs';

// WebSocket URL 설정
const SOCKET_URL = 'wss://q-feed.n-e.kr/ws';

// STOMP 클라이언트 생성
export const stompClient = new Client({
  brokerURL: SOCKET_URL, // WebSocket URL
  reconnectDelay: 5000, // 재연결 대기 시간 (ms)
  debug: (str) => {
    console.log('STOMP Debug:', str);
  },
  connectHeaders: {
    Authorization: 'Token', // 토큰 인증 (필요한 경우)
  },
});

// STOMP 연결 함수
export const connectStomp = () => {
  stompClient.onConnect = (frame) => {
    console.log('STOMP 연결 성공:', frame);
  };

  stompClient.onStompError = (frame) => {
    console.error('STOMP 에러:', frame.headers['message']);
  };

  stompClient.activate(); // STOMP 활성화
};

// STOMP 연결 해제 함수
export const disconnectStomp = () => {
  if (stompClient.active) {
    stompClient.deactivate();
    console.log('STOMP 연결 해제');
  }
};
