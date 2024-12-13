import React from "react";
import { Story, Meta } from "@storybook/react";
import { WalletSelectorV3 } from "../components/V3/WalletSelectorV3";

export default {
  title: "V3/WalletSelectorV3",
  component: WalletSelectorV3,
} as Meta;

const Template: Story = () => <WalletSelectorV3 />;

export const DefaultWalletSelector = Template.bind({});
