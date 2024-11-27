import { Meta, StoryObj } from '@storybook/react';
import { HobbyTags } from './HobbyTags';

const meta: Meta<typeof HobbyTags> = {
  title: 'Components/ui/HobbyTags',
  component: HobbyTags,
  argTypes: {
    tags: {
      description: 'A list of hobby tags to display.',
    },
  },
};

export default meta;

type Story = StoryObj<typeof HobbyTags>;

export const Default: Story = {
  args: {
    tags: ['맛집', '스포츠', '여행', '문화', '패션/뷰티', '기타'],
  },
};
