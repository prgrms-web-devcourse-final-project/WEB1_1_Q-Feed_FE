import firebase from 'firebase/app';
import 'firebase/messaging';

const firebaseConfig = {
  apiKey: 'AIzaSyCFC3QJKAZhz1R0k-h58wJA8_Rb_PbyiL4',
  authDomain: 'q-feed.firebaseapp.com',
  projectId: 'q-feed',
  storageBucket: 'q-feed.firebasestorage.app',
  messagingSenderId: '804246377517',
  appId: '1:804246377517:web:71270af160949939da14a4',
  measurementId: 'G-02VQ4RWZYG',
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

// FCM 토큰 요청 함수
export async function requestFcmToken(): Promise<string | null> {
  try {
    const permission = await Notification.requestPermission();
    if (permission === 'granted') {
      const token = await messaging.getToken({
        vapidKey:
          'BKvBPha3ZSEI7Xb55-iWciONGqfKYtYgdj6kGWVe-mZDoeKYCCGwmAJaA12wl3zllzU5LCGX4Ar3_8Fix2QqEQ8',
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
