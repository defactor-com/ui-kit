import React from "react";
import { Story, Meta } from "@storybook/react";
import FactrTokenBadge, { FactrTokenBadgeProps } from "../components/V3/FactrTokenBadge";

export default {
    title: "V3/FactrTokenBadge",
    component: FactrTokenBadge,
} as Meta;

const Template: Story<FactrTokenBadgeProps> = (args) => (
    <FactrTokenBadge {...args} />
);

export const BasicFactrTokenBadge = Template.bind({});
BasicFactrTokenBadge.args = {
    icon: "/v3-ethFactrToken-icon.svg", // Path to the icon in the public folder
    name: "Ethereum",                    // Example token name
    percentage: "50%",                   // Example percentage
};