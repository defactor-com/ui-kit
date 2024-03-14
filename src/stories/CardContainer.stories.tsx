import React from "react";
import { Story } from "@storybook/react";

import { CardContainer, ICardContainer } from "../components/CardContainer";

export default {
  title: "Card Container",
  component: CardContainer,
};

const Template: Story<ICardContainer> = (args) => <CardContainer {...args} />;

export const CardContainerItem = Template.bind({});
CardContainerItem.args = {
  content: <span>Card Container example</span>,
};
