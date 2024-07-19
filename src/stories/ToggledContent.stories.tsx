import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ToggledContent } from "../components/ResponsiveToggle/ToggledContent";

export default {
    title: "V2/ResponsiveToggle/ToggledContent",
    component: ToggledContent,
    argTypes: {
        XsWidth: { control: "text" },
        MdWidth: { control: "text" },
    },
} as ComponentMeta<typeof ToggledContent>;

const Template: ComponentStory<typeof ToggledContent> = (args) => (
    <ToggledContent {...args} />
);

export const Default = Template.bind({});
Default.args = {};

export const CustomWidths = Template.bind({});
CustomWidths.args = {
    XsWidth: "80%",
    MdWidth: "40%",
};
