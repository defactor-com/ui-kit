import React from "react"
import { Story } from "@storybook/react"

import { Button, IButton } from "../components/Button"

export default {
  title: "Button",
  component: Button,
};


const Template: Story<IButton> = (args) => <Button {...args} />;

export const Contained = Template.bind({});
Contained.args = {
  variant: "contained",
  bgColor: '#26A66B',
  label: "Contained",
};

export const Outlined = Template.bind({});
Outlined.args = {
  variant: "outlined",
  label: "Outlined",
};

export const Text = Template.bind({});
Text.args = {
  variant: "text",
  label: "Text",
};

export const IconButton = Template.bind({});
IconButton.args = {
  variant: "contained",
  bgColor: '#26A66B',
  icon: 'https://ui-kit.defactor.dev/static/media/lending-white.f0f9b328.svg',
  label: "Lend",
};