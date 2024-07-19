import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ToggledContent } from "../components/ResponsiveToggle/ToggledContent";
import { myStatsInfo } from "../components/ResponsiveToggle/StatsBox/mock";

export default {
    title: "V2/ResponsiveToggle/ToggledContent",
    component: ToggledContent,
    argTypes: {
        XsWidth: { control: "text" },
        MdWidth: { control: "text" },
        statsInfo: { control: "object" }
    },
} as ComponentMeta<typeof ToggledContent>;

const Template: ComponentStory<typeof ToggledContent> = (args) => (
    <ToggledContent {...args} />
);

export const Default = Template.bind({});
Default.args = {
    statsInfo: myStatsInfo,
};

export const CustomWidths = Template.bind({});
CustomWidths.args = {
    XsWidth: "80%",
    MdWidth: "40%",
    statsInfo: myStatsInfo
};

export const CustomStatsInfo = Template.bind({});
CustomStatsInfo.args = {
    statsInfo: [
        {
            title: 'New Metric',
            value: '100',
            tooltipText: 'New tooltip',
            unit: 'NEW'
        },
        {
            title: 'New Metric',
            value: '100',
            tooltipText: 'New tooltip',
            unit: 'NEW'
        },
        {
            title: 'New Metric',
            value: '100',
            tooltipText: 'New tooltip',
            unit: 'NEW'
        },
        {
            title: 'New Metric',
            value: '100',
            tooltipText: 'New tooltip',
            unit: 'NEW'
        }

    ]
};
