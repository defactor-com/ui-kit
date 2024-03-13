import React from "react";
import {
  Area,
  Line,
  YAxis,
  Tooltip,
  TooltipProps,
  CartesianGrid,
  ResponsiveContainer,
  ComposedChart,
} from "recharts";
import clsx from "clsx";
import {
  NameType,
  ValueType,
} from "recharts/types/component/DefaultTooltipContent";

import { Container } from "../Container";
import { FluctuationComponent } from "../FluctuationComponent";
import { Point } from "../Point";
import useGraphicState from "./useGraphicState";

export interface GraphicDataType {
  date: string;
}

export interface DataArrayType {
  fluctuation: string;
  value: number;
}

export interface SeriesDataType {
  data: DataArrayType[];
  name: string;
}

export interface IGraphic {
  data: GraphicDataType[] | undefined;
  series: SeriesDataType[];
  fontFamily?: string;
  currency: string;
  colors: string[];
}

export interface CustomTooltipProps extends TooltipProps<ValueType, NameType> {
  fontFamily?: string;
  keyName?: string;
}

export const CustomTooltip = ({
  fontFamily,
  payload,
  active,
  keyName,
}: CustomTooltipProps) => {
  if (active && payload && payload.length && keyName) {
    const item = payload.find((item) => item.name === keyName);

    if (!item) return <></>;

    return (
      <Container
        externalStyles="toltip-container"
        content={
          <div style={{ fontFamily: fontFamily }}>
            <span className="date-label">{item.payload.date}</span>
            <div className="display-flex">
              <span className="value-label">{item.value}</span>
              <FluctuationComponent
                label={item?.payload.fluctuation[keyName || ""]}
              />
            </div>
          </div>
        }
      />
    );
  }

  return null;
};

export const Graphic = ({
  colors,
  data,
  series,
  currency,
  fontFamily,
}: IGraphic) => {
  const [
    { chartData, keyName, keyNames, tooltipActive },
    { isHide, setHide, handleOpenTooltip, handleCloseTooltip },
  ] = useGraphicState({ data, series });
  const getColorId = (color: string) =>
    color.toLocaleLowerCase().replace(" ", "-");
  return (
    <>
      <ResponsiveContainer width="100%" height="55%" minHeight="200px">
        <ComposedChart data={chartData}>
          <defs>
            {(keyNames || []).map((name, index) => (
              <linearGradient
                key={`gradient-${name}-${index}`}
                id={`color-${getColorId(name)}`}
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="5%"
                  stopColor={colors[index % colors.length]}
                  stopOpacity={0.4}
                />
                <stop
                  offset="95%"
                  stopColor={colors[index % colors.length]}
                  stopOpacity={0.2}
                />
              </linearGradient>
            ))}
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
                textAnchor="end"
                fontWeight={500}
                fontFamily={fontFamily}
              >{`${props.payload.value} ${currency}`}</text>
            )}
          />

          <Tooltip
            content={
              tooltipActive ? (
                <CustomTooltip fontFamily={fontFamily} keyName={keyName} />
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
              fill={`url(#color-${getColorId(name)})`}
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
      <div className={clsx("display-flex", "hide-bars-container")}>
        {(keyNames || []).map((name, index) => (
          <span
            className={clsx("flex-center", "variant-body1")}
            key={`checkbox-${name}`}
          >
            <input
              className="checkbox"
              type="checkbox"
              checked={!isHide?.(name)}
              onChange={(e) => {
                setHide?.((prev) => ({ ...prev, [name]: !e.target.checked }));
              }}
              style={{ accentColor: colors[index % colors.length] }}
            />
            <Point color={colors[index % colors.length]} /> {name}
          </span>
        ))}
      </div>
    </>
  );
};
