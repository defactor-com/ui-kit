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
import { CustomTooltipProps, IChart } from "../Graphic";

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

export type dataType = { value: number; name: string }[];

export interface IPieChart extends IChart {
  data: dataType;
}

const groupData = (data: dataType) => {
  const groupSize = 5
  return data.reduce((result: dataType[], curr, index) => {
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

export const PieChart = ({
  colors,
  data,
  fontFamily,
  formatValue = (value) => value.toLocaleString("en-US"),
}: IPieChart) => {
  return (
    <div className="pie-chart-container">
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
                fill={colors[index % colors.length]}
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
          {(data || []).map(({ name }, index) => (
            <span
              className={clsx("flex-center", "variant-body1")}
              style={{ fontFamily }}
              key={`pie-chart-legend-${name}`}
            >
              <Point color={colors[index % colors.length]} /> {name}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
};
