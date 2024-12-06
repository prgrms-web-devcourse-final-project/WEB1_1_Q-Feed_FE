import { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Answer from './Answer';

const meta: Meta<typeof Answer> = {
  title: 'Components/Answer',
  component: Answer,
  argTypes: {
    isPrivate: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof Answer>;

export const Default: Story = {
  render: (args) => {
    const [answer, setAnswer] = useState('');
    return (
      <Answer
        {...args}
        answer={answer}
        setAnswer={setAnswer}
        onLockToggle={() => alert('Lock toggled!')}
      />
    );
  },
  args: {
    isPrivate: true,
  },
};

export const Public: Story = {
  render: (args) => {
    const [answer, setAnswer] = useState('This is a public answer.');
    return (
      <Answer
        {...args}
        answer={answer}
        setAnswer={setAnswer}
        onLockToggle={() => alert('Lock toggled!')}
      />
    );
  },
  args: {
    isPrivate: false,
  },
};
