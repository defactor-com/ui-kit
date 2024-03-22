import React from "react";
import { Story } from "@storybook/react";

import { CardComponent, ICardComponent } from "../components/CardComponent";

export default {
  title: "Card Component",
  component: CardComponent,
};

const Template: Story<ICardComponent> = (args) => <CardComponent {...args} />;

export const CardComponentItem = Template.bind({});
CardComponentItem.args = {
  color: '#26A66B',
  label: 'Total',
  value: '$2,000',
  fluctuation: '+3.5',
  fluctuationValue: '+$2,400'
};
