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
  tickFormatterTrue = true,  // Note: true -> Hide the text for the first data point (0 and 00:00) on the X and Y axes without removing the data itself.
  width = "100%",
  height = 300,
  xKey = "name",
  yKey = "value",
  areaColor = "red",//"#8884d8",
  gridColor = "black", // 0.5 black
}) => {
  return (
    <Box maxWidth={"500px"}>
      <ResponsiveContainer width={width} height={height}>
        <AreaChart
          data={data}
          margin={{ top: 20, right: 20, bottom: 20, left: 0 }}
        >
          <CartesianGrid stroke={gridColor}/>
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
            fill={areaColor} // add alpha
            fillOpacity={1}
            dot={{ r: 2, stroke: areaColor, strokeWidth: 2, fill: areaColor}} // Dots are always visible
            activeDot={{ r: 2, stroke: areaColor, strokeWidth: 2, fill: areaColor}}
          />
        </AreaChart>
      </ResponsiveContainer>
    </Box>
  );
};
