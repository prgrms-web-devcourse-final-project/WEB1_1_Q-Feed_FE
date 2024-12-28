import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import router from '@/router';
import { ThemeProvider } from '@emotion/react';
import { GlobalStyles } from '@/styles/GlobalStyles';
import theme from '@/styles/theme';
import { BottomNavigationStyleConfig as BottomNavigation } from 'chakra-ui-bottom-navigation';
import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      retry: 1,
    },
  },
});

const chakraTheme = extendTheme({
  components: {
    BottomNavigation,
  },
});

// Firebase 초기화
const firebaseConfig = {
  apiKey: 'AIzaSyCFC3QJKAZhz1R0k-h58wJA8_Rb_PbyiL4',
  authDomain: 'q-feed.firebaseapp.com',
  projectId: 'q-feed',
  storageBucket: 'q-feed.firebasestorage.app',
  messagingSenderId: '804246377517',
  appId: '1:804246377517:web:71270af160949939da14a4',
};

const firebaseApp = initializeApp(firebaseConfig);
const messaging = getMessaging(firebaseApp);

// FCM 초기화 및 토큰 요청
const requestFCMToken = async () => {
  try {
    const token = await getToken(messaging, {
      vapidKey:
        'BKvBPha3ZSEI7Xb55-iWciONGqfKYtYgdj6kGWVe-mZDoeKYCCGwmAJaA12wl3zllzU5LCGX4Ar3_8Fix2QqEQ8', // Firebase 프로젝트 설정에서 VAPID 키 복사
    });
    if (token) {
      console.log('FCM 토큰:', token);

      // 백엔드에 FCM 토큰 저장 (필요 시)
      // await axios.post('/api/save-token', { token });
    } else {
      console.warn('FCM 토큰을 가져올 수 없습니다. 알림 권한이 허용되지 않았을 수 있습니다.');
    }
  } catch (error) {
    console.error('FCM 토큰 가져오기 실패:', error);
  }
};

// FCM 포그라운드 메시지 처리
onMessage(messaging, (payload) => {
  console.log('포그라운드 메시지 수신:', payload);
  // TODO: 알림 UI 표시
});

// Service Worker 등록
if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/firebase-messaging-sw.js')
    .then((registration) => {
      console.log('Service Worker 등록 성공:', registration);
      requestFCMToken(); // Service Worker가 등록된 후 토큰 요청
    })
    .catch((error) => {
      console.error('Service Worker 등록 실패:', error);
    });
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <ChakraProvider theme={chakraTheme}>
          <GlobalStyles />
          <RouterProvider router={router} />
        </ChakraProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
