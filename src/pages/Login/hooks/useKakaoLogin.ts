export const useKakaoLogin = () => {
  const validateKakaoConfig = () => {
    if (!import.meta.env.VITE_KAKAO_CLIENT_ID) {
      throw new Error('카카오 클라이언트 ID가 설정되지 않았습니다.');
    }
    if (!import.meta.env.VITE_REDIRECT_URI) {
      throw new Error('리다이렉트 URI가 설정되지 않았습니다.');
    }
  };

  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${import.meta.env.VITE_KAKAO_CLIENT_ID}&redirect_uri=${import.meta.env.VITE_REDIRECT_URI}&response_type=code`;

  const handleKakaoLogin = () => {
    try {
      validateKakaoConfig();
      window.location.href = KAKAO_AUTH_URL;
    } catch (error) {
      alert('카카오 로그인 설정에 문제가 있습니다.');
    }
  };

  return { handleKakaoLogin };
};
