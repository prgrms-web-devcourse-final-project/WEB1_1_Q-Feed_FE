import type { Meta, StoryObj } from '@storybook/react';
import { ProfileSlider } from './ProfileSlider';

const meta: Meta<typeof ProfileSlider> = {
  title: 'Pages/Main/Components/ProfileSlider',
  component: ProfileSlider,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'light',
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: '800px', padding: '20px' }}>
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ProfileSlider>;

export const Default: Story = {};

export const SingleProfile: Story = {
  render: () => {
    const SingleProfileSlider = () => {
      return (
        <ProfileSlider
          initialProfiles={[
            {
              id: 1,
              name: '홍길동',
              imgsrc: '',
              followerName: '철수',
              followerNum: 100,
            },
          ]}
        />
      );
    };
    return <SingleProfileSlider />;
  },
};

export const MultipleProfiles: Story = {
  render: () => {
    const MultipleProfileSlider = () => {
      return (
        <ProfileSlider
          initialProfiles={[
            {
              id: 1,
              name: '홍길동',
              imgsrc: '',
              followerName: '철수',
              followerNum: 100,
            },
            {
              id: 2,
              name: '영희',
              imgsrc: '',
              followerName: '둘리',
              followerNum: 3,
            },
            {
              id: 3,
              name: '순자',
              imgsrc: '',
              followerName: '토마토',
              followerNum: 1,
            },
            {
              id: 4,
              name: '올라프',
              imgsrc: '',
              followerName: '엘사',
              followerNum: 13,
            },
            {
              id: 5,
              name: '산타',
              imgsrc: '',
              followerName: '루돌프',
              followerNum: 1,
            },
          ]}
        />
      );
    };
    return <MultipleProfileSlider />;
  },
};

export const WithLongNames: Story = {
  render: () => {
    const LongNameProfileSlider = () => {
      return (
        <ProfileSlider
          initialProfiles={[
            {
              id: 1,
              name: '매우긴이름을가진사용자입니다',
              imgsrc: '',
              followerName: '매우긴팔로워이름',
              followerNum: 999,
            },
            {
              id: 2,
              name: '이것도긴이름입니다',
              imgsrc: '',
              followerName: '이것도긴팔로워',
              followerNum: 888,
            },
          ]}
        />
      );
    };
    return <LongNameProfileSlider />;
  },
};
