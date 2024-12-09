import { Client } from '@stomp/stompjs';

// WebSocket URL 설정
const SOCKET_URL = 'wss://q-feed.n-e.kr/ws';

// STOMP 클라이언트 생성
export const stompClient = new Client({
  brokerURL: SOCKET_URL,
  reconnectDelay: 5000,
  debug: (str) => {
    console.log('STOMP Debug:', str);
  },
  connectHeaders: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI4Mzk3NDE4OS1hNzQ5LTRhMjQtYmQ1YS04Y2EyNTc3ZmFjNzMiLCJpYXQiOjE3MzM3MTA4OTQsImV4cCI6MTczMzc5NzI5NH0.1ugqUNKraIrqI-3RtdbA2D-XNhZ5oCDNqO8fdt1ESV0',
  },
});

export const connectStomp = () => {
  stompClient.activate();
};

export const disconnectStomp = () => {
  if (stompClient.active) {
    stompClient.deactivate();
  }
};
