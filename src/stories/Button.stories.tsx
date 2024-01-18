import React from "react";
import { Story } from "@storybook/react";

import { Button, IButton } from "../components/Button";
import lendingIcon from '../../public/assets/lending-white.svg'

export default {
  title: "Button",
  component: Button,
};

const Template: Story<IButton> = (args) => <Button {...args} />;

export const Contained = Template.bind({});
Contained.args = {
  variant: "contained",
  bgColor: "#26A66B",
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
  icon: lendingIcon,
  variant: "contained",
  bgColor: "#26A66B",
  label: "Lend",
};
