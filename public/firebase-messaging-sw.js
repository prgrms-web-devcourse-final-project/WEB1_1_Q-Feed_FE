// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
/// <reference lib="webworker" />
/* eslint-disable no-undef */
/* global firebase */
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyAQsKXoUdQO6i55N9ExqLoqjRDL9w6Hvuo',
  authDomain: 'q-feed.firebaseapp.com',
  projectId: 'q-feed',
  storageBucket: 'q-feed.firebasestorage.app',
  messagingSenderId: '804246377517',
  appId: '1:804246377517:web:4fa09d8e470ac8a2da14a4',
  measurementId: 'G-67D1ZC4V68',
});

// Firebase Messaging 초기화
const messaging = firebase.messaging();

// 푸시 메시지 이벤트 처리
self.addEventListener('push', (event) => {
  console.log('Push 이벤트 수신:', event);

  if (event.data) {
    const data = event.data.json(); // 전달된 데이터 JSON으로 파싱
    console.log('푸시 데이터:', data);

    // 알림 내용 구성
    const notificationTitle = data.notification?.title || '알림 제목 없음';
    const notificationOptions = {
      body: data.notification?.body || '알림 내용 없음',
      icon: data.notification?.icon || '/default-icon.png', // 기본 아이콘 설정
      data: {
        click_action: data.notification?.click_action || '/', // 클릭 동작 설정
      },
    };

    // 알림 표시
    self.registration.showNotification(notificationTitle, notificationOptions);
  } else {
    console.warn('Push 이벤트에 데이터가 없습니다.');
  }
});

// 알림 클릭 이벤트 처리
self.addEventListener('notificationclick', (event) => {
  console.log('알림 클릭 이벤트:', event);

  event.notification.close(); // 알림 닫기

  // 클릭 시 이동할 URL 가져오기
  const clickAction = event.notification.data?.click_action || '/';
  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
      for (const client of clientList) {
        if (client.url === clickAction && 'focus' in client) {
          return client.focus();
        }
      }
      if (clients.openWindow) {
        return clients.openWindow(clickAction);
      }
    })
  );
});

// Firebase Messaging에서 백그라운드 메시지 처리
messaging.onBackgroundMessage((payload) => {
  console.log('백그라운드 메시지 수신:', payload);

  const notificationTitle = payload.notification?.title || '알림 제목 없음';
  const notificationOptions = {
    body: payload.notification?.body || '알림 내용 없음',
    icon: payload.notification?.icon || '/default-icon.png',
  };

  // 알림 표시
  self.registration.showNotification(notificationTitle, notificationOptions);
});
/* /* eslint-disable no-undef
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js');

// Firebase 초기화
firebase.initializeApp({
  apiKey: 'AIzaSyCFC3QJKAZhz1R0k-h58wJA8_Rb_PbyiL4',
  authDomain: 'q-feed.firebaseapp.com',
  projectId: 'q-feed',
  storageBucket: 'q-feed.firebasestorage.app',
  messagingSenderId: '804246377517',
  appId: '1:804246377517:web:71270af160949939da14a4',
});

const messaging = firebase.messaging();

// 백그라운드 알림 처리
messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] 백그라운드 메시지 수신: ', payload);

  const notificationTitle = payload.notification?.title || '새 알림';
  const notificationOptions = {
    body: payload.notification?.body || '알림 내용이 없습니다.',
    icon: payload.notification?.icon || '/default-icon.png',
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
}); */
