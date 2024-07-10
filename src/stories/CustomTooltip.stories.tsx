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
  tooltipText: "This is a default tooltip",
  iconColor: theme.palette.grey[500],
};
