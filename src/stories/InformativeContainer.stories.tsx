import React from "react";
import { Story } from "@storybook/react";

import { InformativeContainer } from "../components/InformativeContainer";
import { IInformativeContainer } from "../components/InformativeContainer/InformativeContainerTypes";

export default {
  title: "Informative Container",
  component: InformativeContainer,
};

const Template: Story<IInformativeContainer> = (args) => (
  <InformativeContainer {...args} />
);

export const InformativeContainerItem = Template.bind({});
InformativeContainerItem.args = {
  externalStyles: "bottom-border",
  content: <span>Card Container example</span>,
};
