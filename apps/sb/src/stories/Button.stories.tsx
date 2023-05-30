import { Meta, StoryObj } from "@storybook/react";

import { Button } from "ui";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const buttonMeta: Meta<typeof Button> = {
  title: "Atoms/Button",
  component: Button,
  parameters: {
    layout: "padded",
    design: {
      type: "figma",
      url: "https://www.figma.com/file/991v0a2HbBRFp0ALon4R9Z/%F0%9F%A9%BA-GPNotebook-Design-System---Final?node-id=217%3A54208&t=X0bHJRUfiFw6XYgV-1",
    },
  },
  argTypes: {
    label: {
      control: {
        type: "text",
      },
    },
  },
  args: {
    label: "Default",
  },
};

export default buttonMeta;

export const Base: StoryObj<typeof Button> = {
  render: (args) => <Button {...args} />,
};
