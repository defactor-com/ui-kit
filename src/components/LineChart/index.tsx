import React from "react";
import {
  Area,
  Line,
  YAxis,
  Tooltip,
  TooltipProps,
  CartesianGrid,
  ResponsiveContainer,
  ComposedChart,
} from "recharts";
import clsx from "clsx";
import { Tabs, Tab } from "@mui/material";
import {
  NameType,
  ValueType,
} from "recharts/types/component/DefaultTooltipContent";

import { Container } from "../Container";
import { FluctuationComponent } from "../FluctuationComponent";
import { Point } from "../Point";

import useLineChartState from "./useLineChartState";

export interface LineChartDataType {
  date: string;
}

export interface DataArrayType {
  fluctuation: string;
  fluctuationValue?: string;
  value: number;
}

export interface SeriesDataType {
  data: DataArrayType[];
  name: string;
}

export type FormatValueType = (
  value: number | string,
  options?: Intl.NumberFormatOptions
) => string;

export interface IChart {
  fontFamily?: string;
  colors: string[];
  formatValue?: FormatValueType;
}

export interface ILineChart extends IChart {
  data: LineChartDataType[] | undefined;
  series: SeriesDataType[];
  dateFilter?: string[];
  color?: string;
  filterFuntion?(filter: string): void;
}

export interface CustomTooltipProps extends TooltipProps<ValueType, NameType> {
  fontFamily?: string;
  colors: string[];
  formatValue: FormatValueType;
}

export interface LineChartTooltipProps extends CustomTooltipProps {
  keyName?: string;
}

export const CustomTooltip = ({
  fontFamily,
  payload,
  active,
  keyName,
  formatValue,
}: LineChartTooltipProps) => {
  if (active && payload && payload.length && keyName) {
    const item = payload.find((item) => item.name === keyName);

    if (!item) return <></>;

    const fluctuation = item?.payload?.fluctuation?.[keyName || ""];

    return (
      <Container
        externalStyles="tooltip-container"
        content={
          <>
            <span className="date-label" style={{ fontFamily }}>
              {item.payload.date}
            </span>
            <div className={clsx("flex-center", "margin-top")}>
              <span className="value-label" style={{ fontFamily }}>
                {formatValue(Number(item.value))}
              </span>
              <FluctuationComponent
                label={fluctuation?.percentage}
                value={fluctuation?.value}
              />
            </div>
          </>
        }
      />
    );
  }

  return null;
};

export const LineChart = ({
  data,
  series,
  colors,
  fontFamily,
  dateFilter,
  color = "#1976d2",
  filterFuntion,
  formatValue = (value) => value.toLocaleString("en-US"),
}: ILineChart) => {
  const [
    { chartData, keyName, keyNames, tooltipActive, currentFilter },
    {
      isHide,
      setHide,
      handleOpenTooltip,
      handleCloseTooltip,
      getColorId,
      handleChangeFilter,
    },
  ] = useLineChartState({ data, series, dateFilter, filterFuntion });

  return (
    <>
      <ResponsiveContainer
        width="97%"
        height="55%"
        minHeight="200px"
        className="line-chart-container"
      >
        <ComposedChart data={chartData}>
          <defs>
            {(keyNames || []).map((name, index) => (
              <linearGradient
                key={`gradient-${name}-${index}`}
                id={`color-${getColorId ? getColorId(name) : ""}`}
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="5%"
                  stopColor={colors[index % colors.length]}
                  stopOpacity={0.2}
                />
                <stop
                  offset="95%"
                  stopColor={colors[index % colors.length]}
                  stopOpacity={0.1}
                />
              </linearGradient>
            ))}
          </defs>
          <CartesianGrid strokeDasharray="12 12" />
          <YAxis
            axisLine={false}
            domain={["auto", "auto"]}
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
                {formatValue(props.payload.value)}
              </text>
            )}
          />
          <Tooltip
            content={
              tooltipActive ? (
                <CustomTooltip
                  colors={colors}
                  keyName={keyName}
                  fontFamily={fontFamily}
                  formatValue={formatValue}
                />
              ) : (
                <></>
              )
            }
          />
          {(keyNames || []).map((name, index) => (
            <Area
              key={`area-${name}`}
              hide={isHide?.(name)}
              dot={false}
              activeDot={false}
              dataKey={name}
              stroke={colors[index % colors.length]}
              type="monotone"
              strokeWidth={2}
              fillOpacity={1}
              fill={`url(#color-${getColorId ? getColorId(name) : ""})`}
            />
          ))}
          {(keyNames || []).map((name, index) => (
            <Line
              key={`line-${name}`}
              hide={isHide?.(name)}
              dot={{
                stroke: colors[index % colors.length],
                strokeWidth: 2,
                r: 5,
                opacity: 1,
                fill: colors[index % colors.length],
              }}
              activeDot={{
                strokeWidth: 2,
                stroke: colors[index % colors.length],
                fill:
                  keyName === name ? "white" : colors[index % colors.length],
                onMouseOver: handleOpenTooltip,
                onClick: handleOpenTooltip,
              }}
              onMouseLeave={handleCloseTooltip}
              dataKey={name}
              stroke={colors[index % colors.length]}
              type="monotone"
              strokeWidth={2}
              fillOpacity={1}
            />
          ))}
        </ComposedChart>
      </ResponsiveContainer>
      <div
        className={clsx("display-flex", "hide-bars-container")}
        style={{
          justifyContent: "space-between",
        }}
      >
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
                  setHide?.((prev) => ({ ...prev, [name]: !e.target.checked }));
                }}
                style={{ accentColor: colors[index % colors.length] }}
              />
              <Point color={colors[index % colors.length]} /> {name}
            </span>
          ))}
        </div>
        {dateFilter && (
          <div style={{ width: "max-content " }}>
            <Tabs
              value={currentFilter}
              centered
              onChange={handleChangeFilter}
              variant="scrollable"
              scrollButtons="auto"
              classes={{ root: "tabs-filter", indicator: "tabs-indicator" }}
            >
              {dateFilter.map((item) => (
                <Tab
                  classes={{
                    root: "tab-filter",
                  }}
                  value={item}
                  label={item}
                  style={{
                    fontFamily: fontFamily,
                    color: item === currentFilter ? color : "#00000099",
                    background: item === currentFilter ? "white" : "",
                  }}
                />
              ))}
            </Tabs>
          </div>
        )}
      </div>
    </>
  );
};
