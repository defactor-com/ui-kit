import React from "react";
import { Story } from "@storybook/react";

import {
  CollateralSection,
  ICollateralSection,
} from "../components/CollateralSection";

export default {
  title: "CollateralSection",
  component: CollateralSection,
};

const Template: Story<ICollateralSection> = (args) => (
  <CollateralSection {...args} />
);

export const ContainerItem = Template.bind({});
ContainerItem.args = {
  numberCollateral: "100,000.00",
  numberWallet: "100,000.00",
  requiredSection: true,
  symbolToken: "FACTR",
};
