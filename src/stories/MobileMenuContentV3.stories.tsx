import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import MobileMenuContentV3 from "../components/V3/MobileMenuContentV3";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme();

export default {
  title: "V3/MobileMenuContentV3",
  component: MobileMenuContentV3,
  argTypes: {
    open: { control: "boolean" },
    onClose: { action: "onClose" },
  },
} as ComponentMeta<typeof MobileMenuContentV3>;

const Template: ComponentStory<typeof MobileMenuContentV3> = (args) => (
  <ThemeProvider theme={theme}>
    <MobileMenuContentV3 {...args} />
  </ThemeProvider>
);

export const Default = Template.bind({});
Default.args = {
  open: true,
};

export const Closed = Template.bind({});
Closed.args = {
  open: false,
};
