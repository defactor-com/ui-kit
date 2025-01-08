import React from "react";
import { Story } from "@storybook/react";
import SnackbarV3 from "../components/V3/SnackbarV3";
import { MessageProvider, useMessage } from "../components/V3/SnackbarV3/demoData";

export default {
  title: "V3/SnackbarV3",
  component: SnackbarV3,
  argTypes: {},
};

const Template: Story = (args) => {
  const messageContext = useMessage();

  return (
    <MessageProvider>
      <SnackbarV3 useMessage={messageContext} {...args} />
    </MessageProvider>
  );
};

export const Default = Template.bind({});
Default.args = {};
