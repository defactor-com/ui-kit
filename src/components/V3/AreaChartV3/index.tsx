import { Box } from "@mui/material";
import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export interface AreaChartV3Props {
  data: { name: string; value: number }[];
  tickFormatterTrue: boolean;
  width?: number | string;
  height?: number | string;
  xKey?: string;
  yKey?: string;
  areaColor?: string;
  gridColor?: string;
}

export const AreaChartV3: React.FC<AreaChartV3Props> = ({
  data,
  tickFormatterTrue = true,
  width = "100%",
  height = 300,
  xKey = "name",
  yKey = "value",
  areaColor = "#8884d8",
  gridColor = "#f0f0f0",
}) => {
  return (
    <Box maxWidth={"500px"}>
      <ResponsiveContainer width={width} height={height}>
        <AreaChart
          data={data}
          margin={{ top: 20, right: 20, bottom: 20, left: 0 }}
        >
          <CartesianGrid stroke={gridColor} strokeDasharray="3 3" />
          <XAxis
            dataKey={xKey}
            tickFormatter={
              tickFormatterTrue
                ? (tick, index) => (index === 0 ? "" : tick)
                : undefined
            }
            tickLine={false}
          />
          <YAxis
            tickFormatter={
              tickFormatterTrue
                ? (tick, index) => (index === 0 ? "" : tick)
                : undefined
            }
            tickLine={false}
          />
          <Tooltip />
          <Area
            type="monotone"
            dataKey={yKey}
            stroke={areaColor}
            fill={areaColor}
            fillOpacity={0.3}
          />
        </AreaChart>
      </ResponsiveContainer>
    </Box>
  );
};
