import firebase from 'firebase/app';
import 'firebase/messaging';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

// FCM 토큰 요청 함수
export async function requestFcmToken(): Promise<string | null> {
  try {
    const permission = await Notification.requestPermission();
    if (permission === 'granted') {
      const token = await messaging.getToken({
        vapidKey: import.meta.env.VITE_FIREBASE_VAPID_KEY,
      });
      console.log(`푸시 토큰 발급 완료 : ${token}`);
      return token;
    } else {
      console.warn('푸시 권한이 거부되었습니다.');
      return null;
    }
  } catch (error) {
    console.error('푸시 토큰 요청 중 에러 발생:', error);
    return null;
  }
}
