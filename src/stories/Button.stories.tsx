import React from "react";
import { Story } from "@storybook/react";

import { Button } from "../components/Button";
import { IButton } from "../components/Button/ButtonTypes";
import lendingIcon from "../../public/assets/lending-white.svg";
import { CircularProgress } from "@mui/material";

const additionalStyles: React.CSSProperties = {
  border: "4px solid #7cd7ad",
};

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
  variant: "contained",
  bgColor: "#26A66B",
  icon: lendingIcon,
  label: "Lend",
};

export const LoadingButton = Template.bind({});
LoadingButton.args = {
  variant: "contained",
  bgColor: "#26A66B",
  label: "Loading...",
  loader: <CircularProgress size={24} color="inherit" />,
  minBtnWidth: '156px' 
};