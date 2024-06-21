import React from "react";
import { Story } from "@storybook/react";

import { CardContainer } from "../components/CardContainer";
import { ICardContainer } from "../components/CardContainer/CardContainerTypes";

const additionalStyles: React.CSSProperties = {
  border: "2px solid #00a965",
  borderRadius: "12px",
};

export default {
  title: "Card Container",
  component: CardContainer,
};

const Template: Story<ICardContainer> = (args) => <CardContainer {...args} />;

export const CardContainerItem = Template.bind({});
CardContainerItem.args = {
  content: <span>Card Container example</span>,
  optionalStyles: additionalStyles,
};
