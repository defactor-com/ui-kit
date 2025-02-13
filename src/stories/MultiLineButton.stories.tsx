import React from "react";
import { Story } from "@storybook/react";

import { MultiLineButton } from "../components/MultiLineButton";
import { IButton } from "../components/MultiLineButton/ButtonTypes";
import { CircularProgress } from "@mui/material";

export default {
  title: "MultiLineButton",
  component: MultiLineButton,
};

const Template: Story<IButton> = (args) => <MultiLineButton {...args} />;

export const Outlined = Template.bind({});
Outlined.args = {
  variant: "outlined",
  label: "Claim",
  subLabel1: "0.01",
  subLabel2: "FACTR",
};

export const LoadingButton = Template.bind({});
LoadingButton.args = {
  variant: "contained",
  bgColor: "#26A66B",
  label: "Loading...",
  loader: <CircularProgress size={24} color="inherit" />,
  minBtnWidth: '156px' 
};