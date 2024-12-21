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
    Authorization: 'Bearer token',
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
