'use client';

import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { AppbarV3, AppbarV3Props } from "../components/V3/AppbarV3";
import { useTheme } from "@mui/material";

export default {
  title: "V3/AppbarV3",
  component: AppbarV3,
  argTypes: {
    appLogo: { control: "text" },
    appLogoAlt: { control: "text" },
    appEnvironment: {
      control: { type: "select" },
      options: ["production", "testnet", "development"],
    },
    currentLogo: { control: "text" },
    currentLogoAlt: { control: "text" },
  },
} as ComponentMeta<typeof AppbarV3>;

const Template: ComponentStory<typeof AppbarV3> = (args: AppbarV3Props) => {
  const theme = useTheme();

  return <AppbarV3 {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  WalletSelector: () => (
    <div>
      <h6 style={{ color: 'grey' }}>WALLET</h6>
    </div>
  ),
  MobileMenuV3: () => (
    <div>
      <h6 style={{ color: 'grey' }}>MOBILE MENU</h6>
    </div>
  ),
};

export const MobileView = Template.bind({});
MobileView.args = {
  ...Default.args,
};
MobileView.parameters = {
  viewport: {
    defaultViewport: "mobile2",
  },
};
