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

import { Point } from "../Point";
import { Container } from "../Container";
import { EmptyChart } from "../EmptyChart";
import { FluctuationComponent } from "../FluctuationComponent";

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
  loading?: boolean;
  emptyIcon?: React.ReactElement | string;
  emptyTitle?: string;
  emptyDescription?: string;
  loaderComponent?: React.ReactNode;
}

export interface ILineChart extends IChart {
  handleChangeFilter?(filter: string): void;
  emptyIcon?: React.ReactElement | string;
  data: LineChartDataType[] | undefined;
  loaderComponent?: React.ReactNode;
  missingData?: boolean | undefined;
  emptyDescription?: string;
  series: SeriesDataType[];
  filterBgColor?: string;
  currentFilter?: string;
  dateFilter?: string[];
  emptyTitle?: string;
  loading?: boolean;
  color?: string;
}

export interface IRenderComponent extends IChart {
  handleOpenTooltip: ((_dotProps: any, payload: any) => void) | undefined;
  getColorId: ((color: string) => string) | undefined;
  isHide: ((keyName: string) => boolean) | undefined;
  handleCloseTooltip: (() => void) | undefined;
  tooltipActive: boolean | undefined;
  missingData: boolean | undefined;
  keyNames: string[] | undefined;
  keyName: string | undefined;
  chartData: any;
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

const RenderComponent = ({
  formatValue = (value) => value.toLocaleString("en-US"),
  handleCloseTooltip,
  handleOpenTooltip,
  emptyDescription,
  loaderComponent,
  tooltipActive,
  missingData,
  getColorId,
  fontFamily,
  emptyTitle,
  emptyIcon,
  chartData,
  keyNames,
  loading,
  keyName,
  isHide,
  colors,
}: IRenderComponent) => {
  if (missingData && !loading) {
    return (
      <EmptyChart
        icon={emptyIcon}
        title={emptyTitle}
        fontFamily={fontFamily}
        description={emptyDescription}
      />
    );
  } else if (loading) {
    return <div>{loaderComponent}</div>;
  } else {
    return (
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
    );
  }
};

const Chart = ({
  data,
  series,
  colors,
  loading,
  emptyIcon,
  emptyTitle,
  fontFamily,
  dateFilter,
  missingData,
  currentFilter,
  color = "white",
  loaderComponent,
  emptyDescription,
  handleChangeFilter,
  filterBgColor = "#26a66b",
  formatValue = (value) => value.toLocaleString("en-US"),
}: ILineChart) => {
  const [
    { chartData, keyName, keyNames, tooltipActive },
    { isHide, setHide, handleOpenTooltip, handleCloseTooltip, getColorId },
  ] = useLineChartState({ data, series });

  return (
    <>
      {dateFilter && (
        <div
          className="display-flex"
          style={{
            width: "100%",
            height: "58px",
            alignItems: "start",
            justifyContent: "end",
          }}
        >
          <div
            className="display-flex"
            style={{
              alignItems: "end",
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
                  style={{
                    marginLeft: '16px',
                    fontFamily: fontFamily,
                    color: item === currentFilter ? color : "#00000099",
                    background:
                      item === currentFilter ? filterBgColor : "#eff2f5",
                  }}
                  onClick={() => handleChangeFilter && handleChangeFilter(item)}
                />
              ))}
            </Tabs>
          </div>
        </div>
      )}
      <RenderComponent
        colors={colors}
        isHide={isHide}
        keyName={keyName}
        loading={loading}
        keyNames={keyNames}
        emptyIcon={emptyIcon}
        chartData={chartData}
        emptyTitle={emptyTitle}
        fontFamily={emptyTitle}
        getColorId={getColorId}
        formatValue={formatValue}
        missingData={missingData}
        tooltipActive={tooltipActive}
        loaderComponent={loaderComponent}
        emptyDescription={emptyDescription}
        handleOpenTooltip={handleOpenTooltip}
        handleCloseTooltip={handleCloseTooltip}
      />
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
  );
};

export const LineChart = ({
  data,
  series,
  colors,
  loading,
  emptyIcon,
  fontFamily,
  dateFilter,
  emptyTitle,
  currentFilter,
  color = "white",
  loaderComponent,
  emptyDescription,
  handleChangeFilter,
  filterBgColor = "#26a66b",
  formatValue = (value) => value.toLocaleString("en-US"),
}: ILineChart) => {
  const [{ missingData }, {}] = useLineChartState({ data, series });

  return (
    <Chart
      data={data}
      color={color}
      series={series}
      colors={colors}
      loading={loading}
      emptyIcon={emptyIcon}
      emptyTitle={emptyTitle}
      fontFamily={fontFamily}
      dateFilter={dateFilter}
      formatValue={formatValue}
      missingData={missingData}
      currentFilter={currentFilter}
      filterBgColor={filterBgColor}
      loaderComponent={loaderComponent}
      emptyDescription={emptyDescription}
      handleChangeFilter={handleChangeFilter}
    />
  );
};
