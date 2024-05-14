import React from "react";
import { Story } from "@storybook/react";

import { FlatContainer } from "../components/FlatContainer";
import { IFlatContainer } from "../components/FlatContainer/FlatContainerTypes";

export default {
  title: "Flat Container",
  component: FlatContainer,
};

const Template: Story<IFlatContainer> = (args) => <FlatContainer {...args} />;

export const FlatContainerItem = Template.bind({});
FlatContainerItem.args = {
  content: <span>Flat Container example</span>,
};
