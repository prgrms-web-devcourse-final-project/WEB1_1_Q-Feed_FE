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
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI4Mzk3NDE4OS1hNzQ5LTRhMjQtYmQ1YS04Y2EyNTc3ZmFjNzMiLCJpYXQiOjE3MzQ0MzcxNTgsImV4cCI6MTczNDUyMzU1OH0.CKKlqRKa-FgCfYGZG_LvExGn8cSn5V_Ws5Nu3q-ncUw',
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
