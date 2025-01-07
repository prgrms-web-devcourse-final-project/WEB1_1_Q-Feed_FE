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

export function requestPermission() {
  void Notification.requestPermission().then((permission) => {
    if (permission === 'granted') {
      messaging
        .getToken({
          vapidKey:
            'BKvBPha3ZSEI7Xb55-iWciONGqfKYtYgdj6kGWVe-mZDoeKYCCGwmAJaA12wl3zllzU5LCGX4Ar3_8Fix2QqEQ8',
        })
        .then((token: string) => {
          console.log(`푸시 토큰 발급 완료 : ${token}`);
        })
        .catch((err: Error) => {
          console.error('푸시 토큰 가져오는 중에 에러 발생:', err);
        });
    } else if (permission === 'denied') {
      console.log('푸시 권한 차단');
    }
  });
}
