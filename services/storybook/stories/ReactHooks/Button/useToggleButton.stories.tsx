import type { Meta } from "@storybook/react";

import { useToggleButton } from "@package/react-hooks-button";
import { Button as _Button } from "@package/react-components-button";

const meta: Meta = {
  title: "React Hooks/useToggleButton",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

export const ToggleButtonStory = {
  render: () => {
    // eslint-disable-next-line
    const { buttonProps, isSelected } = useToggleButton(
      { elementType: "button" },
      false,
    );

    return (
      <_Button
        {...buttonProps}
        variant={isSelected ? "solid" : "outline"}
        color="green"
      >
        {isSelected ? "😀" : "😂"}
      </_Button>
    );
  },
};
