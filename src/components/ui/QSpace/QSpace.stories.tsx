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
    lastUpdated: {
      control: 'text',
      description: 'The last updated time of the space.',
    },
    onClick: {
      action: 'clicked', // 클릭 액션을 Storybook에서 확인
      description: 'Function to execute when the QSpace is clicked.',
    },
  },
};

export default meta;

type Story = StoryObj<typeof QSpace>;

export const Default: Story = {
  args: {
    imageUrl: 'https://via.placeholder.com/150',
    title: '제주도 맛집 토론방',
    description: '제주도의 숨은 맛집 얘기해요!',
    memberCount: 133,
    isRecruiting: true,
    lastUpdated: '방금 전',
    onClick: undefined, // 클릭 액션은 Storybook에서 제공됨
  },
};

export const NotRecruiting: Story = {
  args: {
    imageUrl: 'https://via.placeholder.com/150',
    title: '서울 카페 투어',
    description: '서울의 멋진 카페를 공유해요!',
    memberCount: 45,
    isRecruiting: false,
    lastUpdated: '1일 전',
    onClick: undefined,
  },
};

export const WithLongDescription: Story = {
  args: {
    imageUrl: 'https://via.placeholder.com/150',
    title: '긴 설명을 가진 QSpace',
    description:
      '이 QSpace는 매우 긴 설명을 가지고 있습니다. 멤버들이 함께 대화하고 즐길 수 있는 특별한 공간입니다. 많은 사람들과 정보를 공유하며, 새로운 발견과 소통의 기회를 제공합니다.',
    memberCount: 200,
    isRecruiting: true,
    lastUpdated: '3시간 전',
    onClick: undefined,
  },
};
