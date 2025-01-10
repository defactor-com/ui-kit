import React from "react";
import { Box, alpha, useTheme, useMediaQuery } from "@mui/material";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { formatLargeNumber } from "../../../utils/formatValues";

export interface AreaChartV3Props {
  data: { time: string; value: number }[];
  hideFirstTickXTrue?: boolean;
  hideFirstTickYTrue?: boolean;
  hideTickValuesOnMobile?: boolean;
  width?: number | string;
  maxWidth?: number | string;
  height?: number | string;
  xKey?: string;
  yKey?: string;
  areaColor?: string;
  boxBgColor?: string;
  fillTickColor?: string;
  strokeColor?: string;
  boxPadding?: string | number;
  ml?: string | number;
}

export const AreaChartV3: React.FC<AreaChartV3Props> = ({
  data,
  xKey = "time",
  yKey = "value",
  height = 220,
  maxWidth = "none",
  boxBgColor = "#ffffff",
  areaColor = "#5A5BEB",
  fillTickColor = "#7C7D7E",
  strokeColor = "#BDBDBD",
  boxPadding = "16px 16px 0px 0px",
  hideFirstTickXTrue = false,
  hideFirstTickYTrue = true,
  hideTickValuesOnMobile = false,
  ml = "-44px",
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      maxWidth={maxWidth}
      height={height}
      bgcolor={boxBgColor}
      p={boxPadding}
      ml={hideTickValuesOnMobile && isMobile ? ml : undefined}
    >
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{ top: 10, right: 10, bottom: 0, left: 10 }}
        >
          <CartesianGrid
            stroke={strokeColor}
            strokeOpacity={1}
            strokeWidth={1}
            strokeDasharray="3 6"
            vertical={false}
            horizontal={true}
          />
          <XAxis
            dataKey={xKey}
            tickFormatter={
              hideFirstTickXTrue
                ? (tick, index) => (index === 0 ? "" : tick)
                : (tick) => tick
            }
            tickLine={false}
            axisLine={false}
            orientation="bottom"
            tick={
              hideTickValuesOnMobile && isMobile
                ? { fontSize: 0 }
                : {
                    fontSize: 11,
                    fontWeight: 700,
                    fill: fillTickColor,
                  }
            }
          />
          <YAxis
            tickFormatter={
              hideFirstTickYTrue
                ? (tick, index) => (index === 0 ? "" : formatLargeNumber(tick))
                : formatLargeNumber
            }
            tickLine={false}
            axisLine={false}
            orientation="left"
            tick={
              hideTickValuesOnMobile && isMobile
                ? { fontSize: 0 }
                : {
                    fontSize: 11,
                    fontWeight: 700,
                    fill: fillTickColor,
                  }
            }
            domain={["auto", "auto"]}
          />
          <Area
            type="monotone"
            dataKey={yKey}
            stroke={areaColor}
            fill={alpha(areaColor, 0.1)}
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
