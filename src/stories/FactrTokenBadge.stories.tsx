import React from "react";
import { Story, Meta } from "@storybook/react";
import FactrTokenBadge, { FactrTokenBadgeProps } from "../components/V3/FactrTokenBadge";
import EthFactrIcon from "../components/Icons/v3/ethFactrIcon";

export default {
    title: "V3/FactrTokenBadge",
    component: FactrTokenBadge,
} as Meta;

const Template: Story<FactrTokenBadgeProps> = (args) => (
    <FactrTokenBadge {...args} />
);

export const BasicFactrTokenBadge = Template.bind({});
BasicFactrTokenBadge.args = {
    icon: <EthFactrIcon />,
    name: "Ethereum",
    percentage: "50%",
};
