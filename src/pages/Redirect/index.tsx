import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
// import { useNavigation } from '@/hooks/useNavigation';
import { setCookie } from '@/utils/cookies';
import { useUserStore } from '@/store/userStore';
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from '@/constants/token';

export const KakaoRedirect = () => {
  const location = useLocation();
  // const { gotoSelectCategory, gotoLogin } = useNavigation();
  const { setUserId } = useUserStore();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const kakaoCode = queryParams.get('code');

    console.log('kakaoCode:', kakaoCode);

    if (kakaoCode) {
      // 카카오 로그인 후 받은 'code' 값으로 API 호출
      axios
        .get(`https://localhost:5173/auth/login/kakao?code=${kakaoCode}`)
        .then((response) => {
          const { access_token, refresh_token, userId } = response.data;

          // console.log('access_token:', access_token);
          // console.log('refresh_token:', refresh_token);
          // console.log('userId:', userId);

          // 받은 토큰을 쿠키에 저장
          setCookie(ACCESS_TOKEN_KEY, access_token);
          setCookie(REFRESH_TOKEN_KEY, refresh_token);

          // 사용자 ID를 상태 관리에 저장
          setUserId(userId);

          // 리디렉션 처리 (사용자가 로그인 후 어디로 갈지 설정)
          // gotoSelectCategory();
        })
        .catch((error) => {
          console.error('카카오 로그인 오류:', error);
          // gotoLogin(); // 로그인 실패 시 로그인 화면으로 리디렉션
        });
    } else {
      // 'code'가 없으면 로그인 실패로 처리
      // gotoLogin();
    }
  }, [location]);

  return null;
};
