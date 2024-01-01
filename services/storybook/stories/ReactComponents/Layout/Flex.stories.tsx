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
    align: {
      options: ["flex-start", "flex-end", "center"],
      control: "select",
    },
    direction: {
      options: ["row", "row-reverse", "column", "column-reverse"],
      control: "select",
    },
    wrap: {
      options: ["nowrap", "wrap", "wrap-reverse"],
      control: "select",
    },
    gap: {
      control: {
        type: "number",
        min: 0,
        max: 30,
      },
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
    justify: "center",
    wrap: "no-wrap",
    gap: 10,
    style: {
      width: "300px",
    },
  },
  render: args => (
    <_Flex {...args}>
      <div>Item1</div>
      <div>Item2</div>
      <div>Item3</div>
    </_Flex>
  ),
};
