import type { Meta, StoryObj } from "@storybook/react";

import "@package/react-components-layout/style.css";
import { Heading as _Heading } from "@package/react-components-layout";
import { classes, vars } from "@package/themes";

const meta: Meta<typeof _Heading> = {
  title: "React Components/Layout/Typography/Heading",
  component: _Heading,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    as: {
      options: ["h1", "h2", "h3", "h4", "h5", "h6"],
      control: "select",
    },
    fontSize: {
      options: Object.keys(classes.typography.heading),
      control: "select",
    },
    color: {
      options: Object.keys(vars.colors.$scale),
      control: "select",
    },
  },
};

export default meta;

type Story = StoryObj<typeof _Heading>;

export const HeadingStory: Story = {
  args: {
    as: "h1",
    children: "Hello World",
    fontSize: "4xl",
    color: "gray",
  },
};
