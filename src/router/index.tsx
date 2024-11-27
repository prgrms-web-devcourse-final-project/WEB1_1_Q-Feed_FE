import RootLayout from '@/components/RootLayout';
import Login from '@/pages/Login';
import Main from '@/pages/Main';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '', // 홈 페이지
        element: <Main />,
      },
      {
        path: '/qspace', // 홈 페이지
        element: <Login />,
      },
      {
        path: 'chat', // 홈 페이지
        element: <Main />,
      },
      {
        path: '/mypage', // 홈 페이지
        element: <Main />,
      },
    ],
  },
]);

export default router;
