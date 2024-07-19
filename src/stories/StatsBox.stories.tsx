import React from "react";
import { Story, Meta } from "@storybook/react";
import { StatsBox, StatsBoxProps } from "../components/StatsBox";

export default {
    title: "V2/ResponsiveToggle/StatsBox",
    component: StatsBox,
    argTypes: {
        XsWidth: { control: "text" },
        MdWidth: { control: "text" },
        title: { control: "text" },
        value: { control: "text" },
        tooltipText: { control: "text" },
        unit: { control: "text" },
    },
} as Meta;

const Template: Story<StatsBoxProps> = (args) => <StatsBox {...args} />;

export const DefaultStatsBox = Template.bind({});
DefaultStatsBox.args = {
    XsWidth: '100%',
    MdWidth: '212px',
    title: 'Minted Tokens',
    value: '15,000',
    tooltipText: 'This is a tooltip',
    unit: 'FACTR',
};


