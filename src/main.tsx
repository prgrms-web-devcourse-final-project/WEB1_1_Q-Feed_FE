import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import router from '@/router';
import { ThemeProvider } from '@emotion/react';
import { GlobalStyles } from '@/styles/GlobalStyles';
import theme from '@/styles/theme';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      retry: 1,
      staleTime: 5 * 60 * 1000,
      gcTime: 30 * 60 * 1000,
    },
  },
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <ChakraProvider>
          <GlobalStyles />
          <RouterProvider router={router} />
        </ChakraProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
