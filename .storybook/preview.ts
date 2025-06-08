import type { Preview } from '@storybook/react-vite';

const preview: Preview = {
  parameters: {
    layout: "fullscreen",
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
