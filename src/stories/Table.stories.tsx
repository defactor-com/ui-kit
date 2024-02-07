import React from "react";
import { Story } from "@storybook/react";

import { Pill } from "../components/Pill";
import { Table, ITable } from "../components/Table";
import optionIcon from "../../public/assets/options-icon.svg";

export default {
  title: "Table",
  component: Table,
};

const Template: Story<ITable> = (args) => {
  return (
    <Table
      {...args}
      haveOptions
      headers={[
        { label: "Position", sortFunction: () => {} },
        { label: "Amount" },
        { label: "Rewards" },
        { label: "Lock" },
        { label: "Unlocks" },
        { label: "Status" },
      ]}
    />
  );
};

export const TableItem = Template.bind({});
TableItem.args = {
  rows: [
    {
      function: () => {},
      items: [
        <div>
          <span>Gold</span>
        </div>,
        <div>
          <span>1,200 USDC</span>
        </div>,
        <div>
          <span>1 USDC (9,25% APY)</span>
        </div>,
        <div>
          <span>360 Days</span>
        </div>,
        <div>
          <span>Dec 25 2024</span>
        </div>,
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <Pill label="Claim" bgColor="#26A66B" color="#FFF" />
        </div>,
        <>
          <img src={optionIcon} alt="options icon" className="cursor-pointer" />
        </>,
      ],
    },
    {
      function: () => {},
      items: [
        <div>
          <span>Silver</span>
        </div>,
        <div>
          <span>1,200 USDC</span>
        </div>,
        <div>
          <span>10 USDC (12,3% APY)</span>
        </div>,
        <div>
          <span>180 Days</span>
        </div>,
        <div>
          <span>Aug 9, 2024 13:31</span>
        </div>,
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <Pill
            label="Locked"
            bgColor="rgba(235, 159, 0, 0.10)"
            color="#E0A225"
          />
        </div>,
        <>
          <img src={optionIcon} alt="options icon" className="cursor-pointer" />
        </>,
      ],
    },
  ],
};
