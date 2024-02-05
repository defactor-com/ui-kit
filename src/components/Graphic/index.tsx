import React from "react";
import clsx from "clsx";
import {
  Area,
  YAxis,
  Tooltip,
  AreaChart,
  TooltipProps,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import {
  NameType,
  ValueType,
} from "recharts/types/component/DefaultTooltipContent";

import { Container } from "../Container";
import { FluctuationComponent } from "../FluctuationComponent";

export interface GraphicDataType {
  fluctuation: string;
  date: string;
  uv: number;
}

export interface IGraphic {
  data: GraphicDataType[] | undefined;
  currency: string;
  color: string;
}

const CustomTooltip: React.FC<TooltipProps<ValueType, NameType>> = ({
  payload,
  active,
}) => {
  if (active && payload && payload.length) {
    return (
      <Container
        externalStyles="toltip-container"
        content={
          <div>
            <span className="date-label">{payload[0].payload.date}</span>
            <div className="display-flex">
              <span className="value-label">{payload[0].value}</span>
              <FluctuationComponent label={payload[0]?.payload?.fluctuation} />
            </div>
          </div>
        }
      />
    );
  }

  return null;
};

const Graphic = ({ color, data, currency }: IGraphic) => (
  <ResponsiveContainer width="100%" height="55%">
    <AreaChart data={data}>
      <defs>
        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor={color} stopOpacity={0.8} />
          <stop offset="95%" stopColor={color} stopOpacity={0} />
        </linearGradient>
      </defs>
      <CartesianGrid strokeDasharray="12 12" vertical={false} />
      <YAxis
        axisLine={false}
        tick={(props) => (
          <text
            x={props.x}
            y={props.y}
            fontSize={12}
            fill="#7C7D7E"
            fontWeight={700}
            textAnchor="end"
          >{`${props.payload.value} ${currency}`}</text>
        )}
      />
      <Tooltip content={<CustomTooltip />} />
      <Area
        dataKey="uv"
        stroke={color}
        type="monotone"
        strokeWidth={2}
        fillOpacity={1}
        fill="url(#colorUv)"
      />
    </AreaChart>
  </ResponsiveContainer>
);

export default Graphic;
