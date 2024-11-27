import RootLayout from '@/components/RootLayout';
import Login from '@/pages/Login';
import Main from '@/pages/Main';
import QSpaceMainPage from '@/pages/QSpaceMain';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <Main />,
      },
      {
        path: '/qspace', // 홈 페이지
        element: <QSpaceMainPage />,
      },
      {
        path: '/login',
        element: <Login />,
      },

    ],
  },
]);

export default router;
