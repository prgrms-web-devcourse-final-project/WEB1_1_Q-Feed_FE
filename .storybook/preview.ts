import type { Preview } from '@storybook/react';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import { ThemeProvider } from '@emotion/react';
import theme from '../src/styles/theme';
import { GlobalStyles } from '../src/styles/GlobalStyles';
import { withRouter } from 'storybook-addon-react-router-v6';

export const decorators = [
  withRouter,
  withThemeFromJSXProvider({
    themes: {
      default: theme,
    },
    defaultTheme: 'default',
    Provider: ThemeProvider,
    GlobalStyles: GlobalStyles,
  }),
];

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  tags: ['autodocs', 'autodocs'],
};

export default preview;
