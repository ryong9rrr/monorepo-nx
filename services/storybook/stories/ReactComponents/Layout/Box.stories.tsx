import "@package/react-components-layout/style.css";
import type { Meta, StoryObj } from "@storybook/react";
import { Box as _Box } from "@package/react-components-layout";

const meta: Meta<typeof _Box> = {
  title: "React Components/Layout/Box",
  component: _Box,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof _Box>;

export const BoxStory: Story = {
  args: {
    as: "button",
    padding: 5,
    background: "blue",
    boxShadow: "xl",
    borderRadius: "md",
  },
};
