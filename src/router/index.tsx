import RootLayout from '@/components/RootLayout';
import Login from '@/pages/Login';
import ChatList from '@/pages/ChatList';
import Main from '@/pages/Main';
import MyPage from '@/pages/MyPage';
import QSpaceMainPage from '@/pages/QSpace/QSpaceMain';
import CategorySelectPage from '@/pages/QSpace/QSpacePost/CategorySelectPage';
import NotificationPage from '@/pages/Alarm';
import PostGroupPage from '@/pages/QSpace/QSpacePost/PostGroupPage';
import { createBrowserRouter } from 'react-router-dom';
import ChatRoom from '@/pages/ChatRoom';
import QSpaceDetailPage from '@/pages/QSpace/QSpaceDetail';
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
import QSpaceMemberPage from '@/pages/QSpace/QSpaceMember';
import EventPage from '@/pages/Event';
import SearchResultPage from '@/pages/Search';
import FollowerFollowingPage from '@/pages/Following';
import { KakaoCallback } from '@/pages/KakaoCallback/KakaoCallback';
import ProfileRegisterPage from '@/pages/ProfileRegister';
import { ROUTES } from '@/constants/routes';
import ErrorPage from '@/pages/Error';

const router = createBrowserRouter([
  {
    path: ROUTES.ROOT,
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: ROUTES.MAIN,
        element: <Main />,
      },
      {
        path: ROUTES.CHAT, // 채팅 목록
        element: <ChatList />,
      },
      {
        path: ROUTES.MYPAGE, // 마이페이지
        element: <MyPage />,
      },
      {
        path: ROUTES.ROOT, //랜딩페이지
        element: <LandingPage />,
      },
      {
        path: ROUTES.QSPACE,
        element: <QSpaceMainPage />,
      },
      {
        path: ROUTES.QSPACE_CATEGORY,
        element: <CategorySelectPage />,
      },
      {
        path: ROUTES.QSPACE_MEMBER,
        element: <QSpaceMemberPage />,
      },
      {
        path: ROUTES.QSPACE_GROUP,
        element: <PostGroupPage mode="create" />,
      },
      {
        path: ROUTES.QSPACE_EDIT,
        element: <PostGroupPage mode="edit" />,
      },
      {
        path: ROUTES.QSPACE_DETAIL,
        element: <QSpaceDetailPage />,
      },
      {
        path: ROUTES.LOGIN,
        element: <Login />,
      },
      {
        path: ROUTES.ALARM,
        element: <NotificationPage />,
      },
      {
        path: ROUTES.CHATROOM,
        element: <ChatRoom />,
      },
      {
        path: ROUTES.QUESTION,
        element: <QuestionPage />,
      },
      {
        path: ROUTES.SELECT,
        element: <HobbySelectPage />,
      },
      {
        path: ROUTES.PROFILE,
        element: <ProfilePage />,
      },
      {
        path: ROUTES.POST_DETAIL,
        element: <PostDetailPage />,
      },
      {
        path: ROUTES.PROFILE_EDIT,
        element: <ProfileEditPage />,
      },
      {
        path: ROUTES.REGISTER,
        element: <RegisterPage />,
      },
      {
        path: ROUTES.PASSWORD_RECOVERY,
        element: <PasswordRecoveryPage />,
      },
      {
        path: ROUTES.RESET_PASSWORD,
        element: <ResetPasswordPage />,
      },
      {
        path: ROUTES.ID_RECOVERY,
        element: <IDRecoveryPage />,
      },
      {
        path: ROUTES.FOLLOWERS,
        element: <FollowerFollowingPage />,
      },
      {
        path: ROUTES.EVENT,
        element: <EventPage />,
      },
      {
        path: ROUTES.SEARCH,
        element: <SearchResultPage />, // 검색 결과 페이지 컴포넌트
      },
      {
        path: ROUTES.KAKAO_CALLBACK,
        element: <KakaoCallback />,
      },
      {
        path: ROUTES.PROFILE_REGISTER,
        element: <ProfileRegisterPage />,
      },
      {
        path: ROUTES.ERROR,
        element: <ErrorPage />,
      },
    ],
  },
]);

export default router;
