import type { Meta, StoryObj } from "@storybook/react-vite";

import InteractiveFlow from "./index";
import { DefaultButton } from "./DefaultButton";

const meta: Meta<typeof InteractiveFlow> = {
  title: "InteractiveFlow",
  tags: ["autodocs"],
  parameters: {
    layout: "auto",
  },
};

export default meta;

const DummyContent = () => (
  <div style={{ padding: "20px" }}>
    <h2>Flow Item</h2>
    <p>This is a flow item.</p>
  </div>
);

export const RowItem: StoryObj<typeof InteractiveFlow.Context> = {
  args: {
    direction: "row",
  },
  render: ({ direction }) => {
    return (
      <InteractiveFlow.Context direction={direction}>
        <InteractiveFlow.Item
          prevButton={<DefaultButton>+</DefaultButton>}
          nextButton={<DefaultButton>+</DefaultButton>}
        >
          <DummyContent />
        </InteractiveFlow.Item>
      </InteractiveFlow.Context>
    );
  },
};

export const ColumnItem: StoryObj<typeof InteractiveFlow.Context> = {
  args: {
    direction: "column",
  },
  render: ({ direction }) => {
    return (
      <InteractiveFlow.Context direction={direction}>
        <InteractiveFlow.Item
          prevButton={<DefaultButton>+</DefaultButton>}
          nextButton={<DefaultButton>+</DefaultButton>}
        >
          <DummyContent />
        </InteractiveFlow.Item>
      </InteractiveFlow.Context>
    );
  },
};

export const RowSample: StoryObj<typeof InteractiveFlow.Context> = {
  args: {
    direction: "row",
  },
  render: ({ direction }) => {
    return (
      <InteractiveFlow.Context direction={direction}>
        <>
          {[1, 2, 3].map(() => (
            <InteractiveFlow.Item
              prevButton={<DefaultButton>+</DefaultButton>}
              nextButton={<DefaultButton>+</DefaultButton>}
            >
              <DummyContent />
            </InteractiveFlow.Item>
          ))}
        </>
      </InteractiveFlow.Context>
    );
  },
};

export const ColumnSample: StoryObj<typeof InteractiveFlow.Context> = {
  args: {
    direction: "column",
  },
  render: ({ direction }) => {
    return (
      <InteractiveFlow.Context direction={direction}>
        <>
          {[1, 2, 3].map(() => (
            <InteractiveFlow.Item
              prevButton={<DefaultButton>+</DefaultButton>}
              nextButton={<DefaultButton>+</DefaultButton>}
            >
              <DummyContent />
            </InteractiveFlow.Item>
          ))}
        </>
      </InteractiveFlow.Context>
    );
  },
};
