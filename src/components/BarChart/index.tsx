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
import { Tabs, Tab } from "@mui/material";
import clsx from "clsx";

import { Point } from "../Point";
import { Container } from "../Container";
import { EmptyChart } from "../EmptyChart";
import { CustomTooltipProps, IChart } from "../LineChart";

import useBarChartState from "./useBarChartState";

export interface ChartSeriesType {
  name: string;
  data: number[];
}

export interface IBarChart extends IChart {
  data: string[];
  series: ChartSeriesType[];
  displayDirection?: "vertical" | "horizontal";
  dateFilter?: string[];
  color?: string;
  filterBgColor?: string;
  currentFilter?: string;
  handleChangeFilter?(filter: string): void;
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

export const BarChart = ({
  data,
  series,
  colors,
  fontFamily,
  dateFilter,
  color = "white",
  currentFilter,
  filterBgColor = "#26a66b",
  handleChangeFilter,
  formatValue = (value) => value.toLocaleString("en-US"),
  displayDirection = "horizontal",
  loading,
  emptyIcon,
  emptyTitle,
  emptyDescription,
}: IBarChart) => {
  const [
    { chartData, keyNames, missingData },
    { isHide, setHide, getCoordinates },
  ] = useBarChartState({
    data,
    series,
  });

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
            {dateFilter && (
              <div
                className="display-flex"
                style={{
                  width: "100%",
                  justifyContent: "end",
                }}
              >
                <div
                  className="display-flex"
                  style={{
                    alignItems: "end",
                    width: "40%",
                    justifyContent: "center",
                  }}
                >
                  <Tabs
                    value={currentFilter}
                    centered
                    variant="scrollable"
                    scrollButtons="auto"
                    classes={{
                      root: "tabs-filter",
                      indicator: "tabs-indicator",
                      flexContainer: "tabs-flex-container",
                    }}
                  >
                    {dateFilter.map((item) => (
                      <Tab
                        classes={{
                          root: "tab-filter",
                        }}
                        value={item}
                        label={item}
                        onClick={() =>
                          handleChangeFilter && handleChangeFilter(item)
                        }
                        style={{
                          fontFamily: fontFamily,
                          color: item === currentFilter ? color : "#00000099",
                          background:
                            item === currentFilter ? filterBgColor : "#eff2f5",
                        }}
                      />
                    ))}
                  </Tabs>
                </div>
              </div>
            )}
            <ResponsiveContainer width="100%" height={120 * data.length}>
              <RechartsBarChart
                data={chartData}
                layout={
                  displayDirection === "vertical" ? "horizontal" : "vertical"
                }
                barGap={8}
              >
                {displayDirection === "horizontal" ? (
                  <CartesianGrid
                    strokeDasharray="12 12"
                    horizontalCoordinatesGenerator={(props) =>
                      getCoordinates(props.yAxis.height, props.yAxis.bandSize)
                    }
                  />
                ) : (
                  <CartesianGrid
                    strokeDasharray="12 12"
                    verticalCoordinatesGenerator={(props) =>
                      getCoordinates(props.xAxis.width, props.xAxis.bandSize)
                    }
                  />
                )}
                <XAxis
                  type={displayDirection === "vertical" ? "category" : "number"}
                  axisLine={false}
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
                      {displayDirection === "horizontal"
                        ? formatValue(props.payload.value)
                        : chartData[props.payload.index].name}
                    </text>
                  )}
                />
                <YAxis
                  type={displayDirection === "vertical" ? "number" : "category"}
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
                      {displayDirection === "horizontal"
                        ? chartData[props.payload.index].name
                        : formatValue(props.payload.value)}
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
          <div className={clsx("display-flex", "hide-bars-container")}>
            <div className="display-flex" style={{ gap: "16px" }}>
              {(keyNames || []).map((name, index) => (
                <span
                  className={clsx("flex-center", "variant-body1")}
                  style={{ fontFamily: fontFamily }}
                  key={`checkbox-${name}`}
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
                  <Point color={colors[index % colors.length]} /> {name}
                </span>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};
