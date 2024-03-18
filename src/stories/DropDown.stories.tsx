import React from "react";
import { Story } from "@storybook/react";

import { DropDown, IDropDownObject } from "../components/DropDown";

export default {
  title: "DropDown",
  component: DropDown,
};

const Template: Story<IDropDownObject> = (args) => <DropDown {...args} />;

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

export const dropDownItem = Template.bind({});
dropDownItem.args = {
  placeholder: "Person",
  options: names,
};
