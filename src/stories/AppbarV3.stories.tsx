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

  return (
    <AppbarV3 {...args} />
  );
};

export const Default = Template.bind({});
Default.args = {
  appLogo: "/default-logo.png",
  appLogoAlt: "Header Logo",
  appEnvironment: "production",
  currentLogo: "/default-mobile-logo.png",
  currentLogoAlt: "Default Mobile Logo",
};

export const TestnetEnvironment = Template.bind({});
TestnetEnvironment.args = {
  ...Default.args,
  appEnvironment: "testnet",
};

export const MobileView = Template.bind({});
MobileView.args = {
  ...Default.args,
  appEnvironment: "testnet",
};
MobileView.parameters = {
  viewport: {
    defaultViewport: "mobile2",
  },
};
