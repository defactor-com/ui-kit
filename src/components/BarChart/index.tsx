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
import { EmptyChart } from "../EmptyChart";

import useBarChartState from "./useBarChartState";

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
  loading,
  emptyIcon,
  emptyTitle,
  emptyDescription,
}: IBarChart) => {
  const [{ chartData, keyNames }, { isHide, setHide }] = useBarChartState({
    data,
    series,
  });

  const missingData = !data.length || !series.length;

  return (
    <div className="bar-chart-container">
      {missingData && !loading ? (
        <EmptyChart
          icon={emptyIcon}
          title={emptyTitle}
          description={emptyDescription}
          fontFamily={fontFamily}
        />
      ) : (
        <>
          <div className="bar-chart-graphic-container">
            <ResponsiveContainer width="100%" height={120 * data.length}>
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
                {keyNames?.map((name, index) => (
                  <Bar
                    hide={isHide?.(name)}
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
            {keyNames?.map((name, index) => (
              <span
                key={`bar-char-legend-${index}`}
                className={clsx("flex-center", "variant-body1")}
                style={{ fontFamily }}
              >
                <input
                  className="checkbox"
                  type="checkbox"
                  checked={!isHide?.(name)}
                  onChange={(e) => {
                    setHide?.((prev) => ({
                      ...prev,
                      [name]: !e.target.checked,
                    }));
                  }}
                  style={{ accentColor: colors[index % colors.length] }}
                />
                <Point color={colors[index % colors.length]} /> {name}{" "}
              </span>
            ))}
          </div>
        </>
      )}
    </div>
  );
};
