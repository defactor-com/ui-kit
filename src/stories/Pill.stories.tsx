import React from "react";
import { Story } from "@storybook/react";

import { Pill, IPill } from "../components/Pill";

export default {
  title: "Pill",
  component: Pill,
};

const Template: Story<IPill> = (args) => <Pill {...args} />;

export const PillItem = Template.bind({});
PillItem.args = {
  label: "Pill example",
};
