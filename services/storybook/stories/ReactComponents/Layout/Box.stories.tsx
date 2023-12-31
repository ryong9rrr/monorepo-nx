import type { Meta, StoryObj } from "@storybook/react";

import "@package/react-components-layout/style.css";
import { Box as _Box } from "@package/react-components-layout";
import { vars } from "@package/themes";

const meta: Meta<typeof _Box> = {
  title: "React Components/Layout/Box",
  component: _Box,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    as: {
      options: ["div", "span", "button"],
      control: "select",
    },
    padding: {
      options: Object.keys(vars.box.spacing),
      control: "select",
    },
    background: {
      options: Object.keys(vars.colors.$scale),
      control: "select",
    },
    boxShadow: {
      options: Object.keys(vars.box.shadows),
      control: "select",
    },
    borderRadius: {
      options: Object.keys(vars.box.radii),
      control: "select",
    },
  },
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
