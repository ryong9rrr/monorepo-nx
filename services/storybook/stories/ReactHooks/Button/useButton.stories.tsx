import type { Meta } from "@storybook/react";

import { useButton } from "@package/react-hooks-button";

const meta: Meta = {
  title: "React Hooks/useButton",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

export const TextButtonStory = {
  render: () => {
    // eslint-disable-next-line
    const { buttonProps } = useButton({
      elementType: "div",
      onClick: () => {
        window.alert("onClick!");
      },
    });

    return (
      <div
        {...buttonProps}
        style={{
          userSelect: "none",
          cursor: "pointer",
        }}
      >
        Click Me! (spacebar or enter too)
      </div>
    );
  },
};
