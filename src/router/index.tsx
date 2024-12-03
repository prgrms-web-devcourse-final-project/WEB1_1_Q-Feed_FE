import RootLayout from '@/components/RootLayout';
import Login from '@/pages/Login';
import ChatList from '@/pages/ChatList';
import Main from '@/pages/Main';
import MyPage from '@/pages/MyPage';
import QSpaceMainPage from '@/pages/QSpaceMain';
import CategorySelectPage from '@/pages/QSpacePost/CategorySelectPage';
import NotificationPage from '@/pages/Alarm';
import PostGroupPage from '@/pages/QSpacePost/PostGroupPage';
import { createBrowserRouter } from 'react-router-dom';
import ChatRoom from '@/pages/ChatRoom';
import QSpaceDetailPage from '@/pages/QSpaceDetail';
import QuestionPage from '@/pages/Question';
import ProfilePage from '@/pages/Profile';
import HobbySelectPage from '@/pages/HobbySelect';
import { PostDetailPage } from '@/pages/AnswerDetail';
import LandingPage from '@/pages/Landing';
import ProfileEditPage from '@/pages/ProfileEdit';
import { RegisterPage } from '@/pages/Register';
import { PasswordRecoveryPage } from '@/pages/PasswordRecovery';
import { ResetPasswordPage } from '@/pages/ResetPassword';
import { IDRecoveryPage } from '@/pages/IDRecovery';
import QSpaceMemberPage from '@/pages/QSpaceMember';
import EventPage from '@/pages/Event';
import SearchResultPage from '@/pages/Search';
import FollowerFollowingPage from '@/pages/Following';
import ErrorPage from '@/pages/Error';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <Main />,
      },
      {
        path: '/chat', // 채팅 목록
        element: <ChatList />,
      },
      {
        path: '/mypage', // 마이페이지
        element: <MyPage />,
      },
      {
        path: '/landing', //랜딩페이지
        element: <LandingPage />,
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
        path: '/qspace/member',
        element: <QSpaceMemberPage />,
      },
      {
        path: '/qspace/post',
        element: <PostGroupPage />,
      },
      {
        path: '/qspace/details',
        element: <QSpaceDetailPage />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/alarm',
        element: <NotificationPage />,
      },
      {
        path: '/chatroom/:id',
        element: <ChatRoom />,
      },
      {
        path: '/question/:category',
        element: <QuestionPage />,
      },
      {
        path: '/select',
        element: <HobbySelectPage />,
      },
      {
        path: '/profile/:id',
        element: <ProfilePage />,
      },
      {
        path: '/post/:id',
        element: <PostDetailPage />,
      },
      {
        path: '/profile/edit',
        element: <ProfileEditPage />,
      },
      {
        path: '/register',
        element: <RegisterPage />,
      },
      {
        path: '/account-recovery/password',
        element: <PasswordRecoveryPage />,
      },
      {
        path: '/account-reset/password',
        element: <ResetPasswordPage />,
      },
      {
        path: '/account-recovery/id',
        element: <IDRecoveryPage />,
      },
      {
        path: '/followers',
        element: <FollowerFollowingPage />,
      },
      {
        path: '/event',
        element: <EventPage />,
      },
      {
        path: '/search',
        element: <SearchResultPage />, // 검색 결과 페이지 컴포넌트
      },
    ],
  },
]);

export default router;
