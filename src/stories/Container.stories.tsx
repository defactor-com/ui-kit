import React from "react";
import { Story } from "@storybook/react";

import { Container } from "../components/Container";
import { IContainer } from "../components/Container/ContainerTypes";

const additionalStyles: React.CSSProperties = {
  boxShadow: "0px 1px 3px 1px #00000026, 0px 1px 2px 0px #0000004d",
};

export default {
  title: "Container",
  component: Container,
};

const Template: Story<IContainer> = (args) => <Container {...args} />;

export const ContainerItem = Template.bind({});
ContainerItem.args = {
  content: <span>Container example</span>,
  optionalStyles: additionalStyles,
};
