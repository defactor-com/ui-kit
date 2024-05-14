import React from "react";
import { Story } from "@storybook/react";

import { CardComponent } from "../components/CardComponent";
import { ICardComponent } from "../components/CardComponent/CardComponentTypes";
import { Tooltip } from "../components/Tooltip";
import InfoIcon from "../../public/assets/info-icon.svg";

export default {
  title: "Card Component",
  component: CardComponent,
};

const exampleTooltip = <Tooltip icon={InfoIcon} text="This is a tooltip" />;

const Template: Story<ICardComponent> = (args) => <CardComponent {...args} />;

export const CardComponentItem = Template.bind({});
CardComponentItem.args = {
  color: "#26A66B",
  label: "Total",
  value: "$2,000",
  fluctuation: "+3.5",
  fluctuationValue: "+$2,400",
  tooltip: exampleTooltip,
};
