import { Meta, StoryObj } from '@storybook/react';
import { SelectableHobbyTags } from './SelectableHobbyTags';

const meta: Meta<typeof SelectableHobbyTags> = {
  title: 'Components/SelectableHobbyTags',
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
