import React from "react";
import { Box, alpha, useTheme, useMediaQuery, Typography } from "@mui/material";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
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

export const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <Box
        sx={{
          backgroundColor: "white",
          padding: "8px",
          borderRadius: "4px",
          boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Typography sx={{ margin: 0, fontWeight: 600 }}>
          {payload[0].payload.time}
        </Typography>
        <Typography sx={{ margin: 0, color: payload[0].color }}>
          Value: {formatLargeNumber(payload[0].value)}
        </Typography>
      </Box>
    );
  }
  return null;
};

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

  const maxTicks = 5;
  const tickInterval =
    data.length > maxTicks ? Math.floor(data.length / maxTicks) : 0;

  const maxDots = 10;
  const dotInterval =
    data.length > maxDots ? Math.floor(data.length / maxDots) : 1;

  const renderDots = (dotProps: any) => {
    const { cx, cy, index } = dotProps;
    if (index % dotInterval !== 0) {
      return <g />;
    }
    return (
      <circle
        cx={cx}
        cy={cy}
        r={2}
        stroke={areaColor}
        strokeWidth={2}
        fill={areaColor}
      />
    );
  };

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
            interval={tickInterval}
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
            domain={[
              (dataMin: number, dataMax: number) => {
                if (!isFinite(dataMax)) return 0;
                return dataMin === dataMax ? dataMax * 1.1 : dataMax;
              },
              "auto",
            ]}
          />
          <Tooltip content={<CustomTooltip />} />
          <Area
            type="monotone"
            dataKey={yKey}
            stroke={areaColor}
            fill={alpha(areaColor, 0.1)}
            fillOpacity={1}
            dot={renderDots}
            activeDot={renderDots}
          />
        </AreaChart>
      </ResponsiveContainer>
    </Box>
  );
};
