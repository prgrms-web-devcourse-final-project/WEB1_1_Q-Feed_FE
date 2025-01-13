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
import './firesbase-message';

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

if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/firebase-messaging-sw.js')
    .then((registration) => {
      console.log('Service Worker 등록 성공:', registration);

      // Firebase Messaging 초기화
      import('./firesbase-message').then(({ requestFcmToken }) => {
        requestFcmToken();
      });
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
