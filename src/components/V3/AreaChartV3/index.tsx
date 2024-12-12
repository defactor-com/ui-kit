import { formatLargeNumber } from "../../../utils/formatValues";
import { Box, alpha } from "@mui/material";
import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

export interface AreaChartV3Props {
  data: { time: string; value: number }[];
  hideFirstTickXTrue?: boolean;
  hideFirstTickYTrue?: boolean;
  width?: number | string;
  maxWidth?: number | string;
  height?: number | string;
  xKey?: string;
  yKey?: string;
  areaColor?: string;
  boxBgColor?: string;
  boxPadding?: string;
}

export const AreaChartV3: React.FC<AreaChartV3Props> = ({
  boxBgColor = "white",
  boxPadding = "16px 16px 0px 0px",
  data,
  hideFirstTickXTrue = false,
  hideFirstTickYTrue = true,
  width = "100%",
  height = 220,
  maxWidth = "500px",
  xKey = "time",
  yKey = "value",
  areaColor = "#5A5BEB", 
}) => {
  return (
    <Box maxWidth={maxWidth} height={height} bgcolor={boxBgColor} p={boxPadding}>
      <ResponsiveContainer width={width} height="100%">
        <AreaChart data={data}>
          <CartesianGrid
            stroke="#BDBDBD"
            strokeOpacity={1}
            strokeWidth={1}
            strokeDasharray="3 6"
            vertical={false}
          />
          <XAxis
            dataKey={xKey}
            tickFormatter={
              hideFirstTickXTrue
                ? (tick, index) => (index === 0 ? "" : tick)
                : undefined
            }
            tickLine={false}
            axisLine={false}
            tick={{
              fontSize: 11,
              fontWeight: 700,
              fill: "#7C7D7E",
            }}
          />
          <YAxis
            tickFormatter={
              hideFirstTickYTrue
                ? (tick, index) => (index === 0 ? "" : formatLargeNumber(tick))
                : formatLargeNumber
            }
            tickLine={false}
            axisLine={false}
            tick={{
              fontSize: 11,
              fontWeight: 700,
              fill: "#7C7D7E",
            }}
          />
          <Area
            dataKey={yKey}
            stroke={areaColor}
            fill={alpha(areaColor, 0.2)}
            fillOpacity={1}
            dot={{ r: 2, stroke: areaColor, strokeWidth: 2, fill: areaColor }}
            activeDot={{
              r: 2,
              stroke: areaColor,
              strokeWidth: 2,
              fill: areaColor,
            }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </Box>
  );
};
