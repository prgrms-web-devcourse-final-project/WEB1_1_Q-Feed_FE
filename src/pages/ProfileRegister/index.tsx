import React, { useEffect, useRef, useState } from 'react';
import { AiFillEdit } from 'react-icons/ai';
import ProfileImage from '@/components/ui/ProfileImageCon/ProfileImageCon';
import SelectableHobbyTags from '@/components/ui/HobbyTag/SelectableHobbyTags';
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
  Body,
  ErrorMessage,
  NickNameWrapper,
} from '@/pages/ProfileRegister/styles';
import axios from 'axios';
import { useNavigation } from '@/hooks/useNavigation';
import { KakaoUserInfo } from '@/pages/KakaoCallback/KakaoCallback';
import { authAPI } from '@/pages/ProfileRegister/api/fetchUser';
import { CATEGORIES } from '@/constants/categories';
import { HeaderWithTitle } from '@/components/ui/HeaderWithTitle/HeaderWithTitle';
import { SignUpRequest } from '@/pages/ProfileRegister/type/userInfo';

const ProfileRegisterPage: React.FC = () => {
  const { gotoSelectCategory } = useNavigation();
  const [profileImageSrc, setProfileImageSrc] = useState<string>(defaultProfile);
  const [name, setName] = useState<string>('');
  const [bio, setBio] = useState<string>('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  // const [hobbyTags, setHobbyTags] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isValidNickname, setIsValidNickname] = useState<boolean>(true);
  const [nameError, setNameError] = useState<string>('');

  const [debouncedName, setDebouncedName] = useState<string>('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedName(name);
    }, 1000);

    return () => clearTimeout(timer);
  }, [name]);

  useEffect(() => {
    if (debouncedName.length >= 2 && debouncedName.length <= 10) {
      checkNickname(debouncedName);
    }
  }, [debouncedName]);

  const checkNickname = async (nickname: string) => {
    try {
      const response = await authAPI.checkNickname(nickname);
      const isAvailable = response.data === true;
      setIsValidNickname(isAvailable);
      setNameError(isValidNickname ? '' : '사용 불가능한 닉네임입니다.');
    } catch (error) {
      console.error('닉네임 검증 실패:', error);
      setIsValidNickname(false);
      setNameError('닉네임 검증에 실패했습니다.');
    }
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newName = e.target.value;
    setName(newName);

    if (newName.length <= 2 || newName.length >= 10) {
      setNameError('닉네임은 2자 이상 10자 이하로 입력해주세요.');
      setIsValidNickname(false);
      return;
    }
  };

  const storeUserInfoInLocalStorage = (userInfo: KakaoUserInfo): void => {
    localStorage.setItem('kakaoUserInfo', JSON.stringify(userInfo));
  };

  const loadUserInfoFromLocalStorage = (): void => {
    const storedInfo = localStorage.getItem('kakaoUserInfo');
    if (storedInfo) {
      const userInfo: KakaoUserInfo = JSON.parse(storedInfo);
      setName(userInfo.nickname);
      setProfileImageSrc(userInfo.profileImage || defaultProfile);
    }
  };

  const handleTagSelectionChange = (selectedTags: string[]): void => {
    setSelectedTags(selectedTags);
  };

  const onClickSubmit = async (): Promise<void> => {
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

    if (selectedTags.length === 0) {
      alert('하나 이상의 관심사 태그를 선택해주세요.');
      return;
    }

    try {
      const registerEmail = localStorage.getItem('registerEmail');
      const registerPassword = localStorage.getItem('registerPassword');

      if (!registerEmail || !registerPassword) {
        alert('회원가입 정보가 없습니다.');
        return;
      }

      // 영문으로 입력해야 회원가입 가능
      const englishTags = selectedTags.map((tag) => CATEGORIES[tag as keyof typeof CATEGORIES]);
      setSelectedTags(englishTags);

      const signUpData: SignUpRequest = {
        email: registerEmail,
        password: registerPassword,
        nickname: name,
        description: bio,
        interestCategoryNames: englishTags,
        profileImageFile: fileInputRef.current?.files?.[0],
      };

      // FormData로 회원가입 API 호출
      const { data } = await authAPI.signUp(signUpData);

      if (data?.message) {
        localStorage.removeItem('registerEmail');
        localStorage.removeItem('registerPassword');
        gotoSelectCategory();
      }
    } catch (error) {
      console.error('회원가입 실패:', error);
      alert('회원가입에 실패했습니다.');
    }
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
      const nickname = kakao_account.profile.nickname;
      const profileImage = kakao_account.profile.profile_image_url;

      setName(nickname);
      setProfileImageSrc(profileImage || defaultProfile);

      const userInfo: KakaoUserInfo = { email, nickname, profileImage };

      storeUserInfoInLocalStorage(userInfo);
    } catch (error) {
      console.error('카카오 로그인 에러:', error);
    }
  };

  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get('code');
    if (code) {
      // 카카오 로그인 처리
      getUserInfo(code);
      window.history.replaceState({}, document.title, window.location.pathname);
    } else {
      // 로컬 스토리지에서 카카오 유저 정보 확인
      const storedKakaoInfo = localStorage.getItem('kakaoUserInfo');
      if (storedKakaoInfo) {
        loadUserInfoFromLocalStorage();
      } else {
        // 이메일 회원가입 사용자 처리
        const registerEmail = localStorage.getItem('registerEmail');
        const registerPassword = localStorage.getItem('registerPassword');

        if (registerEmail && registerPassword) {
          // 이메일 회원가입 사용자는 기본 프로필 이미지만 설정
          setProfileImageSrc(defaultProfile);
        }
      }
    }
  }, []);

  return (
    <>
      <Container>
        <HeaderWithTitle title="프로필 등록" />
        <Body>
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
            <NickNameWrapper>
              <FormGroup>
                <Label htmlFor="name">닉네임</Label>
                <Input
                  id="name"
                  type="text"
                  value={name}
                  onChange={handleNameChange}
                  placeholder="닉네임을 입력하세요."
                />
              </FormGroup>
              {nameError && <ErrorMessage>{nameError}</ErrorMessage>}{' '}
            </NickNameWrapper>
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
                tags={['여행', '스포츠', '패션', '문화', '맛집', '기타']}
                selectedTags={selectedTags}
                onSelectionChange={handleTagSelectionChange}
              />
            </FormGroup>
            <SubmitButton onClick={onClickSubmit}>등록하기</SubmitButton>
          </Form>
        </Body>
      </Container>
    </>
  );
};

export default ProfileRegisterPage;
