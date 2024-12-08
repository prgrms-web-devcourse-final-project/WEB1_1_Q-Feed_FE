import { APIURL } from '@/constants/api';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export interface KakaoUserInfo {
  email?: string;
  nickname: string;
  profileImage?: string;
}

export const KakaoCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get('code');

    if (code) {
      // 테스트용: 카카오 토큰 받기
      fetch(APIURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          grant_type: 'authorization_code',
          client_id: import.meta.env.VITE_KAKAO_CLIENT_ID,
          redirect_uri: import.meta.env.VITE_REDIRECT_URI,
          code: code,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          // 사용자 정보 가져오기
          fetch('https://kapi.kakao.com/v2/user/me', {
            headers: {
              Authorization: `Bearer ${data.access_token}`,
            },
          })
            .then((res) => res.json())
            .then((userInfo) => {
              const kakaoUserInfo: KakaoUserInfo = {
                email: userInfo.kakao_account.email,
                nickname: userInfo.properties.nickname,
                profileImage: userInfo.properties.profile_image,
              };

              // 프로필 등록 페이지로 이동
              navigate('/profile/register', {
                state: { kakaoUserInfo },
              });
            });
        })
        .catch((error) => {
          //에러 페이지로 라우팅
          console.log('error', error);
        });
    }
  }, [navigate]);

  return <div>loading...</div>;
};
