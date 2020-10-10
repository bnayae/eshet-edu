// .storybook/preview.js
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '../packages/@shell/themes/default-theme';

const withThemeProvider = (Story, context) => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Story {...context} />
    </ThemeProvider>
  );
};
export const decorators = [withThemeProvider];
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  layout: 'centered',
};
