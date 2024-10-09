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
        { name: 'Actions', alignment: 'center' }
    ],
    rows: [
        {
            id: '1',
            asset_name: 'Sample Asset 1',
            asset_symbol: 'SA1',
            asset_type: 'ERC-20',
            price: '1000',
            supply: 500,
            status: 'mined',
        },
        {
            id: '2',
            asset_name: 'Sample Asset 2',
            asset_symbol: 'SA2',
            asset_type: 'ERC-3643',
            price: '2000',
            supply: 300,
            status: 'draft',
        },
    ],
};

export const EngageMainTable = Template.bind({});
EngageMainTable.args = {
    showActions: false,
    headers: [
        { name: 'Address', alignment: 'left' },
        { name: 'Chain', alignment: 'left' },
        { name: 'Amount', alignment: 'left' },
        { name: '% Liquid', alignment: 'left' },
        { name: 'Locked', alignment: 'left' },
        { name: 'Actions', alignment: 'center' }
    ],
    rows: [
        {
            id: '1',
            address: '0x1234...abcd',
            chain: 'Ethereum',
            amount: '1500',
            liquid: '60%',
            locked: '40%',
        },
        {
            id: '2',
            address: '0x5678...efgh',
            chain: 'Polygon',
            amount: '3000',
            liquid: '75%',
            locked: '25%',
        },
    ],
};
