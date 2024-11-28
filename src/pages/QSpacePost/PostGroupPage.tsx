import { useState } from 'react';
import styled from '@emotion/styled';
import { Input, Button, Textarea } from '@chakra-ui/react';
import theme from '@/styles/theme';
import BackButton from '@/components/ui/BackButton/BackButton';
import { ImageUpload } from '@/components/ui/ImageUpload/ImageUpload';

const PostGroupPage = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageFile, setImageFile] = useState<File | null>(null);

  const handleCreateGroup = () => {
    console.log('Create group:', { title, description, imageFile });
  };

  const handleImageUpload = (file: File) => {
    setImageFile(file);
  };

  return (
    <Container>
      <Header>
        <BackButton />
      </Header>

      <Content>
        <InputWrapper>
          <Label>방 제목을 정해주세요</Label>
          <Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            height={14}
            border='none'
            borderRadius={12}
            maxLength={24}
            bg='white'
          />
          <CharCount>{title.length}/24</CharCount>
        </InputWrapper>

        <InputWrapper>
          <Label>간단한 설명을 적어주세요</Label>
          <Textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            maxLength={300}
            height='10rem'
            border='none'
            borderRadius={12}
            bg='white'
            resize='none'
          />
          <CharCount>{description.length}/300</CharCount>
        </InputWrapper>

        <InputWrapper>
          <Label>사진을 등록해주세요</Label>
          <ImageUpload onImageUpload={handleImageUpload} />
        </InputWrapper>

        <ButtonWrapper>
          <CreateButton
            colorScheme='none'
            bg={theme.colors.primary}
            color='white'
            width='100%'
            height='3.5rem'
            onClick={handleCreateGroup}
          >
            방 만들기
          </CreateButton>
        </ButtonWrapper>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  background-color: ${theme.colors.background};
  min-height: calc(100vh - 5rem); // Footer 높이 5rem 제외
  padding-bottom: 5rem; // Footer 높이만큼 padding
`;

const Header = styled.header`
  padding: 1rem;
  display: flex;
  align-items: center;
`;

const Content = styled.main`
  padding: 0 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin-top: 2rem;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  position: relative;
`;

const Label = styled.label`
  color: ${theme.colors.black};
  font-size: ${theme.typography.body1.size};
  font-weight: ${theme.typography.weights.medium};
`;

const CharCount = styled.span`
  position: absolute;
  right: 0.5rem;
  bottom: -1.5rem;
  font-size: ${theme.typography.body3.size};
  color: ${theme.colors.gray[400]};
`;

const ButtonWrapper = styled.div`
  position: fixed;
  bottom: 5rem; // Footer 높이만큼 띄우기
  left: 1rem;
  right: 1rem;
  padding: 1rem 0;
  background-color: ${theme.colors.background};
`;

const CreateButton = styled(Button)`
  width: 100%;
  margin-bottom: 1rem;
  border-radius: 1rem;
`;

export default PostGroupPage;
