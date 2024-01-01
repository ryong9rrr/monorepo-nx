import type { Meta, StoryObj } from "@storybook/react";

import "@package/react-components-layout/style.css";
import { Box as _Box } from "@package/react-components-layout";
import {
  as,
  background,
  borderRadius,
  boxShadow,
  padding,
} from "../../../story-utils/args";

const meta: Meta<typeof _Box> = {
  title: "React Components/Layout/Box",
  component: _Box,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    as,
    padding,
    background,
    boxShadow,
    borderRadius,
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
