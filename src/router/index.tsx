import RootLayout from '@/components/RootLayout';
import ChatList from '@/pages/ChatList';
import Main from '@/pages/Main';
import MyPage from '@/pages/MyPage';
import Qspace from '@/pages/Qspace';
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
        path: '/qspace', // 큐스페이지
        element: <Qspace />,
      },
      {
        path: 'chat', // 채팅 목록
        element: <ChatList />,
      },
      {
        path: '/mypage', // 마이페이지
        element: <MyPage />,
      },
    ],
  },
]);

export default router;
