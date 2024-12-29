import { initializeApp } from 'firebase/app';
import { getMessaging, onMessage, getToken } from 'firebase/messaging';

const firebaseConfig = {
  apiKey: 'AIzaSyCFC3QJKAZhz1R0k-h58wJA8_Rb_PbyiL4',
  authDomain: 'q-feed.firebaseapp.com',
  projectId: 'q-feed',
  storageBucket: 'q-feed.firebasestorage.app',
  messagingSenderId: '804246377517',
  appId: '1:804246377517:web:71270af160949939da14a4',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Messaging
const messaging = getMessaging(app);

export const requestPermission = async () => {
  try {
    const token = await getToken(messaging, {
      vapidKey:
        'BKvBPha3ZSEI7Xb55-iWciONGqfKYtYgdj6kGWVe-mZDoeKYCCGwmAJaA12wl3zllzU5LCGX4Ar3_8Fix2QqEQ8',
    });
    console.log('FCM Token:', token);
    return token;
  } catch (error) {
    console.error('Error getting FCM token:', error);
  }
};

// Listener for foreground messages
export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      console.log('Message received in foreground: ', payload);
      resolve(payload);
    });
  });
