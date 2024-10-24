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
import { Tabs, Tab, Checkbox } from "@mui/material";
import clsx from "clsx";

import { Point } from "../Point";
import { Container } from "../Container";
import { EmptyChart } from "../EmptyChart";
import { CustomTooltipProps } from "../LineChart/ChartsTypes";

import { IBarChart } from "./BarChartTypes";
import useBarChartState from "./useBarChartState";

const CustomTooltip = ({
  displayDirection,
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
      externalStyles={clsx(
        "tooltip-container",
        displayDirection === "vertical"
          ? "vertical-padding"
          : "horizontal-padding"
      )}
      content={
        <span>
          <span className="date-label" style={{ fontFamily }}>
            {" "}
            {name}
          </span>
          <div className="flex-column-direction">
            {payload.map((item, index) => (
              <div
                key={`bar-chart-tooltip-${index}`}
                className={clsx("bar-chart-tooltip-item", "margin-top")}
              >
                <span
                  style={{ fontFamily }}
                  className={clsx(
                    "flex-center",
                    displayDirection === "vertical" ? "variant-caption" : ""
                  )}
                >
                  <Point color={colors[index % colors.length]} />{" "}
                  {`${item.name}: `}
                </span>
                <span
                  className={clsx(
                    displayDirection === "vertical"
                      ? "variant-caption"
                      : "variant-h3",
                    "value-label-bartchart"
                  )}
                  style={{ fontFamily }}
                >
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

const Chart = ({
  data,
  series,
  colors,
  showXAxis,
  fontFamily,
  dateFilter,
  currentFilter,
  color = "white",
  handleChangeFilter,
  filterBgColor = "#26a66b",
  displayDirection = "horizontal",
  formatValue = (value) => value.toLocaleString("en-US"),
  formatValueVertical = (value) => value.toLocaleString("en-US"),
}: IBarChart) => {
  const [{ chartData, keyNames }, { isHide, setHide, getCoordinates }] =
    useBarChartState({
      data,
      series,
    });

  return (
    <>
      <div
        className={
          displayDirection === "vertical" ? "" : "bar-chart-graphic-container"
        }
      >
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
        <ResponsiveContainer
          height={125 * data.length}
          width={displayDirection === "vertical" ? "98%" : "100%"}
          style={{ marginLeft: displayDirection === "vertical" ? "2%" : 0 }}
        >
          <RechartsBarChart
            barGap={8}
            data={chartData}
            layout={displayDirection === "vertical" ? "horizontal" : "vertical"}
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
                strokeDasharray="6 4"
                verticalCoordinatesGenerator={(props) =>
                  getCoordinates(props.xAxis.width, props.xAxis.bandSize, 68)
                }
              />
            )}
            {showXAxis && (
              <XAxis
                type={displayDirection === "vertical" ? "category" : "number"}
                stroke="transparent"
                axisLine={false}
                tick={(props) => (
                  <text
                    fontSize={11}
                    fill="#7C7D7E"
                    x={props.x + 10}
                    y={props.y + 15}
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
            )}
            <YAxis
              type={displayDirection === "vertical" ? "number" : "category"}
              stroke="#transparent"
              axisLine={false}
              tick={(props) => {
                return displayDirection === "horizontal" ? (
                  <foreignObject
                    width="60"
                    x="initial"
                    height="115"
                    y={props.y - 58}
                  >
                    <div
                      style={{
                        height: "100%",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <div
                        style={{
                          fontSize: "11px",
                          color: "#7C7D7E",
                          fontWeight: "500",
                          fontFamily: fontFamily,
                          wordBreak: "break-word",
                        }}
                      >
                        {chartData[props.payload.index].name}
                      </div>
                    </div>
                  </foreignObject>
                ) : (
                  <foreignObject
                    x={props.x - 61}
                    y={props.y - 14}
                    height="20"
                    width="66"
                  >
                    <div
                      style={{
                        fontSize: "11px",
                        color: "#7C7D7E",
                        fontWeight: "500",
                        fontFamily: fontFamily,
                        textOverflow: "ellipsis",
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                        textAlign: "end",
                      }}
                    >
                      {formatValueVertical(props.payload.value)}
                    </div>
                  </foreignObject>
                );
              }}
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
                  displayDirection={displayDirection}
                />
              }
            />
          </RechartsBarChart>
        </ResponsiveContainer>
      </div>
      <div
        className={clsx(
          "display-flex",
          displayDirection === "vertical"
            ? "hide-bars-container-vertical"
            : "hide-bars-container"
        )}
      >
        <div className={clsx("display-flex", "checkbox-container")}>
          {(keyNames || []).map((name, index) => (
            <span
              className={clsx("flex-center", "variant-body1")}
              style={{ fontFamily: fontFamily }}
              key={`checkbox-${name}`}
            >
              <Checkbox
                checked={!isHide?.(name)}
                onChange={(e) => {
                  setHide?.((prev) => ({
                    ...prev,
                    [name]: !e.target.checked,
                  }));
                }}
                sx={{
                  color: colors[index % colors.length],
                  "&.Mui-checked": {
                    color: colors[index % colors.length],
                  },
                  padding:
                    displayDirection === "vertical" ? "8px 8px 8px 0" : "8px",
                }}
              />
              <Point color={colors[index % colors.length]} /> {name}
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

export const BarChart = ({
  data,
  series,
  colors,
  loading,
  emptyIcon,
  dateFilter,
  fontFamily,
  emptyTitle,
  currentFilter,
  color = "white",
  loaderComponent,
  emptyDescription,
  showXAxis = true,
  handleChangeFilter,
  filterBgColor = "#26a66b",
  displayDirection = "horizontal",
  formatValue = (value) => value.toLocaleString("en-US"),
  formatValueVertical = (value) => value.toLocaleString("en-US"),
}: IBarChart) => {
  const [{ missingData }, {}] = useBarChartState({
    data,
    series,
  });

  const RenderComponent = () => {
    if (missingData && !loading) {
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
        <Chart
          data={data}
          color={color}
          series={series}
          colors={colors}
          showXAxis={showXAxis}
          fontFamily={fontFamily}
          dateFilter={dateFilter}
          formatValue={formatValue}
          currentFilter={currentFilter}
          filterBgColor={filterBgColor}
          displayDirection={displayDirection}
          handleChangeFilter={handleChangeFilter}
          formatValueVertical={formatValueVertical}
        />
      );
    }
  };

  return (
    <div className="bar-chart-container">
      <RenderComponent />
    </div>
  );
};
