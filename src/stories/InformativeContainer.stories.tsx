import React from "react";
import { Story } from "@storybook/react";

import { InformativeContainer } from "../components/InformativeContainer";
import { IInformativeContainer } from "../components/InformativeContainer/InformativeContainerTypes";

const additionalStyles: React.CSSProperties = {
  boxShadow: "0px 1px 3px 1px #00000026, 0px 1px 2px 0px #0000004d",
  borderRadius: "12px",
};

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
  optionalStyles: additionalStyles,
};
