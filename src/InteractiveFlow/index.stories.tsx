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

const DummyContent = ({ ident }: { ident?: string } = {}) => (
  <div style={{ padding: "20px" }}>
    <h2>Flow Item</h2>
    <small>{ident}</small>
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

import { useState } from "react";

export const ColumnSample: StoryObj<typeof InteractiveFlow.Context> = {
  args: {
    direction: "row",
  },
  render: ({ direction }) => {
    const [item, setItem] = useState<string[]>(["foo", "foo"]);

    const handleInsert = (type: "prev" | "next", index: number) => {
      const insertIndex = type === "prev" ? index : index + 1;
      setItem((prev) => [...prev.slice(0, insertIndex), "new", ...prev.slice(insertIndex)]);
    };

    return (
      <div style={{ height: "100vh" }}>
        <InteractiveFlow.Context direction={direction}>
          <>
            {item.map((data, index) => (
              <InteractiveFlow.Item
                key={index}
                onInsert={(type) => handleInsert(type, index)}
                prevButton={<DefaultButton data-debug="prev">+</DefaultButton>}
                nextButton={<DefaultButton data-debug="next">+</DefaultButton>}
              >
                <DummyContent ident={`${data}:${index}`} />
              </InteractiveFlow.Item>
            ))}
          </>
        </InteractiveFlow.Context>
      </div>
    );
  },
};
