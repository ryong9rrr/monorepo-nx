import type { Meta } from "@storybook/react";
import "@package/react-components-layout/style.css";
import "@package/react-components-toast/style.css";
import "@package/react-components-button/style.css";
import { useToast, ToastProvider } from "@package/react-components-toast";
import { Button } from "@package/react-components-button";

const meta: Meta = {
  title: "React Components/Toast",
  parameters: {
    layout: "centered",
  },
};

export default meta;

const Example = () => {
  const { toast } = useToast();

  return (
    <Button
      onClick={() =>
        toast({
          payload: {
            message: "Hello, World!",
          },
        })
      }
    >
      Toast Button
    </Button>
  );
};

export const ToastStory = {
  render: () => (
    <ToastProvider>
      <Example />
    </ToastProvider>
  ),
};
