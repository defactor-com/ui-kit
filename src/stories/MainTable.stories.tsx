import React from "react";
import { Story, Meta } from "@storybook/react";
import { MainTable, MainTableProps } from "../components/V3/MainTable";

export default {
    title: "V3/MainTable",
    component: MainTable,
} as Meta;

const Template: Story<MainTableProps> = (args) => (
    <MainTable {...args} />
);

export const BasicMainTable = Template.bind({});
BasicMainTable.args = {
    headers: [
        { name: 'Asset Name', alignment: 'left' },
        { name: 'Symbol', alignment: 'left' },
        { name: 'Type', alignment: 'left' },
        { name: 'Price', alignment: 'left' },
        { name: 'Supply', alignment: 'left' },
        { name: 'Status', alignment: 'left' },
        { name: 'Actions', alignment: 'center' },
    ],
};
