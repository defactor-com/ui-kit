import React from "react";
import {
  Area,
  XAxis,
  YAxis,
  Tooltip,
  AreaChart,
  TooltipProps,
  ResponsiveContainer,
} from "recharts";
import {
  NameType,
  ValueType,
} from "recharts/types/component/DefaultTooltipContent";

import { Container } from "../Container";

interface DataType {
  // name: string;
  amt: number;
  uv: number;
  pv: number;
}

const data: DataType[] = [
  {
    // name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    // name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    // name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    // name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    // name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
];

const CustomTooltip: React.FC<TooltipProps<ValueType, NameType>> = ({
  active,
  payload,
  label,
}) => {
  if (active && payload && payload.length) {
    return (
      <Container
        externalStyles="toltip-container"
        content={
          <>
            <p className="label">{`${label} : ${payload[0].value}`}</p>
            <span
              style={{
                fontSize: "11px",
                fontWeight: 700,
                lineHeight: "100%",
                letterSpacing: "0.22px",
              }}
            >
              Anything you want can be added here.
            </span>
            <span className="desc">Anything you want can be added here.</span>
          </>
        }
      />
    );
  }

  return null;
};

const Graphic: React.FC = () => (
  <ResponsiveContainer width="100%" height="100%">
    <AreaChart data={data}>
      <defs>
        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#26A66B" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#26A66B" stopOpacity={0} />
        </linearGradient>
      </defs>
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip content={<CustomTooltip />} />
      <Area
        type="monotone"
        dataKey="uv"
        stroke="#26A66B"
        fillOpacity={1}
        fill="url(#colorUv)"
      />
    </AreaChart>
  </ResponsiveContainer>
);

export default Graphic;
