import { Input, Textarea } from '@chakra-ui/react';

import theme from '@/styles/theme';
import BackButton from '@/components/ui/BackButton/BackButton';
import { ImageUpload } from '@/components/ui/ImageUpload/ImageUpload';

import { GroupDetail } from '@/pages/QSpace/types/group';
import { useGroupForm } from '@/pages/QSpace/hooks/useGroupForm';
import { usePostGroup } from '@/pages/QSpace/hooks/Mutation/usePostGroup';
import { useUpdateGroup } from '@/pages/QSpace/hooks/Mutation/useUpdateGroup';

import {
  CharCount,
  Container,
  Content,
  CreateButton,
  Header,
  InputWrapper,
  Label,
} from './PostGroupPage.styles';

interface PostGroupPageProps {
  mode: 'create' | 'edit';
  initialData?: GroupDetail;
}

const PostGroupPage = ({ mode = 'create', initialData }: PostGroupPageProps) => {
  const { formData, formActions } = useGroupForm();
  const postGroupMutation = usePostGroup();
  const updateGroupMutation = useUpdateGroup(initialData?.groupId || 0);

  const { title, description } = formData;
  const { setTitle, setDescription, setImageFile } = formActions;

  const handlePostGroup = () => {
    const form = new FormData();
    console.log('imageFile:', formData.imageFile);

    form.append('groupName', title);
    form.append('description', description);
    form.append('categoryId', formData.categoryId.toString());
    form.append('isOpen', 'true');

    if (formData.imageFile) {
      form.append('file', formData.imageFile);
    }

    if (mode === 'edit' && initialData?.groupId) {
      updateGroupMutation.mutate(form);
    } else {
      postGroupMutation.mutate(form);
    }
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
          onClick={handlePostGroup}
          isPending={mode === 'edit' ? updateGroupMutation.isPending : postGroupMutation.isPending}
          isDisabled={
            !formData.title ||
            !formData.description ||
            (mode === 'edit' ? updateGroupMutation.isPending : postGroupMutation.isPending)
          }
          _disabled={{
            bg: theme.colors.gray[300],
            cursor: 'not-allowed',
          }}
        >
          {mode === 'edit' ? '수정하기' : '방 만들기'}
        </CreateButton>
      </Content>
    </Container>
  );
};

export default PostGroupPage;
