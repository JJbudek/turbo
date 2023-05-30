import { Meta, StoryObj } from "@storybook/react";

import { Header } from "ui";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const buttonMeta: Meta<typeof Header> = {
  title: "Molecules/Header",
  component: Header,
  parameters: {
    layout: "padded",
    design: {
      type: "figma",
      url: "https://www.figma.com/file/991v0a2HbBRFp0ALon4R9Z/%F0%9F%A9%BA-GPNotebook-Design-System---Final?node-id=217%3A54208&t=X0bHJRUfiFw6XYgV-1",
    },
  },
  argTypes: {
    title: {
      control: {
        type: "text",
      },
    },
  },
  args: {
    title: "Hello world",
  },
};

export default buttonMeta;

export const Base: StoryObj<typeof Header> = {
  render: (args) => <Header {...args} />,
};
