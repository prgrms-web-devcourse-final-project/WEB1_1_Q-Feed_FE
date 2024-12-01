import type { Meta, StoryObj } from '@storybook/react';
import { LoginForm } from './LoginForm';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '@/styles/theme';
import { action } from '@storybook/addon-actions';

const meta = {
  title: 'Pages/Login/LoginForm',
  component: LoginForm,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '로그인 폼 컴포넌트입니다. 이메일과 비밀번호 입력, 유효성 검사 기능을 포함합니다.',
      },
    },
  },
  argTypes: {
    onSubmit: {
      description:
        '로그인 폼 제출 시 호출되는 콜백 함수입니다. 이메일과 비밀번호 데이터를 파라미터로 전달받습니다.',
    },
  },
  decorators: [
    (Story) => (
      <ChakraProvider theme={theme}>
        <Story />
      </ChakraProvider>
    ),
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockSubmit = action('onSubmit');

export const Default: Story = {
  args: {
    onSubmit: mockSubmit,
  },
};
