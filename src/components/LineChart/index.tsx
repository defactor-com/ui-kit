import React from "react";
import {
  Area,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ComposedChart,
  ResponsiveContainer,
} from "recharts";
import clsx from "clsx";
import { Tabs, Tab, Box } from "@mui/material";

import { Point } from "../Point";
import { Container } from "../Container";
import { EmptyChart } from "../EmptyChart";
import { FluctuationComponent } from "../FluctuationComponent";

import {
  ILineChart,
  IRenderComponent,
  LineChartTooltipProps,
} from "./ChartsTypes";

import useLineChartState from "./useLineChartState";

export const CustomTooltip = ({
  formatValue,
  formatDate,
  fontFamily,
  keyName,
  payload,
  active,
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
              {formatDate ? formatDate(item.payload.date) : item.payload.date}
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
  formatValueAxisX = (value) => new Date(value).toLocaleString(),
  formatValueAxisY = (value) => value.toLocaleString("en-US"),
  formatDate = (value) => new Date(value).toLocaleString(),
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
    return <>{loaderComponent}</>;
  } else {
    return (
      <ResponsiveContainer
        width="98%"
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
          <XAxis
            dataKey="date"
            axisLine={false}
            tick={(props) => (
              <text
                fontSize={11}
                fill="#7C7D7E"
                textAnchor="end"
                fontWeight={700}
                x={props.x + 20}
                y={props.y + 15}
                fontFamily={fontFamily}
              >
                {formatValueAxisX(props.payload.value)}
              </text>
            )}
          />
          <YAxis
            axisLine={false}
            domain={["auto", "auto"]}
            tick={(props) => (
              <text
                x={props.x}
                y={props.y}
                fontSize={11}
                fill="#7C7D7E"
                textAnchor="end"
                fontWeight={700}
                fontFamily={fontFamily}
              >
                {formatValueAxisY(props.payload.value)}
              </text>
            )}
          />
          <Tooltip
            content={
              tooltipActive ? (
                <CustomTooltip
                  colors={colors}
                  keyName={keyName}
                  formatDate={formatDate}
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
  formatDate = (value) => new Date(value).toLocaleString(),
  formatValueAxisY = (value) => value.toLocaleString("en-US"),
  formatValueAxisX = (value) => new Date(value).toLocaleString(),
}: ILineChart) => {
  const [
    { chartData, keyName, keyNames, tooltipActive },
    { isHide, setHide, handleOpenTooltip, handleCloseTooltip, getColorId },
  ] = useLineChartState({ data, series });

  return (
    <>
      {dateFilter && (
        <div className={clsx("display-flex", "filter-container")}>
          <div className={clsx("display-flex", "filter-card")}>
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
      <Box minHeight={200}>
        <RenderComponent
          colors={colors}
          isHide={isHide}
          keyName={keyName}
          loading={loading}
          keyNames={keyNames}
          emptyIcon={emptyIcon}
          chartData={chartData}
          emptyTitle={emptyTitle}
          fontFamily={fontFamily}
          getColorId={getColorId}
          formatDate={formatDate}
          formatValue={formatValue}
          missingData={missingData}
          tooltipActive={tooltipActive}
          loaderComponent={loaderComponent}
          formatValueAxisY={formatValueAxisY}
          formatValueAxisX={formatValueAxisX}
          emptyDescription={emptyDescription}
          handleOpenTooltip={handleOpenTooltip}
          handleCloseTooltip={handleCloseTooltip}
        />
      </Box>
      <div className={clsx("display-flex", "hide-bars-container")}>
        <div className={clsx("display-flex", "checkbox-container")}>
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
  formatDate = (value) => new Date(value).toLocaleString(),
  formatValueAxisY = (value) => value.toLocaleString("en-US"),
  formatValueAxisX = (value) => new Date(value).toLocaleString(),
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
      formatDate={formatDate}
      formatValue={formatValue}
      missingData={missingData}
      currentFilter={currentFilter}
      filterBgColor={filterBgColor}
      loaderComponent={loaderComponent}
      formatValueAxisY={formatValueAxisY}
      formatValueAxisX={formatValueAxisX}
      emptyDescription={emptyDescription}
      handleChangeFilter={handleChangeFilter}
    />
  );
};
