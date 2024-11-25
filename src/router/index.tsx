import RootLayout from '@/components/RootLayout';
import Main from '@/pages/Main';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/', // 랜딩 페이지
        element: <Main />,
      },
      {
        path: '/main',
        element: <Main />,
      },
      {
        path: '/login',
        element: <Main />,
      },
      {
        path: '/register',
        element: <Main />,
      },
      {
        path: '/find-password',
        element: <Main />,
      },
      {
        path: '/reset-password',
        element: <Main />,
      },
      {
        path: '/find-id',
        element: <Main />,
      },
      {
        path: '/detail-answer',
        element: <Main />,
      },
      {
        path: '/comments',
        element: <Main />,
      },
    ],
  },
]);

export default router;
