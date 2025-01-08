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
    currentLogo: { control: "text" },
    currentLogoAlt: { control: "text" },
    claimTokens: { control: "boolean" },
    boxShadow: { control: "text" },
  },
} as ComponentMeta<typeof AppbarV3>;

const Template: ComponentStory<typeof AppbarV3> = (args: AppbarV3Props) => {
  const theme = useTheme();

  return <AppbarV3 {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  mobileMenu: () => (
    <div>
      <h6 style={{ color: 'grey' }}>MOBILE MENU</h6>
    </div>
  ),
  walletSelector: () => (
    <div>
      <h6 style={{ color: 'grey' }}>WALLET SELECTOR</h6>
    </div>
  ),
  languageSelector: () => (
    <div>
      <h6 style={{ color: 'grey' }}>LANGUAGE SELECTOR</h6>
    </div>
  ),
  ClaimTokensBtn: () => (
    <button style={{ padding: '5px 10px' }}>Claim Tokens</button>
  ),
  appLogoAlt: "App Logo",
  currentLogoAlt: "Current Logo",
  claimTokens: true,
  boxShadow: "8px 10px 10px 0px rgba(214, 218, 231, 0.25)",
  web3AccountHook: () => ({
    isConnected: true,
    address: "0x1234...abcd",
    chainId: 1,
  }),
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
