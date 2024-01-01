import type { Meta, StoryObj } from "@storybook/react";

import "@package/react-components-layout/style.css";
import { Text as _Text } from "@package/react-components-layout";
import { color, fontSizeText } from "../../../story-utils/args";

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
    fontSize: fontSizeText,
    color,
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
