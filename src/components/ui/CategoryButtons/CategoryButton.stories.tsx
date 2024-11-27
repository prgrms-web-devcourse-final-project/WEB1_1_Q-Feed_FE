import CategoryButton from '@/components/ui/CategoryButtons/CategoryButton';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/QSpaceMain/CategoryButton',
  component: CategoryButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: '태그에 표시될 텍스트입니다',
    },
    initialSelected: {
      control: 'boolean',
      description: '태그의 초기 선택 상태를 설정합니다',
    },
    onChange: {
      action: 'changed',
      description: '선택 상태가 변경될 때 호출되는 함수입니다',
    },
  },
} satisfies Meta<typeof CategoryButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: '맛집',
    initialSelected: false,
  },
};

export const InitiallySelected: Story = {
  args: {
    label: '맛집',
    initialSelected: true,
  },
};
