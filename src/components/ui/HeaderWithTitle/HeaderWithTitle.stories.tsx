// Header.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { HeaderWithTitle } from './HeaderWithTitle';
import { MemoryRouter } from 'react-router-dom';

const meta: Meta<typeof HeaderWithTitle> = {
  title: 'components/ui/HeaderWithTitle',
  component: HeaderWithTitle,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '뒤로가기 버튼과 제목을 포함한 헤더 컴포넌트입니다.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof HeaderWithTitle>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: '기본적인 헤더의 모습입니다. 뒤로가기 버튼과 "회원가입" 제목을 포함합니다.',
      },
    },
  },
};
