import { Meta, StoryFn } from '@storybook/react';
import LoadingSpinner from './LoadingSpinner';
import theme from '@/styles/theme';

export default {
  title: 'Components/LoadingSpinner',
  component: LoadingSpinner,
  argTypes: {
    size: {
      control: 'number',
      defaultValue: 40,
      description: 'Size of the spinner',
    },
    color: {
      control: 'color',
      defaultValue: theme.colors.primary,
      description: 'Color of the spinner',
    },
  },
} as Meta<typeof LoadingSpinner>;

const Template: StoryFn<typeof LoadingSpinner> = (args) => <LoadingSpinner {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 40,
  color: theme.colors.primary
};
