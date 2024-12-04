import React, { useEffect, useRef, useState } from 'react';
import { AiFillEdit } from 'react-icons/ai';
import ProfileImage from '@/components/ui/ProfileImageCon/ProfileImageCon';
import SelectableHobbyTags from '@/components/ui/HobbyTag/SelectableHobbyTags';
import Header from '@/pages/MyPage/components/Header/Header';
import defaultProfile from '@/assets/images/profile.svg';
import {
  Container,
  ProfileSection,
  ProfileImageWrapper,
  EditButton,
  Form,
  FormGroup,
  Label,
  Input,
  TextAreaWrapper,
  TextArea,
  CharacterCount,
  SubmitButton,
} from '@/pages/ProfileRegister/styles';
import axios from 'axios';
import { HobbyTag } from '@/constants/hobbytag';
import { useNavigation } from '@/hooks/useNavigation';

interface KakaoUserInfo {
  email: string;
  name: string;
  profileImage: string;
}

const ProfileRegisterPage: React.FC = () => {
  const { gotoSelectCategory } = useNavigation();
  const availableTags = HobbyTag;
  const [profileImageSrc, setProfileImageSrc] = useState<string>(defaultProfile);
  const [name, setName] = useState<string>('');
  const [bio, setBio] = useState<string>('');
  const [hobbyTags, setHobbyTags] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const storeUserInfoInLocalStorage = (userInfo: KakaoUserInfo): void => {
    localStorage.setItem('kakaoUserInfo', JSON.stringify(userInfo));
  };

  const loadUserInfoFromLocalStorage = (): void => {
    const storedInfo = localStorage.getItem('kakaoUserInfo');
    if (storedInfo) {
      const userInfo: KakaoUserInfo = JSON.parse(storedInfo);
      setName(userInfo.name);
      setProfileImageSrc(userInfo.profileImage || defaultProfile);
    }
  };

  const handleTagSelectionChange = (selectedTags: string[]): void => {
    setHobbyTags(selectedTags);
  };

  const onClickSubmit = (): void => {
    if (!name.trim()) {
      alert('닉네임을 입력해주세요.');
      return;
    }

    if (name.length < 2 || name.length > 10) {
      alert('닉네임은 2자 이상 10자 이하로 입력해주세요.');
      return;
    }

    if (!bio.trim()) {
      alert('한 줄 소개를 입력해주세요.');
      return;
    }

    if (bio.length > 100) {
      alert('한 줄 소개는 100자를 초과할 수 없습니다.'); //임시
      return;
    }

    if (hobbyTags.length === 0) {
      alert('하나 이상의 취미 태그를 선택해주세요.');
      return;
    }

    // console.log('프로필 정보:', {
    //   name,
    //   bio,
    //   hobbyTags,
    //   profileImageSrc,
    // });

    gotoSelectCategory();
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e: ProgressEvent<FileReader>) => {
        const result = e.target?.result as string;
        setProfileImageSrc(result);
      };
      reader.readAsDataURL(file);
    } else {
      alert('이미지 파일만 업로드 가능합니다.');
    }
  };

  const handleEditButtonClick = (): void => {
    fileInputRef.current?.click();
  };

  const getUserInfo = async (code: string): Promise<void> => {
    try {
      const params = new URLSearchParams({
        grant_type: 'authorization_code',
        client_id: import.meta.env.VITE_KAKAO_CLIENT_ID,
        redirect_uri: import.meta.env.VITE_REDIRECT_URI,
        code,
      });

      const tokenResponse = await axios.post('https://kauth.kakao.com/oauth/token', params, {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' },
      });

      const userResponse = await axios.get('https://kapi.kakao.com/v2/user/me', {
        headers: { Authorization: `Bearer ${tokenResponse.data.access_token}` },
      });

      const { id, kakao_account } = userResponse.data;
      const email = `kakao_${id}@example.com`;
      const name = kakao_account.profile.nickname;
      const profileImage = kakao_account.profile.profile_image_url;

      setName(name);
      setProfileImageSrc(profileImage || defaultProfile);

      const userInfo: KakaoUserInfo = { email, name, profileImage };

      storeUserInfoInLocalStorage(userInfo);
    } catch (error) {
      console.error('카카오 로그인 에러:', error);
    }
  };

  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get('code');
    if (code) {
      getUserInfo(code);
      window.history.replaceState({}, document.title, window.location.pathname);
    } else {
      loadUserInfoFromLocalStorage();
    }
  }, []);

  return (
    <>
      <Header title="프로필 등록" />
      <Container>
        <ProfileSection>
          <ProfileImageWrapper>
            <ProfileImage src={profileImageSrc} size={120} />
            <EditButton onClick={handleEditButtonClick}>
              <AiFillEdit size={18} />
            </EditButton>
            <Input
              type="file"
              ref={fileInputRef}
              onChange={handleImageUpload}
              accept="image/*"
              style={{ display: 'none' }}
            />
          </ProfileImageWrapper>
        </ProfileSection>
        <Form>
          <FormGroup>
            <Label htmlFor="name">닉네임</Label>
            <Input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="닉네임을 입력하세요."
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="bio">한 줄 소개</Label>
            <TextAreaWrapper>
              <TextArea
                id="bio"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                placeholder="한 줄로 자신을 소개해보세요."
                maxLength={100}
              />
              <CharacterCount>{`${bio.length}/100`}</CharacterCount>
            </TextAreaWrapper>
          </FormGroup>
          <FormGroup>
            <Label>취미 태그</Label>
            <SelectableHobbyTags
              tags={availableTags}
              selectedTags={hobbyTags}
              onSelectionChange={handleTagSelectionChange}
            />
          </FormGroup>
          <SubmitButton onClick={onClickSubmit}>등록하기</SubmitButton>
        </Form>
      </Container>
    </>
  );
};

export default ProfileRegisterPage;
