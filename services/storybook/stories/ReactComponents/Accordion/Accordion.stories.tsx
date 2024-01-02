import type { Meta } from "@storybook/react";
import "@package/react-components-layout/style.css";
import "@package/react-components-accordion/style.css";
import {
  Accordion,
  AccordionItem,
  AccordionPanel,
  AccordionButton,
} from "@package/react-components-accordion";
import { Heading, Text } from "@package/react-components-layout";

const meta: Meta = {
  title: "React Components/Accordion",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

export const AccordionStory = {
  render: () => (
    <Accordion defaultActiveItems={["목록1"]} style={{ width: "500px" }}>
      <AccordionItem itemName="목록1">
        <AccordionButton>
          <Heading color="gray" fontSize="lg">
            목록 1
          </Heading>
        </AccordionButton>
        <AccordionPanel>
          <Text color="gray" fontSize="md">
            내용입니다.
          </Text>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem itemName="목록2">
        <AccordionButton>
          <Heading color="gray" fontSize="lg">
            목록 2
          </Heading>
        </AccordionButton>
        <AccordionPanel>
          <Text color="gray" fontSize="md">
            내용입니다.
            <br />
            내용입니다.
          </Text>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  ),
};
