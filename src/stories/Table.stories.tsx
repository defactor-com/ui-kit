import React, { useState } from "react";
import { Story } from "@storybook/react";

import { Pill } from "../components/Pill";
import { Table } from "../components/Table";
import {
  ITable,
  IRowsObject,
  IFilterSelectedObject,
} from "../components/Table/TableTypes";

export default {
  title: "Table",
  component: Table,
};

const tableData = [
  {
    onClickRow: () => {},
    position: "Gold",
    amount: "1500 USDC",
    rewards: "1.5 USDC (10% APY)",
    lock: "365 Days",
    unLock: "Dec 31, 2024",
    status: "Claim",
    backgroundPill: "#26A66B",
    colorPill: "#fff",
  },
  {
    onClickRow: null,
    position: "Silver",
    amount: "900 USDC",
    rewards: "15 USDC (18% APY)",
    lock: "270 Days",
    unLock: "Oct 15, 2024",
    status: "Locked",
    backgroundPill: "rgba(235, 159, 0, 0.10)",
    colorPill: "#E0A225",
  },
  {
    onClickRow: null,
    position: "Bronze",
    amount: "800 USDC",
    rewards: "5 USDC (7% APY)",
    lock: "180 Days",
    unLock: "Sep 1, 2024",
    status: "Claim",
    backgroundPill: "#26A66B",
    colorPill: "#fff",
  },
  {
    onClickRow: null,
    position: "Platinum",
    amount: "2000 USDC",
    rewards: "20 USDC (15% APY)",
    lock: "400 Days",
    unLock: "Feb 15, 2025",
    status: "Locked",
    backgroundPill: "rgba(235, 159, 0, 0.10)",
    colorPill: "#E0A225",
  },
  {
    onClickRow: null,
    position: "Diamond",
    amount: "3000 USDC",
    rewards: "30 USDC (20% APY)",
    lock: "450 Days",
    unLock: "Mar 20, 2025",
    status: "Claim",
    backgroundPill: "#26A66B",
    colorPill: "#fff",
  },
  {
    onClickRow: null,
    position: "Emerald",
    amount: "2500 USDC",
    rewards: "25 USDC (17.5% APY)",
    lock: "380 Days",
    unLock: "Jan 5, 2025",
    status: "Locked",
    backgroundPill: "rgba(235, 159, 0, 0.10)",
    colorPill: "#E0A225",
  },
];

const Template: Story<ITable> = (args) => {
  const [filters, setFilters] = useState<Array<IFilterSelectedObject>>([]);

  return (
    <Table
      {...args}
      loading
      haveOptions
      visiblePage={1}
      nextPage={() => {}}
      totalRowsNumber={22}
      rowsPageSelected={5}
      rowsPage={[5, 10, 15]}
      rowsNumberLabel="Rows per page:"
      handleSelectedRowsPage={() => {}}
      setFilters={setFilters}
      loaderComponent={
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <span>Loading...</span>
        </div>
      }
      emptyTitle="No pools to show"
      emptyDescription="Pools will be listed here when available. "
      headers={[
        { label: "Position", sortFunction: () => {} },
        { label: "Amount" },
        { label: "Rewards" },
        { label: "Lock" },
        { label: "Unlocks" },
        { label: "Status" },
      ]}
      filters={[
        {
          label: "Position",
          options: [
            "Gold",
            "Silver",
            "Bronze",
            "Platinum",
            "Diamond",
            "Emerald",
          ],
          type: "multiple",
        },
        { label: "Amount" },
        { label: "Rewards" },
        { label: "Lock" },
        { label: "Unlocks", type: "date" },
        { label: "Status" },
      ]}
    />
  );
};

const dynamicRows = tableData.map((item) => {
  const row: IRowsObject = {
    items: [
      {
        activeAction: true,
        component: (
          <div>
            <span>{item.position}</span>
          </div>
        ),
      },
      {
        activeAction: true,
        component: (
          <div>
            <span>{item.amount}</span>
          </div>
        ),
      },
      {
        activeAction: true,
        component: (
          <div>
            <span>{item.rewards}</span>
          </div>
        ),
      },
      {
        activeAction: true,
        component: (
          <div>
            <span>{item.lock}</span>
          </div>
        ),
      },
      {
        activeAction: true,
        component: (
          <div>
            <span>{item.unLock}</span>
          </div>
        ),
      },
      {
        activeAction: false,
        component: (
          <div
            style={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <Pill
              label={item.status}
              bgColor={item.backgroundPill}
              color={item.colorPill}
            />
          </div>
        ),
      },
    ],
  };

  if (item.onClickRow !== null) {
    row.onClickRow = item.onClickRow;
  }

  return row;
});

export const TableItem = Template.bind({});
TableItem.args = {
  rows: dynamicRows,
};
