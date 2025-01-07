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
  apiKey: 'AIzaSyCFC3QJKAZhz1R0k-h58wJA8_Rb_PbyiL4',
  authDomain: 'q-feed.firebaseapp.com',
  projectId: 'q-feed',
  storageBucket: 'q-feed.firebasestorage.app',
  messagingSenderId: '804246377517',
  appId: '1:804246377517:web:71270af160949939da14a4',
  measurementId: 'G-02VQ4RWZYG',
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
