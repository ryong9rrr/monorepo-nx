import type { Meta } from "@storybook/react";
import "@package/react-components-layout/style.css";
import { Select } from "@package/react-components-select";

const meta: Meta = {
  title: "React Components/Select",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

export const SelectStory = {
  render: () => (
    <Select>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
    </Select>
  ),
};
