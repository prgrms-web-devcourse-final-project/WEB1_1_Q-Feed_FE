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
} from './PostGroupPage.styles';

import { createGroup } from '@/pages/QSpace/utils/createGroup';
import { useGroupForm } from '@/pages/QSpace/hooks/usePostGroupForm';

const PostGroupPage = () => {
  const { formData, formActions, formState, toast, navigate } = useGroupForm();
  const { title, description } = formData;
  const { setTitle, setDescription, setImageFile } = formActions;
  const { isPending, setIsPending } = formState;

  const handleCreateGroup = () => {
    createGroup({ formData, setIsPending, toast, navigate });
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
            placeholder="방 제목을 입력해주세요"
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
            placeholder="그룹에 대한 설명을 입력해주세요"
          />
          <CharCount>{description.length}/300</CharCount>
        </InputWrapper>

        <InputWrapper>
          <Label>사진을 등록해주세요</Label>
          <ImageUpload onImageUpload={setImageFile} />
        </InputWrapper>

        <CreateButton
          colorScheme="none"
          bg={theme.colors.primary}
          color="white"
          width="100%"
          height="3.5rem"
          onClick={handleCreateGroup}
          isPending={isPending}
          isDisabled={!title || !description || isPending}
          _disabled={{
            bg: theme.colors.gray[300],
            cursor: 'not-allowed',
          }}
        >
          {isPending ? '생성 중...' : '방 만들기'}
        </CreateButton>
      </Content>
    </Container>
  );
};

export default PostGroupPage;
