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
import { CustomTooltipProps, IChart } from "../LineChart";

export interface ChartSeriesType {
  name: string;
  data: number[];
}

export interface IBarChart extends IChart {
  data: string[];
  series: ChartSeriesType[];
}

const CustomTooltip = ({
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
              <div
                key={`bar-chart-tooltip-${index}`}
                className="bar-chart-tooltip-item"
              >
                <span style={{ fontFamily }} className="flex-center">
                  <Point color={colors[index % colors.length]} />{" "}
                  {`${item.name}: `}
                </span>
                <span className="value-label" style={{ fontFamily }}>
                  {formatValue(Number(item.value))}
                </span>
              </div>
            ))}
          </div>
        </span>
      }
    />
  );
};

const getHorizontalCoordinates = (max: number, gap: number) => {
  const horizontalLines = [];

  for (let index = 0; gap * index <= max; index++) {
    horizontalLines.push(gap * index + 5);
  }

  return horizontalLines;
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
      <div className="bar-chart-graphic-container">
        <ResponsiveContainer width="94%" height={100 * data.length}>
          <RechartsBarChart data={chartData} layout="vertical" barGap={8}>
            <CartesianGrid
              strokeDasharray="12 12"
              horizontalCoordinatesGenerator={(props) =>
                getHorizontalCoordinates(
                  props.yAxis.height,
                  props.yAxis.bandSize
                )
              }
            />
            <XAxis
              type="number"
              axisLine={false}
              fontFamily={fontFamily}
              tick={(props) => (
                <text
                  x={props.x + 10}
                  y={props.y + 15}
                  fontSize={12}
                  fill="#7C7D7E"
                  textAnchor="end"
                  fontWeight={500}
                  fontFamily={fontFamily}
                >
                  {formatValue(props.payload.value)}
                </text>
              )}
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
                barSize={25}
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
      </div>
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
