import type { Meta, StoryObj } from '@storybook/react';
import { QFeedLoadingSpinner } from './QFeedLoadingSpinner';

const meta: Meta<typeof QFeedLoadingSpinner> = {
  title: 'Components/QFeedLoadingSpinner',
  component: QFeedLoadingSpinner,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'QFEED 서비스 전용 로딩 스피너 컴포넌트입니다. width, height값을 string 형태로 입력받습니다.',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof QFeedLoadingSpinner>;

export const Default: Story = {
  args: {
    children: null,
  },
};
