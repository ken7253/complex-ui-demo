import type { Meta, StoryObj } from "@storybook/react-vite";
import { InteractiveFlow } from "./index.tsx";

type Story = StoryObj<typeof InteractiveFlow>;

const meta: Meta<typeof InteractiveFlow> = {
  title: "InteractiveFlow",
  component: InteractiveFlow,
  tags: ["autodocs"],
};

export default meta;

export const Default: Story = {
  args: {},
};
