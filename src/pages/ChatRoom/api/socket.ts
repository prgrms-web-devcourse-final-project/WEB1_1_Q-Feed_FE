import { Client } from '@stomp/stompjs';
import SockJS from 'sockjs-client';

// WebSocket URL 설정
const SOCKET_URL = 'http://43.203.125.140:8080/ws'; // SockJS 서버 URL

// STOMP 클라이언트 생성
export const stompClient = new Client({
  webSocketFactory: () => new SockJS(SOCKET_URL), // SockJS를 사용하여 WebSocket 연결
  reconnectDelay: 5000, // 재연결 대기 시간 (ms)
  debug: (str) => {
    console.log('STOMP Debug:', str);
  },
  connectHeaders: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI4Mzk3NDE4OS1hNzQ5LTRhMjQtYmQ1YS04Y2EyNTc3ZmFjNzMiLCJpYXQiOjE3MzM1OTI4MjQsImV4cCI6MTczMzY3OTIyNH0.RJwEddcsaKMFYsjiEgiCUAVzlEnCf1HBhfGtWzch74U', // 필요한 경우 토큰 설정
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
