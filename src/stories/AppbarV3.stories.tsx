"use client";

import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { AppbarV3, AppbarV3Props } from "../components/V3/AppbarV3";
import { useTheme } from "@mui/material";
import DefactorLogo from "../components/V3/AppbarV3/defactor-logo.svg";
import EngageLogo from "../components/V3/AppbarV3/engage-logo.svg";
import ClaimTokensButtonV3 from "../components/V3/ClaimTokensButtonV3";
import { WalletSelectorExample } from "../components/WalletComponent/WalletSelectorExample";
import { MobileNavExample } from "../components/MobileMenu/MobileMenuExample";
import { LanguageSelectorExample } from "../components/LanguageSelector/LanguageSelectorExample";

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

  return <AppbarV3 {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  mobileMenu: () => (
   <MobileNavExample />
  ),
  walletSelector: () => (
   <WalletSelectorExample />
  ),
  languageSelector: () => (
   <LanguageSelectorExample />
  ),
  ClaimTokensBtn: () => (
    <ClaimTokensButtonV3
      web3AccountHook={() => ({
        isConnected: true,
        address: "0x1234567890abcdef1234567890abcdef12345678",
        chainId: 1,
      })}
    />
  ),
  appLogoAlt: "App Logo",
  appLogo: DefactorLogo,
  currentLogoAlt: "Current Logo",
  currentLogo: EngageLogo,
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
