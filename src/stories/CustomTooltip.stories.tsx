import React from "react";
import { Meta, Story } from "@storybook/react";
import { CustomTooltip, CustomTooltipProps } from "../components/CustomTooltip";

const meta: Meta = {
  title: "V2/CustomTooltip",
  component: CustomTooltip,
  parameters: {
    layout: "padded",
  },
  argTypes: {
    tooltipText: { control: "text" },
    iconColor: { control: "color" },
  },
};

export default meta;

const Template: Story<CustomTooltipProps> = (args) => (
  <CustomTooltip {...args} />
);

export const Default = Template.bind({});
Default.args = {
  tooltipText: "Storybook Tooltip text",
  iconColor: "#A8B0B6", // Temporarily until the designer updates the palette
};
