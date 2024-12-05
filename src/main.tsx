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
    })
    .catch((error) => {
      console.error('Service Worker 등록 실패:', error);
    });
}

async function enableMocking() {
  if (process.env.NODE_ENV !== 'development') {
    return;
  }

  const { worker } = await import('./mocks/browser');
  return worker.start({
    onUnhandledRequest: 'bypass', // 모킹되지 않은 요청은 그대로 통과
  });
}

enableMocking().then(() => {
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
});
