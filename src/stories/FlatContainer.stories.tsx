import React from "react";
import { Story } from "@storybook/react";

import { FlatContainer, IFlatContainer } from "../components/FlatContainer";

export default {
  title: "Flat Container",
  component: FlatContainer,
};

const Template: Story<IFlatContainer> = (args) => <FlatContainer {...args} />;

export const FlatContainerItem = Template.bind({});
FlatContainerItem.args = {
  content: <span>Flat Container example</span>,
};
