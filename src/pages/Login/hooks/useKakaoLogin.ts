export const useKakaoLogin = () => {
  // KAKAO_AUTH_URL을 함수 내부로 이동
  const kakaoLogin = () => {
    const isLocal = window.location.hostname === 'localhost';
    const redirectUri = isLocal
      ? 'https://localhost:5173/auth/login/kakao' // 로컬 환경에서 리다이렉트 URL
      : 'https://q-feed.n-e.kr/auth/login/kakao'; // 실제 배포된 리다이렉트 URL

    // 카카오 로그인 URL 생성
    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${
      import.meta.env.VITE_KAKAO_CLIENT_ID
    }&redirect_uri=${redirectUri}&response_type=code`;

    if (!import.meta.env.VITE_KAKAO_CLIENT_ID || !redirectUri) {
      alert('카카오 로그인 설정에 문제가 있습니다.');
      return;
    }

    // 카카오 로그인 페이지로 리다이렉트
    window.location.href = KAKAO_AUTH_URL;
  };

  return { handleKakaoLogin: kakaoLogin };
};
