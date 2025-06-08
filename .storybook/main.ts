import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ['../demo/**/*.stories.tsx'],
  framework: '@storybook/react-vite',
};

export default config;
