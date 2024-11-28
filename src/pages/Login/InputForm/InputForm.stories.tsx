// InputForm.stories.tsx
import type { Meta } from '@storybook/react';
import { InputForm } from './InputForm';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '@/styles/theme';
import { useState } from 'react';

const meta = {
  title: 'Pages/Login/InputForm',
  component: InputForm,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '로그인 페이지에서 사용되는 입력 폼 컴포넌트입니다. 이메일과 비밀번호 입력에 사용됩니다.',
      },
    },
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <ChakraProvider theme={theme}>
        <div style={{ width: '400px', padding: '20px' }}>
          <Story />
        </div>
      </ChakraProvider>
    ),
  ],
} satisfies Meta<typeof InputForm>;

export default meta;

// 각 스토리를 컴포넌트로 정의
export const EmailInput = () => {
  const [value, setValue] = useState('');
  return (
    <InputForm
      title="이메일"
      placeholder="이메일을 입력해주세요"
      value={value}
      type="text"
      isInvalid={false}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};
EmailInput.parameters = {
  docs: {
    description: {
      story: '기본적인 이메일 입력 폼입니다. 이메일 주소를 입력받습니다.',
    },
  },
};

export const PasswordInput = () => {
  const [value, setValue] = useState('');
  return (
    <InputForm
      title="비밀번호"
      placeholder="비밀번호를 입력해주세요"
      value={value}
      type="password"
      isInvalid={false}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};
PasswordInput.parameters = {
  docs: {
    description: {
      story: '비밀번호 입력 폼입니다. 입력된 텍스트가 마스킹 처리됩니다.',
    },
  },
};

export const InvalidEmailInput = () => {
  const [value, setValue] = useState('');
  return (
    <InputForm
      title="이메일"
      placeholder="이메일을 입력해주세요"
      value={value}
      type="text"
      isInvalid={true}
      errorMessage="올바른 이메일 형식이 아닙니다"
      onChange={(e) => setValue(e.target.value)}
    />
  );
};
InvalidEmailInput.parameters = {
  docs: {
    description: {
      story:
        '유효하지 않은 이메일이 입력되었을 때의 상태입니다. 에러 메시지가 표시되고 테두리가 빨간색으로 변경됩니다.',
    },
  },
};

export const InvalidPasswordInput = () => {
  const [value, setValue] = useState('');
  return (
    <InputForm
      title="비밀번호"
      placeholder="비밀번호를 입력해주세요"
      value={value}
      type="password"
      isInvalid={true}
      errorMessage="비밀번호는 8자 이상이어야 합니다"
      onChange={(e) => setValue(e.target.value)}
    />
  );
};
InvalidPasswordInput.parameters = {
  docs: {
    description: {
      story:
        '유효하지 않은 비밀번호가 입력되었을 때의 상태입니다. 비밀번호 길이가 8자 미만일 경우 에러 메시지가 표시됩니다.',
    },
  },
};
