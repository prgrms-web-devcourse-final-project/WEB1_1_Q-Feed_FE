import RootLayout from '@/components/RootLayout';
import Login from '@/pages/Login';
import ChatList from '@/pages/ChatList';
import Main from '@/pages/Main';
import MyPage from '@/pages/MyPage';
import QSpaceMainPage from '@/pages/QSpaceMain';
import CategorySelectPage from '@/pages/QSpacePost/CategorySelectPage';
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
        path: 'chat', // 채팅 목록
        element: <ChatList />,
      },
      {
        path: '/mypage', // 마이페이지
        element: <MyPage />,
      },
      {
        path: '/qspace',
        element: <QSpaceMainPage />,
      },
      {
        path: '/qspace/category',
        element: <CategorySelectPage />,
      },
      {
        path: '/login',
        element: <Login />,
      },
    ],
  },
]);

export default router;
