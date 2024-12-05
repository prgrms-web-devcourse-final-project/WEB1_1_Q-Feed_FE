import { useState } from 'react';
import { Input, Textarea } from '@chakra-ui/react';
import theme from '@/styles/theme';
import BackButton from '@/components/ui/BackButton/BackButton';
import { ImageUpload } from '@/components/ui/ImageUpload/ImageUpload';
import {
  CharCount,
  Container,
  Content,
  CreateButton,
  Header,
  InputWrapper,
  Label,
} from '@/pages/QSpace/QSpacePost/PostGroupPage.styles';
import { useNavigate } from 'react-router';

const PostGroupPage = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const navigate = useNavigate();

  const handleCreateGroup = () => {
    navigate('/qspace');
  };

  const handleImageUpload = (file: File | null) => {
    console.log('Uploading image:', imageFile);
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
            border="none"
            borderRadius={12}
            maxLength={24}
            bg="white"
          />
          <CharCount>{title.length}/24</CharCount>
        </InputWrapper>

        <InputWrapper>
          <Label>간단한 설명을 적어주세요</Label>
          <Textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            maxLength={300}
            height="10rem"
            border="none"
            borderRadius={12}
            bg="white"
            resize="none"
          />
          <CharCount>{description.length}/300</CharCount>
        </InputWrapper>

        <InputWrapper>
          <Label>사진을 등록해주세요</Label>
          <ImageUpload onImageUpload={handleImageUpload} />
        </InputWrapper>

        <CreateButton
          colorScheme="none"
          bg={theme.colors.primary}
          color="white"
          width="100%"
          height="3.5rem"
          onClick={handleCreateGroup}
        >
          방 만들기
        </CreateButton>
      </Content>
    </Container>
  );
};

export default PostGroupPage;
