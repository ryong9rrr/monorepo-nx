import type { Meta, StoryObj } from "@storybook/react";

import "@package/react-components-layout/style.css";
import "@package/react-components-button/style.css";
import { Button as _Button } from "@package/react-components-button";
import { color } from "../../../story-utils/args";

const meta: Meta<typeof _Button> = {
  title: "React Components/Button",
  component: _Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      options: ["xs", "sm", "md", "lg"],
      control: "select",
    },
    color,
    variant: {
      options: ["solid", "outline", "ghost"],
      control: "select",
    },
  },
};

export default meta;

type Story = StoryObj<typeof _Button>;

export const ButtonStory: Story = {
  args: {
    size: "lg",
    children: "Button",
    variant: "outline",
    isDisabled: false,
    isLoading: false,
    leftIcon: "😀",
  },
};
