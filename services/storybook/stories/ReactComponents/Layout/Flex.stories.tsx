import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import "@package/react-components-layout/style.css";
import { Flex as _Flex } from "@package/react-components-layout";
import { padding, background, boxShadow } from "../../../story-utils/args";

const meta: Meta<typeof _Flex> = {
  title: "React Components/Layout/Flex",
  component: _Flex,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    justify: {
      options: [
        "flex-start",
        "flex-end",
        "center",
        "space-between",
        "space-around",
        "space-evenly",
      ],
      control: "select",
    },
    padding,
    background,
    boxShadow,
  },
};

export default meta;

type Story = StoryObj<typeof _Flex>;

export const FlexStory: Story = {
  args: {
    as: "div",
    // @ts-ignore
    padding: "4",
    background: "blackAlpha",
    boxShadow: "base",
    borderRadius: "md",
    justify: "space-between",
    style: {
      width: "300px",
    },
  },
  render: args => (
    <_Flex {...args}>
      <div>Item1</div>
      <div>Item2</div>
    </_Flex>
  ),
};
