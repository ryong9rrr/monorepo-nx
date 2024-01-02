import type { Meta } from "@storybook/react";
import "@package/react-components-layout/style.css";
import "@package/react-components-input/style.css";
import {
  Input,
  InputGroup,
  InputLeftAddon,
} from "@package/react-components-input";

const meta: Meta = {
  title: "React Components/Input",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

export const InputStory = {
  render: () => <Input placeholder="please text!" />,
};

export const InputGroupStory = {
  render: () => (
    <InputGroup size="lg" color="red">
      <InputLeftAddon>$</InputLeftAddon>
      <Input placeholder="dd" />
    </InputGroup>
  ),
};

export const InputVariantFilledStory = {
  render: () => <Input variant="filled" placeholder="dd" />,
};

export const InputFocusVisibleState = {
  render: () => <Input />,
  parameters: {
    pseudo: { focusVisible: true },
  },
};
