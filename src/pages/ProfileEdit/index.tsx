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
import defaultProfileImg from '@/assets/images/profile.svg';
import { tagMap } from '@/pages/ProfileEdit/utils/tagMap';
import { interestsMap } from '@/pages/MyPage/utils/interestsMap';
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
  const userId = '18312fd3-a56f-4b91-80d2-dab72c584857';

  const { data: profileData, isLoading: profileLoading, error: profileError } = useUserProfile(userId);
  const { data: interestsData, isLoading: interestsLoading, error: interestsError } = useUserInterests(userId);

  const { mutate: updateUserProfile, isPending: isProfileUpdating } = useUpdateUserProfile();
  const { mutate: updateUserInterests, isPending: isInterestsUpdating } = useUpdateUserInterests();

  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [profileImage, setProfileImage] = useState<string>(defaultProfileImg); // 기본 이미지를 초기값으로 설정
  const [profileImageFile, setProfileImageFile] = useState<File | null>(null);

  // 초기값 설정
  useEffect(() => {
    if (profileData) {
      setName(profileData.nickname || ''); // 닉네임 설정
      setBio(profileData.description || ''); // 소개 설정

      console.log(profileData.profileImageUrl)
      // 프로필 이미지가 없으면 기본 이미지 설정
      if (profileData.profileImageUrl) {
        setProfileImage(profileData.profileImageUrl); // 서버에서 받은 이미지 설정
      } else {
        setProfileImage(defaultProfileImg); // 기본 이미지 설정
      }
    }

    if (interestsData) {
      setSelectedTags(interestsData.map(interest => interestsMap[interest])); // 관심사 태그 설정
    }
  }, [profileData, interestsData]);

  const handleTagSelectionChange = (tags: string[]) => {
    setSelectedTags(tags);
  };

  const handleImageChange = (file: File | null) => {
    setProfileImageFile(file);

    if (file) {
      setProfileImage(URL.createObjectURL(file)); // 미리보기 이미지 URL 생성
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name) {
      return alert('닉네임을 입력해주세요.');
    }

    try {
      const mappedTags = selectedTags.map((tag) => tagMap[tag]);

      // 태그 업데이트 요청
      await updateUserInterests(mappedTags, {
        onSuccess: () => {
          console.log('관심사 태그 업데이트 성공');
        },
        onError: (error) => {
          console.error('관심사 태그 업데이트 중 오류 발생:', error);
          throw new Error('관심사 태그 업데이트 중 문제가 발생했습니다.');
        },
      });

      // 프로필 업데이트 요청
      await updateUserProfile(
        {
          nickname: name,
          description: bio,
          profileImageFile,
        },
        {
          onSuccess: (data) => {
            console.log('프로필 업데이트 성공:', data.message);
            navigate('/mypage');
          },
          onError: (error) => {
            alert(error);
            console.error('프로필 업데이트 중 오류 발생:', error);
            throw new Error('프로필 업데이트 중 문제가 발생했습니다.');
          },
        }
      );
    } catch (error) {
      console.error(error);
      alert('업데이트 중 문제가 발생했습니다.');
    }
  };

  if (profileLoading || interestsLoading) {
    return <LoadingSpinner />;
  }

  if (profileError || interestsError) {
    return <p>프로필 정보를 불러오는 중 문제가 발생했습니다.</p>;
  }

  return (
    <>
      <Header title="프로필 수정" />
      <Container>
        <ProfileSection>
          <ProfileImageWrapper>
            <ProfileImage
              src={profileImage} // 프로필 이미지 URL 또는 기본 이미지
              size={120}
              alt="프로필 이미지"
            />
            <EditButton onClick={() => document.getElementById('profileImageInput')?.click()}>
              <AiFillEdit size={18} />
            </EditButton>
            <input
              id="profileImageInput"
              type="file"
              accept="image/*"
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
