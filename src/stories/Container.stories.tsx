import React from "react";
import { Story } from "@storybook/react";

import { Container, IContainer } from "../components/Container";

export default {
  title: "Container",
  component: Container,
};

const Template: Story<IContainer> = (args) => <Container {...args} />;

export const ContainerItem = Template.bind({});
ContainerItem.args = {
  content: <span>Container example</span>,
};
