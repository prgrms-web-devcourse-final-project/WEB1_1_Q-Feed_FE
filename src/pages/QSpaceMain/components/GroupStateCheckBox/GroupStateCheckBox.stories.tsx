import type { Meta, StoryObj } from '@storybook/react';
import { ChakraProvider } from '@chakra-ui/react';
import GroupStateCheckBox from '@/pages/QSpaceMain/components/GroupStateCheckBox/GroupStateCheckBox';

const meta = {
  title: 'Components/QSpaceMain/GroupStateCheckBox',
  component: GroupStateCheckBox,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <ChakraProvider>
        <Story />
      </ChakraProvider>
    ),
  ],
  tags: ['autodocs'],
  argTypes: {
    initialChecked: {
      control: 'boolean',
      description: '체크박스의 초기 상태를 설정합니다',
    },
    onChange: {
      action: 'changed',
      description: '체크박스 상태가 변경될 때 호출되는 함수입니다',
    },
  },
} satisfies Meta<typeof GroupStateCheckBox>;

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 상태
export const Default: Story = {
  args: {
    initialChecked: false,
  },
};

// 체크된 상태
export const Checked: Story = {
  args: {
    initialChecked: true,
  },
};
