import React, { useState } from "react";
import { Story } from "@storybook/react";
import { Box } from "@mui/material";

import { LineChart } from "../components/LineChart";
import {
  SeriesDataType,
  LineChartDataType,
} from "../components/LineChart/ChartsTypes";
import { Tooltip } from "../components/Tooltip";
import { BarChart } from "../components/BarChart";
import { PieChart } from "../components/PieChart";
import InfoIcon from "../../public/assets/info-icon.svg";
import InfoActiveIcon from "../../public/assets/info-active-icon.svg";
import { ChartContainer } from "../components/ChartContainer";
import AdmirationIcon from "../components/Icons/admirationIcon";
import { Dashboard } from "../components/Dashboard";
import { CardItem, IDashboard } from "../components/Dashboard/DashboardTypes";

export default {
  title: "Dashboard",
  component: Dashboard,
};

const infoTooltip = {
  icon: InfoIcon,
  activeIcon: InfoActiveIcon,
  text: "This is a tooltip",
};

const colors: string[] = ["#26A66B", "#5A5BEB", "#D21A4D"];
const series: SeriesDataType[] = [
  {
    name: "Total Available",
    data: [
      { value: 40, fluctuation: "+1.4%", fluctuationValue: "+$2,400" },
      { value: 60, fluctuation: "-0.2%", fluctuationValue: "+$2,400" },
      { value: 90, fluctuation: "+5.3%", fluctuationValue: "+$2,400" },
      { value: 50, fluctuation: "+5.3%", fluctuationValue: "+$2,400" },
      { value: 30, fluctuation: "+5.3%", fluctuationValue: "+$2,400" },
    ],
  },
  {
    name: "Total Borrowed",
    data: [
      { value: 50, fluctuation: "+3.5%", fluctuationValue: "+$2,400" },
      { value: 40, fluctuation: "-0.8%", fluctuationValue: "+$2,400" },
      { value: 20, fluctuation: "+1.8%", fluctuationValue: "+$2,400" },
      { value: 30, fluctuation: "+1.8%", fluctuationValue: "+$2,400" },
      { value: 60, fluctuation: "+1.8%", fluctuationValue: "+$2,400" },
    ],
  },
  {
    name: "Total Lent",
    data: [
      { value: 10, fluctuation: "-0.5%", fluctuationValue: "+$2,400" },
      { value: 20, fluctuation: "+1.2%", fluctuationValue: "+$2,400" },
      { value: 40, fluctuation: "-1.1%", fluctuationValue: "+$2,400" },
      { value: 80, fluctuation: "-1.1%", fluctuationValue: "+$2,400" },
      { value: 40, fluctuation: "-1.1%", fluctuationValue: "+$2,400" },
    ],
  },
];

const data: LineChartDataType[] = [
  {
    date: "25 July 00:00",
  },
  {
    date: "26 July 00:00",
  },
  {
    date: "27 July 00:00",
  },
  {
    date: "28 July 00:00",
  },
  {
    date: "29 July 00:00",
  },
];

const bottomContainerItems: CardItem[] = [
  {
    label: "Total Available",
    value: "$20,000.00",
    fluctuation: "+3.4%",
    fluctuationValue: "+$2,400",
    infoTooltip: infoTooltip,
    hoverBehavior: true,
  },
  {
    label: "Total Borrowed",
    value: "$20,000.00",
    fluctuation: "-3.4%",
    fluctuationValue: "-$2,400",
    infoTooltip: infoTooltip,
    hoverBehavior: true,
  },
  {
    label: "Total Lent",
    value: "$20,000.00",
    fluctuation: "+3.4%",
    fluctuationValue: "+$2,400",
    infoTooltip: infoTooltip,
    hoverBehavior: true,
  },
];

const rightContainerItems: CardItem[] = [
  {
    label: "Active Loans",
    value: "$12,00.00",
    infoTooltip: infoTooltip,
    hoverBehavior: true,
  },
  {
    label: "All Repaid Loans",
    value: "$2,500.00",
    infoTooltip: infoTooltip,
    hoverBehavior: true,
  },
  {
    label: "Interest Paid",
    value: "$200.00",
    infoTooltip: infoTooltip,
    hoverBehavior: true,
  },
  {
    label: "Loan to Value Ratio",
    value: "75%",
    color: colors[0],
    fluctuation: "+3.4%",
    infoTooltip: infoTooltip,
    hoverBehavior: true,
  },
];

const formatValue = (
  value: number | string,
  options?: Intl.NumberFormatOptions
) => {
  return value.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    ...options,
  });
};

const Template: Story<IDashboard> = (args) => {
  const [currentIcon, setCurrentIcon] =
    useState<string | React.ReactElement>(InfoIcon);
  const [isOpen, setIsOpen] = useState(false);
  const handleChange = (newValue: boolean) => {
    if (newValue) setCurrentIcon(InfoActiveIcon ? InfoActiveIcon : InfoIcon);
    else setCurrentIcon(InfoIcon);
    setIsOpen(newValue);
  };

  const exampleTooltip = (
    <Tooltip
      sizeIcon={24}
      icon={currentIcon}
      text={"This is a tooltip"}
      isOpen={isOpen}
      handleChange={handleChange}
    />
  );

  return (
    <Dashboard
      {...args}
      content={
        <ChartContainer
          chartSubtitle={"Pool Utilization"}
          chartDescription={"Optional Description"}
          tooltip={exampleTooltip}
          content={
            <LineChart
              emptyDescription="Data will be listed here when available."
              loaderComponent={
                <Box
                  height="100%"
                  width="100%"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <span>Loading...</span>
                </Box>
              }
              dateFilter={["1D", "7D", "1M", "ALL"]}
              emptyIcon={<AdmirationIcon />}
              emptyTitle="No data to show"
              formatValue={formatValue}
              loading={false}
              colors={colors}
              series={series}
              data={data}
            />
          }
        />
      }
    />
  );
};

const TemplateLending: Story<IDashboard> = (args) => {
  const [currentIcon, setCurrentIcon] =
    useState<string | React.ReactElement>(InfoIcon);
  const [isOpen, setIsOpen] = useState(false);
  const handleChange = (newValue: boolean) => {
    if (newValue) setCurrentIcon(InfoActiveIcon ? InfoActiveIcon : InfoIcon);
    else setCurrentIcon(InfoIcon);
    setIsOpen(newValue);
  };

  const exampleTooltip = (
    <Tooltip
      sizeIcon={24}
      icon={currentIcon}
      text={"This is a tooltip"}
      isOpen={isOpen}
      handleChange={handleChange}
    />
  );

  const Charts = () => (
    <>
      <ChartContainer
        chartSubtitle="Pool Utilization"
        chartDescription="Optional Description"
        tooltip={exampleTooltip}
        content={
          <BarChart
            formatValue={formatValue}
            series={barChatSeries}
            colors={barChartColors}
            data={poolNames}
          />
        }
      />
      <ChartContainer
        chartSubtitle="Pools by Status"
        chartDescription="Optional Description"
        content={<PieChart data={pieChartData} />}
      />
    </>
  );

  return <Dashboard {...args} content={<Charts />} />;
};

export const DashboardItem = Template.bind({});
DashboardItem.args = {
  colors,
  currency: "USDC",
  totalValueLocked: formatValue(888888888888, {
    style: "decimal",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }),
  titleGraphic: "Total Value Locked",
  bottomLabel: "General",
  bottomContainerItems,
  rightLabel: "Pools",
  rightContainerItems,
};

const poolNames = ["POOL A", "POOL B", "POOL C"];
const barChartColors = ["#5A5BEB", "#26A66B80"];
const barChatSeries = [
  { name: "Lending", data: [3, 2.2, 9.5] },
  { name: "Borrowing", data: [4.5, 5.2, 2.3] },
];
const pieChartData = [
  { name: "Active", value: 135, color: "#26A66B" },
  { name: "Claimed", value: 50, color: "#5A5BEB" },
  { name: "Available", value: 65, color: "#D21A4D" },
];
const rightContainerItems1: CardItem[] = [
  {
    label: "Total Active Loans",
    value: "1,200",
    infoTooltip: infoTooltip,
    hoverBehavior: true,
  },
  {
    label: "Loans Ready to Claim",
    value: "2,500",
    infoTooltip: infoTooltip,
    hoverBehavior: true,
  },
  {
    label: "Total Claimed Loans",
    value: "200",
    infoTooltip: infoTooltip,
    hoverBehavior: true,
  },
  {
    label: "Total Interest Earned",
    value: "800",
    infoTooltip: infoTooltip,
    hoverBehavior: true,
  },
  {
    label: "Total Amount Lent",
    value: "$7,000.00",
    infoTooltip: infoTooltip,
    hoverBehavior: true,
  },
];

export const DashboardLendingItem = TemplateLending.bind({});
DashboardLendingItem.args = {
  currency: "USDC",
  totalValueLocked: formatValue(888888888888, {
    style: "decimal",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }),
  titleGraphic: "Total Value Locked",
  rightLabel: "Stats",
  rightContainerItems: rightContainerItems1,
};

const rightContainerItems2: CardItem[] = [
  {
    label: "Funds Available",
    value: "$2500.00",
    infoTooltip: infoTooltip,
    hoverBehavior: true,
  },
  {
    label: "Total Loans Repaid",
    value: 200,
    infoTooltip: infoTooltip,
    hoverBehavior: true,
  },
  {
    label: "Total Loans",
    value: 800,
    infoTooltip: infoTooltip,
    hoverBehavior: true,
  },
  {
    label: "Next Loan to Reach Maturity",
    value: "Pool B",
    infoTooltip: infoTooltip,
    hoverBehavior: true,
  },
];

const TemplateBorrowing: Story<IDashboard> = (args) => {
  const [currentIcon, setCurrentIcon] =
    useState<string | React.ReactElement>(InfoIcon);
  const [isOpen, setIsOpen] = useState(false);
  const handleChange = (newValue: boolean) => {
    if (newValue) setCurrentIcon(InfoActiveIcon ? InfoActiveIcon : InfoIcon);
    else setCurrentIcon(InfoIcon);
    setIsOpen(newValue);
  };

  const exampleTooltip = (
    <Tooltip
      sizeIcon={24}
      icon={currentIcon}
      text={"This is a tooltip"}
      isOpen={isOpen}
      handleChange={handleChange}
    />
  );

  const Charts = () => (
    <>
      <ChartContainer
        chartSubtitle="Pool Utilization"
        chartDescription="Optional Description"
        tooltip={exampleTooltip}
        content={
          <BarChart
            formatValue={formatValue}
            series={barChatSeries}
            colors={barChartColors}
            data={poolNames}
          />
        }
      />
      <ChartContainer
        chartSubtitle="Pools by Status"
        chartDescription="Optional Description"
        content={<PieChart data={pieChartData} />}
      />
    </>
  );

  return <Dashboard {...args} content={<Charts />} />;
};

export const DashboardBorrowingItem = TemplateBorrowing.bind({});
DashboardBorrowingItem.args = {
  rightLabel: "Stats",
  rightContainerItems: rightContainerItems2,
};
