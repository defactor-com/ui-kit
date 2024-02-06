import React from "react";
import { Story } from "@storybook/react";

import { GraphicDataType } from "../components/Graphic";
import { Dashboard, IDashboard } from "../components/Dashboard";

export default {
  title: "Dashboard",
  component: Dashboard,
};

const data: GraphicDataType[] = [
  {
    date: "25 July 00:00",
    fluctuation: "+1.4%",
    uv: 70,
  },
  {
    date: "26 July 00:00",
    fluctuation: "+1.1%",
    uv: 100,
  },
  {
    date: "27 July 00:00",
    fluctuation: "+0.9%",
    uv: 200,
  },
  {
    date: "28 July 00:00",
    fluctuation: "+2.4%",
    uv: 500,
  },
  {
    date: "29 July 00:00",
    fluctuation: "+5.0%",
    uv: 1000,
  },
  {
    date: "29 July 00:00",
    fluctuation: "-1.1%",
    uv: 800,
  },
  {
    date: "29 July 00:00",
    fluctuation: "+1.4%",
    uv: 1100,
  },
  {
    date: "28 July 00:00",
    fluctuation: "-1.3%",
    uv: 1000,
  },
  {
    date: "29 July 00:00",
    fluctuation: "+1.3%",
    uv: 1100,
  },
  {
    date: "29 July 00:00",
    fluctuation: "-1.3%",
    uv: 1000,
  },
  {
    date: "29 July 00:00",
    fluctuation: "+2.3%",
    uv: 1300,
  },
];

const Template: Story<IDashboard> = (args) => {
  return (
    <Dashboard
      {...args}
      data={data}
      currency="USDC"
      color="#26A66B"
      poolsLabel="Pools"
      totalValueLocked={888888888888}
      titleGraphic="Total Value Locked"
      poolsLabel1Container="Active Loans"
      poolsValue1Container={1200.00}
      poolsLabel2Container="All Repaid Loans"
      poolsValue2Container={2500.00}
      poolsLabel3Container="Interest Paid "
      poolsValue3Container={200.00}
      label1BottomContainer="Asset Received"
      value1BottomContainer={20000.00}
      fluctuation1BottomContainer="+3.4%"
      label2BottomContainer="Investing"
      value2BottomContainer={20000.00}
      fluctuation2BottomContainer="-3.4%"
      label3BottomContainer="Asset Received"
      value3BottomContainer={20000.00}
      fluctuation3BottomContainer="+3.4%"
    />
  );
};

export const DashboardItem = Template.bind({});
DashboardItem.args = {};
