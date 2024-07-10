import React from "react";
import { Meta, Story } from "@storybook/react";
import { ThemeProvider } from "@mui/material/styles";
import { CustomTooltip, CustomTooltipProps } from "../components/CustomTooltip";
import themes from '../themes'; 

const theme = themes.lightTheme;

const meta: Meta = {
  title: "V2/CustomTooltip",
  component: CustomTooltip,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    tooltipText: { control: 'text' },
    iconColor: { control: 'color' },
  },
};

export default meta;

const Template: Story<CustomTooltipProps> = (args) => (
  <ThemeProvider theme={theme}>
    <CustomTooltip {...args} />
  </ThemeProvider>
);

export const Default = Template.bind({});
Default.args = {
  tooltipText: "Storybook Tooltip text",
  iconColor: "#A8B0B6", //Temporarily until the designer updates the palette
};
