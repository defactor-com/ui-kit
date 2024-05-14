import React from "react";
import { Story } from "@storybook/react";

import { Pill } from "../components/Pill";
import { IPill } from "../components/Pill/PillTypes";

export default {
  title: "Pill",
  component: Pill,
};

const Template: Story<IPill> = (args) => <Pill {...args} />;

export const PillItem = Template.bind({});
PillItem.args = {
  label: "Pill example",
  customBorder: "3px solid green",
};
