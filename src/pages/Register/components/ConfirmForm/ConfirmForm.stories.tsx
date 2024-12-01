import type { Meta, StoryObj } from '@storybook/react';
import { ConfirmForm } from './ConfirmForm';
import { useForm } from 'react-hook-form';
import { FormValues } from '@/pages/Register/type/formType';

const meta: Meta<typeof ConfirmForm> = {
  title: 'Pages/Register/components/ConfirmForm',
  component: ConfirmForm,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '인증번호 입력 및 확인을 위한 폼 컴포넌트입니다.',
      },
    },
  },
  decorators: [
    (Story) => {
      const {
        register,
        formState: { errors },
      } = useForm<FormValues>();
      return <Story args={{ register, errors }} />;
    },
  ],
};

export default meta;
type Story = StoryObj<typeof ConfirmForm>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: '기본적인 인증번호 입력 폼입니다.',
      },
    },
  },
};

export const WithValue: Story = {
  decorators: [
    (Story) => {
      const {
        register,
        formState: { errors },
      } = useForm<FormValues>({
        defaultValues: {
          verificationCode: '123456',
        },
      });
      return <Story args={{ register, errors }} />;
    },
  ],
  parameters: {
    docs: {
      description: {
        story: '인증번호가 입력된 상태의 폼입니다.',
      },
    },
  },
};
