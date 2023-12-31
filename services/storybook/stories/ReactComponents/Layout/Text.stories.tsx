import type { Meta, StoryObj } from "@storybook/react";

import "@package/react-components-layout/style.css";
import { Text as _Text } from "@package/react-components-layout";
import { classes, vars } from "@package/themes";

const meta: Meta<typeof _Text> = {
  title: "React Components/Layout/Typography/Text",
  component: _Text,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    as: {
      options: ["p", "span", "div", "b", "i", "u", "strong", "em"],
      control: "select",
    },
    fontSize: {
      options: Object.keys(classes.typography.text),
      control: "select",
    },
    color: {
      options: Object.keys(vars.colors.$scale),
      control: "select",
    },
  },
};

export default meta;

type Story = StoryObj<typeof _Text>;

export const TextStory: Story = {
  args: {
    as: "p",
    children: "Hello World",
    fontSize: "xl",
    color: "gray",
  },
};
