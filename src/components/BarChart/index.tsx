import React from "react";
import {
  ResponsiveContainer,
  Tooltip,
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import clsx from "clsx";

import { Point } from "../Point";
import { Container } from "../Container";
import { CustomTooltipProps, IChart } from "../Graphic";

export interface GraphicDataType {
  name: string;
}

export interface IBarChart extends IChart {
  data: string[];
  series: { name: string; data: number[] }[];
}

export const CustomTooltip = ({
  fontFamily,
  payload,
  colors,
  active,
  formatValue,
}: CustomTooltipProps) => {
  if (!active || !payload?.length) return <></>;

  const name = payload[0].payload.name;

  return (
    <Container
      externalStyles="tooltip-container"
      content={
        <span>
          <span className="date-label" style={{ fontFamily }}>
            {" "}
            {name}
          </span>
          <div className={clsx("flex-column-direction", "margin-top")}>
            {payload.map((item, index) => (
              <span
                key={`bar-chart-tooltip-${index}`}
                style={{ fontFamily }}
                className="flex-center"
              >
                <Point color={colors[index % colors.length]} />{" "}
                {`${item.name}: `}
                <span className="value-label" style={{ fontFamily }}>
                  {formatValue(Number(item.value))}
                </span>
              </span>
            ))}
          </div>
        </span>
      }
    />
  );
};

export const BarChart = ({
  data,
  series,
  colors,
  fontFamily,
  formatValue = (value) => value.toLocaleString("en-US"),
}: IBarChart) => {
  const chartData: any = data.map((name) => ({ name }));
  const keyNames: string[] = [];

  series.forEach((element) => {
    keyNames.push(element.name);
    element.data.forEach((item, index) => {
      if (chartData[index]) {
        chartData[index][element.name] = item;
      }
    });
  });

  return (
    <div className="bar-chart-container">
      <ResponsiveContainer
        width="100%"
        height={100 * data.length}
        minHeight="250px"
      >
        <RechartsBarChart data={chartData} layout="vertical" barGap={0}>
          <CartesianGrid strokeDasharray="12 12" />
          <XAxis
            type="number"
            axisLine={false}
            fontSize={12}
            fontWeight={500}
            fontFamily={fontFamily}
          />
          <YAxis
            type="category"
            axisLine={false}
            tick={(props) => (
              <text
                x={props.x}
                y={props.y}
                fontSize={12}
                fill="#7C7D7E"
                textAnchor="end"
                fontWeight={500}
                fontFamily={fontFamily}
              >
                {chartData[props.payload.index].name}
              </text>
            )}
          />
          {keyNames.map((name, index) => (
            <Bar
              key={`bar-${name}-${index}`}
              dataKey={name}
              fill={colors[index % colors.length]}
              barSize={18}
              fontFamily={fontFamily}
            />
          ))}
          <Tooltip
            cursor={{ fill: "transparent" }}
            content={
              <CustomTooltip
                colors={colors}
                fontFamily={fontFamily}
                formatValue={formatValue}
              />
            }
          />
        </RechartsBarChart>
      </ResponsiveContainer>
      <div className={clsx("flex-center", "bar-chart-legend-container")}>
        {keyNames.map((name, index) => (
          <span
            key={`bar-char-legend-${index}`}
            className={clsx("flex-center", "variant-body1")}
            style={{ fontFamily }}
          >
            <Point color={colors[index % colors.length]} /> {name}{" "}
          </span>
        ))}
      </div>
    </div>
  );
};
