import { Category } from '@/constants/categories';
import { ROUTES } from '@/constants/routes';
import { useNavigate } from 'react-router-dom';

export const useNavigation = () => {
  const navigate = useNavigate();

  const gotoRoot = () => navigate(ROUTES.ROOT);
  const gotoMain = () => navigate(ROUTES.MAIN);
  const gotoChat = () => navigate(ROUTES.CHAT);
  const gotoMyPage = () => navigate(ROUTES.MYPAGE);
  const gotoLanding = () => navigate(ROUTES.LANDING);
  const gotoQspace = () => navigate(ROUTES.QSPACE);
  const gotoCategorySelect = () => navigate(ROUTES.QSPACE_CATEGORY);
  const gotoQspaceMember = () => navigate(ROUTES.QSPACE_MEMBER);
  const gotoQspaceGroup = () => navigate(ROUTES.QSPACE_GROUP);
  const gotoQspaceDetail = () => navigate(ROUTES.QSPACE_DETAIL);
  const gotoLogin = () => navigate(ROUTES.LOGIN);
  const gotoAlarm = () => navigate(ROUTES.ALARM);
  const gotoChatRoom = () => navigate(ROUTES.CHATROOM);
  const gotoQuestionPage = (category?: string) => {
    const targetCategory = category || Category.TRAVEL;
    navigate(ROUTES.QUESTION.replace(':category', targetCategory));
  };
  const gotoSelectCategory = () => navigate(ROUTES.SELECT);
  const gotoProfilePage = (userId: string) =>
    navigate(ROUTES.PROFILE.replace(':id', String(userId)));
  const gotoDetailPage = (answerId: string | number, question: string) => {
    navigate(
      ROUTES.POST_DETAIL.replace(':postId', String(`${answerId}`).concat(`?question=${question}`))
    );
  };
  const gotoProfileEditPage = () => navigate(ROUTES.PROFILE_EDIT);
  const gotoProfileRegister = () => navigate(ROUTES.PROFILE_REGISTER);
  const gotoPasswordRecoveryPage = () => navigate(ROUTES.PASSWORD_RECOVERY);
  const gotoResetPasswordPage = () => navigate(ROUTES.RESET_PASSWORD);
  const goToFindEmail = () => navigate(ROUTES.ID_RECOVERY);
  const gotoFollwerPage = () => navigate(ROUTES.FOLLOWERS);
  const gotoEvent = () => navigate(ROUTES.EVENT);
  const gotoSearch = () => navigate(ROUTES.SEARCH);
  const gotoAuthKakao = () => navigate(ROUTES.KAKAO_CALLBACK);
  const gotoRegisterPage = () => navigate(ROUTES.REGISTER);
  const gotoEditPage = (postId: string, category: string) =>
    navigate(ROUTES.POST_EDIT.replace(':id', String(postId)).replace(':category', category));

  return {
    gotoRoot,
    gotoMain,
    gotoChat,
    gotoMyPage,
    gotoLanding,
    gotoQspace,
    gotoCategorySelect,
    gotoQspaceMember,
    gotoQspaceGroup,
    gotoQspaceDetail,
    gotoLogin,
    gotoAlarm,
    gotoChatRoom,
    gotoQuestionPage,
    gotoSelectCategory,
    gotoProfilePage,
    gotoDetailPage,
    gotoProfileEditPage,
    gotoProfileRegister,
    gotoPasswordRecoveryPage,
    gotoResetPasswordPage,
    goToFindEmail,
    gotoFollwerPage,
    gotoEvent,
    gotoSearch,
    gotoAuthKakao,
    gotoRegisterPage,
    gotoEditPage,
  };
};
