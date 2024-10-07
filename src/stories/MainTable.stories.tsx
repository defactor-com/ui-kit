import React from "react";
import { Story, Meta } from "@storybook/react";
import { MainTable, MainTableProps } from "../components/V3/MainTable"

export default {
    title: "V3/MainTable",
    component: MainTable,
    argTypes: {
        // color: { control: "color" },
    },
} as Meta;

const Template: Story<MainTableProps> = (args) => (
    <MainTable {...args} />
);

export const ActiveTitleWithIcon = Template.bind({});
ActiveTitleWithIcon.args = {
    label: "1"
};

export const InactiveTitleWithIcon = Template.bind({});
InactiveTitleWithIcon.args = {
    label: "2"
};
