import React from "react";
import { Story, Meta } from "@storybook/react";
import MainTable, { MainTableProps } from "../components/V3/MainTable";

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

export const BasicMainTable = Template.bind({});
BasicMainTable.args = {

};


