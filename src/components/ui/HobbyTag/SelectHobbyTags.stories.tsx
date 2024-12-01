import SelectableHobbyTags from '@/components/ui/HobbyTag/SelectableHobbyTags';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof SelectableHobbyTags> = {
  title: 'Components/ui/SelectableHobbyTags',
  component: SelectableHobbyTags,
  argTypes: {
    onSelectionChange: { action: 'selectionChanged' },
  },
};

export default meta;

type Story = StoryObj<typeof SelectableHobbyTags>;

export const Default: Story = {
  args: {
    tags: ['맛집', '스포츠', '여행', '문화', '패션/뷰티', '기타'],
  },
};
