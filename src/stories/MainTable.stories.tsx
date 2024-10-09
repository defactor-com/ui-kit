import React from "react";
import { Story, Meta } from "@storybook/react";
import { MainTable, MainTableProps } from "../components/V3/MainTable";
import { ArrowNarrowDown } from "@untitled-ui/icons-react";
import { CustomProgressBar } from "../components/V3/CustomProgressBar";

export default {
    title: "V3/MainTable",
    component: MainTable,
} as Meta;

const Template: Story<MainTableProps> = (args) => (
    <MainTable {...args} />
);

export const BasicMainTable = Template.bind({});
BasicMainTable.args = {

};

export const EngageMainTable = Template.bind({});
EngageMainTable.args = {
    showActions: false,
    headers: [
        { name: 'Address', alignment: 'left' },
        { name: 'Chain', alignment: 'left' },
        { name: 'Amount', alignment: 'left', icon: <ArrowNarrowDown height={'16px'} color="#5F66FF" /> },
        { name: '% Liquid', alignment: 'left', tooltip: true, tooltipMessage: "Percentage of liquid." },
        { name: 'Locked', alignment: 'left', tooltip: true, tooltipMessage: "Locked Tooltip Text." }
    ],
    rows: [
        {
            id: '1',
            address: '0x1234...abcd',
            chain: 'Ethereum',
            amount: '1500',
            liquid: <CustomProgressBar progress={50} />,
            locked: '40%',
        },
        {
            id: '2',
            address: '0x5678...efgh',
            chain: 'Polygon',
            amount: '3000',
            liquid: <CustomProgressBar progress={75} />,
            locked: '25%',
        },
    ],
};
