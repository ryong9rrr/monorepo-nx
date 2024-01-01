import type { Meta, StoryObj } from "@storybook/react";

import "@package/react-components-layout/style.css";
import { Divider as _Divider, Box } from "@package/react-components-layout";
import { color } from "../../../story-utils/args";

const meta: Meta<typeof _Divider> = {
  title: "React Components/Layout/Divider",
  component: _Divider,
  decorators: [
    Divider => (
      <Box padding={3} style={{ width: "300px", height: "300px" }}>
        <Divider />
      </Box>
    ),
  ],
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    orientation: {
      options: ["horizontal", "vertical"],
      control: "select",
    },
    variant: {
      options: ["solid", "dashed"],
      control: "select",
    },
    color,
  },
};

export default meta;

type Story = StoryObj<typeof _Divider>;

export const DividerStory: Story = {
  args: {
    color: "gray",
    size: 1,
    variant: "solid",
    orientation: "horizontal",
  },
};
