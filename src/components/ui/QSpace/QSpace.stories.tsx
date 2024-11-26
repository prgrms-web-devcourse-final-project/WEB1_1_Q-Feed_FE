import { Meta, StoryObj } from '@storybook/react';
import { QSpace } from './QSpace';

const meta: Meta<typeof QSpace> = {
  title: 'Components/QSpace',
  component: QSpace,
  argTypes: {
    imageUrl: {
      control: 'text',
      description: 'The URL of the image to display.',
    },
    title: {
      control: 'text',
      description: 'The title of the QSpace card.',
    },
    description: {
      control: 'text',
      description: 'The description of the QSpace card.',
    },
    memberCount: {
      control: 'number',
      description: 'The number of members in the space.',
    },
    isRecruiting: {
      control: 'boolean',
      description: 'Indicates whether the space is recruiting members.',
    },
  },
};

export default meta;

type Story = StoryObj<typeof QSpace>;

export const Recruiting: Story = {
  args: {
    imageUrl: 'https://via.placeholder.com/100',
    title: '제주도 맛집 토론방',
    description: '제주도의 숨은 맛집 얘기해요!',
    memberCount: 133,
    isRecruiting: true,
    lastUpdated: '6시간 전',
  },
};

export const NotRecruiting: Story = {
  args: {
    imageUrl: 'https://via.placeholder.com/100',
    title: '서울 카페 투어',
    description: '서울의 멋진 카페를 공유해요! ',
    memberCount: 45,
    isRecruiting: false,
    lastUpdated: '6시간 전',
  },
};

export const LongText: Story = {
  args: {
    imageUrl: 'https://via.placeholder.com/100',
    title: '사진이 있는 공간',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quae, nesciunt suscipit perferendis necessitatibus odit maiores corporis minus! Maiores neque, voluptate ipsum quasi saepe optio voluptas consequuntur veritatis molestias quis!',
    memberCount: 200,
    isRecruiting: true,
    lastUpdated: '6시간 전',
  },
};
