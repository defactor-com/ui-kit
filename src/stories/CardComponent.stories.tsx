import React, { useState } from "react";
import { Story } from "@storybook/react";

import { CardComponent } from "../components/CardComponent";
import { ICardComponent } from "../components/CardComponent/CardComponentTypes";
import InfoIcon from "../../public/assets/info-icon.svg";
import InfoActiveIcon from "../../public/assets/info-active-icon.svg";

export default {
  title: "Card Component",
  component: CardComponent,
};

const Template: Story<ICardComponent> = (args) => {
  const infoTooltip = {
    icon: InfoIcon,
    activeIcon: InfoActiveIcon,
    text: "This is a tooltip",
  };

  return <CardComponent {...args} infoTooltip={infoTooltip} />;
};

export const CardComponentItem = Template.bind({});
CardComponentItem.args = {
  label: "Total",
  value: "$2,000",
  fluctuation: "+3.5",
  fluctuationValue: "+$2,400",
  hoverBehavior: true,
};
