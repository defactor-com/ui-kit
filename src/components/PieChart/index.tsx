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

import { IPieChart } from "./PieChartTypes";
import usePieChartState from "./usePieChartState";
import { Box } from "@mui/material";

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
  const radius = innerRadius + (outerRadius - innerRadius) * -2.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="black"
      textAnchor="middle"
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
  showLabels,
  internalContent,
  formatValue = (value) => value.toLocaleString("en-US"),
}: IPieChart) => {
  const [{ colors }, { groupData }] = usePieChartState({ data });

  return (
    <>
      <ResponsiveContainer width="" height="50%" minHeight="250px">
        <RechartsPieChart>
          <Pie
            cx="50%"
            data={[{ value: 10 }]}
            fill="#e0e0e0"
            stroke="#e0e0e0"
            strokeWidth={1}
            dataKey="value"
            paddingAngle={0}
            innerRadius={110}
            outerRadius={122}
            opacity={0.2}
            activeShape={false}
            tooltipType="none"
            onMouseEnter={undefined}
            onClick={undefined}
          />
          <Pie
            cx="50%"
            data={data}
            fill="#8884d8"
            stroke="#8884d8"
            strokeWidth={0}
            dataKey="value"
            paddingAngle={5}
            innerRadius={110}
            outerRadius={122}
            fontFamily={fontFamily}
            label={internalContent ? undefined : renderCustomizedLabel}
          >
            {data.map((_entry, index) => (
              <Cell
                key={`cell-item-${index}`}
                fill={_entry.value > 0 ? _entry.color : "transparent"}
                stroke={_entry.color}
                fontFamily={fontFamily}
                fontWeight={700}
              />
            ))}
          </Pie>
          {data.length > 0 && data.some((item) => item.value > 0) && (
            <Tooltip
              content={
                <CustomTooltip
                  colors={colors || []}
                  fontFamily={fontFamily}
                  formatValue={formatValue}
                />
              }
            />
          )}
          {internalContent && (
            <foreignObject x="0" y="8%" width="100%" height="82%">
              <Box
                width="100%"
                height="100%"
                display="flex"
                alignItems="center"
                flexDirection="column"
              >
                {internalContent}
              </Box>
            </foreignObject>
          )}
        </RechartsPieChart>
      </ResponsiveContainer>
      {showLabels &&
        groupData &&
        groupData(data).map((data, index) => (
          <div className="pie-chart-legend-container" key={`subgroup-${index}`}>
            {(data || []).map(({ name, color }) => (
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
  sx,
  data,
  loading,
  emptyIcon,
  emptyTitle,
  fontFamily,
  internalContent,
  loaderComponent,
  emptyDescription,
  showLabels = true,
  chartPosition = "center",
  formatValue = (value) => value.toLocaleString("en-US"),
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
        <Chart
          data={data}
          showLabels={showLabels}
          fontFamily={fontFamily}
          formatValue={formatValue}
          internalContent={internalContent}
        />
      );
    }
  };

  return (
    <Box
      className="pie-chart-container"
      sx={{ ...sx, justifyContent: chartPosition }}
    >
      <RenderComponent />
    </Box>
  );
};
