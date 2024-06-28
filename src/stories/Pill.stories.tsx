import React from "react";
import { Story } from "@storybook/react";

import { Pill } from "../components/Pill";
import { IPill } from "../components/Pill/PillTypes";

const additionalStyles: React.CSSProperties = {
  boxShadow: "0px 1px 3px 1px #00000026, 0px 1px 2px 0px #0000004d",
};

export default {
  title: "Pill",
  component: Pill,
};

const Template: Story<IPill> = (args) => <Pill {...args} />;

export const PillItem = Template.bind({});
PillItem.args = {
  label: "Pill example",
  customBorder: "3px solid green",
  optionalStyles: additionalStyles,
};
