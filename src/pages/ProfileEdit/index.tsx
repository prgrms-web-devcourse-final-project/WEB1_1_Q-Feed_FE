import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AiFillEdit } from 'react-icons/ai';
import ProfileImage from '@/components/ui/ProfileImageCon/ProfileImageCon';
import SelectableHobbyTags from '@/components/ui/HobbyTag/SelectableHobbyTags';
import Header from '@/pages/MyPage/components/Header/Header';
import { useUserProfile, useUserInterests } from '@/pages/MyPage/hooks/useUserProfile';
import { useUpdateUserProfile } from './hooks/useUpdateUserProfile';
import { useUpdateUserInterests } from './hooks/useUpdateUserInterests';
import LoadingSpinner from '@/components/ui/LoadingSpinner/LoadingSpinner';
import ErrorPage from '@/pages/Error';
import defaultProfileImg from '@/assets/images/profile.svg';
import { tagMap } from '@/pages/ProfileEdit/utils/tagMap';
import { interestsMap } from '@/pages/MyPage/utils/interestsMap';
import { useUserStore } from '@/store/userStore';
import {
  Container,
  ProfileSection,
  ProfileImageWrapper,
  EditButton,
  Name,
  Form,
  FormGroup,
  Label,
  Input,
  TextAreaWrapper,
  TextArea,
  CharacterCount,
  SubmitButton,
} from '@/pages/ProfileEdit/styles';

const ProfileEditPage = () => {
  const navigate = useNavigate();
  const { userId } = useUserStore();

  const { data: profileData, isLoading: profileLoading, error: profileError } = useUserProfile(userId || '');
  const { data: interestsData, isLoading: interestsLoading, error: interestsError } = useUserInterests(userId || '');

  const { mutate: updateUserProfile, isPending: isProfileUpdating } = useUpdateUserProfile();
  const { mutate: updateUserInterests, isPending: isInterestsUpdating } = useUpdateUserInterests();

  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [profileImage, setProfileImage] = useState<string>(defaultProfileImg);
  const [profileImageFile, setProfileImageFile] = useState<File | null>(null);
  const [updateError, setUpdateError] = useState<string | null>(null); // 추가된 상태

  const ALLOWED_TYPES = ['image/jpeg', 'image/png'];
  const ERROR_MESSAGES = {
    INVALID_TYPE: 'jpg 또는 png 파일만 업로드할 수 있습니다.',
  };

  useEffect(() => {
    if (profileData) {
      setName(profileData.nickname || '');
      setBio(profileData.description || '');
      setProfileImage(profileData.profileImageUrl || defaultProfileImg);
    }

    if (interestsData) {
      setSelectedTags(interestsData.map((interest) => interestsMap[interest]));
    }
  }, [profileData, interestsData]);

  const handleTagSelectionChange = (tags: string[]) => {
    setSelectedTags(tags);
  };

  const handleImageChange = (file: File | null) => {
    if (file) {
      if (!ALLOWED_TYPES.includes(file.type)) {
        alert(ERROR_MESSAGES.INVALID_TYPE);
        return;
      }

      setProfileImageFile(file);
      setProfileImage(URL.createObjectURL(file));
    } else {
      setProfileImageFile(null);
      setProfileImage(defaultProfileImg);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name) {
      return alert('닉네임을 입력해주세요.');
    }

    try {
      const mappedTags = selectedTags.map((tag) => tagMap[tag]);

      // 프로필 업데이트를 Promise로 래핑
      const updateProfilePromise = new Promise<void>((resolve, reject) => {
        updateUserProfile(
          { nickname: name, description: bio, profileImageFile },
          {
            onSuccess: () => {
              console.log('프로필 업데이트 성공');
              resolve();
            },
            onError: (error) => {
              console.error('프로필 업데이트 중 오류 발생:', error);

              if (error.message === '400') {
                alert('이미 사용 중인 닉네임입니다.');
                reject(new Error('400'));
                return;
              }

              reject(new Error('프로필 업데이트 중 문제가 발생했습니다.'));
            },
          }
        );
      });

      // 프로필 업데이트 완료 후 관심사 태그 업데이트 실행
      await updateProfilePromise;

      // 관심사 태그 업데이트를 Promise로 래핑
      const updateTagsPromise = new Promise<void>((resolve, reject) => {
        updateUserInterests(mappedTags, {
          onSuccess: () => {
            console.log('관심사 태그 업데이트 성공');
            resolve();
          },
          onError: (error) => {
            console.error('관심사 태그 업데이트 중 오류 발생:', error);
            reject(new Error('관심사 태그 업데이트 중 문제가 발생했습니다.'));
          },
        });
      });

      await updateTagsPromise;

      // 모든 작업이 성공적으로 완료된 경우
      navigate('/mypage');
    } catch (error) {
      if (error instanceof Error) {
        if (error.message === '400') {
          console.log('닉네임 중복으로 인해 요청이 중단되었습니다.');
          return; // 닉네임 중복의 경우 추가 작업 없이 중단
        }

        console.error('catch에서 오류 처리:', error.message);
        setUpdateError(error.message);
      } else {
        console.error('알 수 없는 오류 발생:', error);
        setUpdateError('업데이트 중 문제가 발생했습니다.');
      }
    }
  };


  if (!userId) {
    navigate('/login');
  }

  if (profileError || interestsError || updateError) {
    return (
      <Container>
        <ErrorPage />
      </Container>
    );
  }

  if (profileLoading || interestsLoading) {
    return <LoadingSpinner />;
  }


  return (
    <>
      <Header title="프로필 수정" />
      <Container>
        <ProfileSection>
          <ProfileImageWrapper>
            <ProfileImage
              src={profileImage}
              size={120}
              alt="프로필 이미지"
            />
            <EditButton onClick={() => document.getElementById('profileImageInput')?.click()}>
              <AiFillEdit size={18} />
            </EditButton>
            <input
              id="profileImageInput"
              type="file"
              accept=".jpg,.jpeg,.png"
              style={{ display: 'none' }}
              onChange={(e) => handleImageChange(e.target.files?.[0] || null)}
            />
          </ProfileImageWrapper>
          <Name>{name || '닉네임을 입력해주세요.'}</Name>
        </ProfileSection>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="name">이름</Label>
            <Input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="이름을 입력하세요."
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
              tags={['여행', '스포츠', '패션', '문화', '맛집', '기타']}
              selectedTags={selectedTags}
              onSelectionChange={handleTagSelectionChange}
            />
          </FormGroup>
          <SubmitButton type="submit" disabled={isProfileUpdating || isInterestsUpdating}>
            {isProfileUpdating || isInterestsUpdating ? '수정 중...' : '수정하기'}
          </SubmitButton>
        </Form>
      </Container>
    </>
  );
};

export default ProfileEditPage;
