export const useKakaoLogin = () => {
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${import.meta.env.VITE_KAKAO_CLIENT_ID}&redirect_uri=${import.meta.env.VITE_REDIRECT_URI}&response_type=code`;

  const handleKakaoLogin = () => {
    // 가입이력이 있는 사용자인지 우선 확인 필요
    window.location.href = KAKAO_AUTH_URL;
  };

  return { handleKakaoLogin };
};
