import React from "react";
import {
  Cell,
  Pie,
  PieChart as RechartsPieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import clsx from "clsx";

import { Point } from "../Point";
import { Container } from "../Container";
import { CustomTooltipProps } from "../LineChart/ChartsTypes";
import { EmptyChart } from "../EmptyChart";

import { IPieChart, PieDataType } from "./PieChartTypes";
const CustomTooltip = ({
  fontFamily,
  payload,
  formatValue,
  active,
}: CustomTooltipProps) => {
  if (!active || !payload?.length) return <></>;
  return (
    <Container
      externalStyles="tooltip-container"
      content={
        <>
          <span className="date-label" style={{ fontFamily }}>
            {" "}
            {payload[0].name}
          </span>
          <div className={clsx("display-flex", "margin-top")}>
            <span className="value-label" style={{ fontFamily }}>
              {formatValue(Number(payload[0].value))}
            </span>
          </div>
        </>
      }
    />
  );
};

const groupData = (data: PieDataType) => {
  const groupSize = 5;
  return data.reduce((result: PieDataType[], curr, index) => {
    const newIndex = Math.floor(index / groupSize);
    if (!result[newIndex]) {
      result[newIndex] = [];
    }

    result[newIndex].push(curr);

    return result;
  }, []);
};

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  fontFamily,
  fontWeight,
}: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
      fontFamily={fontFamily}
      fontWeight={fontWeight}
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const Chart = ({
  data,
  fontFamily,
  formatValue = (value) => value.toLocaleString("en-US"),
}: IPieChart) => {
  const colors: string[] = data.map((item) => item.color);

  return (
    <>
      <ResponsiveContainer width="" height="50%" minHeight="250px">
        <RechartsPieChart>
          <Pie
            data={data}
            label={renderCustomizedLabel}
            strokeWidth={0}
            dataKey="value"
            fontFamily={fontFamily}
            outerRadius={120}
          >
            {data.map((_entry, index) => (
              <Cell
                key={`cell-item-${index}`}
                fill={_entry.color}
                fontFamily={fontFamily}
                fontWeight={700}
              />
            ))}
          </Pie>
          <Tooltip
            content={
              <CustomTooltip
                colors={colors}
                fontFamily={fontFamily}
                formatValue={formatValue}
              />
            }
          />
        </RechartsPieChart>
      </ResponsiveContainer>
      {groupData(data).map((data, index) => (
        <div className="pie-chart-legend-container" key={`subgroup-${index}`}>
          {(data || []).map(({ name, color }, index) => (
            <span
              className={clsx(
                "flex-center",
                "variant-body1",
                "piechart-label-styles"
              )}
              style={{ fontFamily }}
              key={`pie-chart-legend-${name}`}
            >
              <Point color={color} /> {name}
            </span>
          ))}
        </div>
      ))}
    </>
  );
};

export const PieChart = ({
  data,
  fontFamily,
  loading,
  emptyIcon,
  emptyTitle,
  emptyDescription,
  formatValue = (value) => value.toLocaleString("en-US"),
  loaderComponent,
}: IPieChart) => {
  const RenderComponent = () => {
    if (!data?.length && !loading) {
      return (
        <EmptyChart
          icon={emptyIcon}
          title={emptyTitle}
          description={emptyDescription}
          fontFamily={fontFamily}
        />
      );
    } else if (loading) {
      return <div>{loaderComponent}</div>;
    } else {
      return (
        <Chart data={data} fontFamily={fontFamily} formatValue={formatValue} />
      );
    }
  };

  return (
    <div className="pie-chart-container">
      <RenderComponent />
    </div>
  );
};
