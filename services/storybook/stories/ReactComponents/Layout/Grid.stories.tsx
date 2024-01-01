import type { Meta, StoryObj } from "@storybook/react";

import "@package/react-components-layout/style.css";
import { Grid as _Grid, GridItem } from "@package/react-components-layout";
import { padding, background, boxShadow } from "../../../story-utils/args";

const meta: Meta<typeof _Grid> = {
  title: "React Components/Layout/Grid",
  component: _Grid,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
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

type Story = StoryObj<typeof _Grid>;

export const GridStory: Story = {
  args: {
    templateColumns: "repeat(3, 1fr)",
  },
  render: args => (
    <_Grid {...args}>
      <GridItem
        background="blue"
        style={{
          width: "100px",
          height: "100px",
        }}
      >
        Item1
      </GridItem>
      <GridItem
        background="blue"
        style={{
          width: "100px",
          height: "100px",
        }}
      >
        Item2
      </GridItem>
      <GridItem
        background="blue"
        style={{
          width: "100px",
          height: "100px",
        }}
      >
        Item3
      </GridItem>
      <GridItem
        background="blue"
        style={{
          width: "100px",
          height: "100px",
        }}
      >
        Item4
      </GridItem>
    </_Grid>
  ),
};
