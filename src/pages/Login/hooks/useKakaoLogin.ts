export const useKakaoLogin = () => {
  // KAKAO_AUTH_URL을 함수 내부로 이동
  const kakaoLogin = () => {
    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${
      import.meta.env.VITE_KAKAO_CLIENT_ID
    }&redirect_uri=${import.meta.env.VITE_REDIRECT_URI}&response_type=code`;

    if (!import.meta.env.VITE_KAKAO_CLIENT_ID || !import.meta.env.VITE_REDIRECT_URI) {
      alert('카카오 로그인 설정에 문제가 있습니다.');
      return;
    }

    window.location.href = KAKAO_AUTH_URL;
  };

  return { handleKakaoLogin: kakaoLogin };
};
