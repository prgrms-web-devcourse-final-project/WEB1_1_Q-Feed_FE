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
        path: '/',
        element: <Main />,
      },
      {
        path: '/login',
        element: <Login />,
      },

    ],
  },
]);

export default router;
