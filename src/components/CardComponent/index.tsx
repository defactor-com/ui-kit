import React from "react";
import clsx from "clsx";

import { CardContainer } from "../CardContainer";
import { FluctuationComponent } from "../FluctuationComponent";
import { Point } from "../Point";

import useCardState from "./useCardState";

export interface ICardComponent {
  label: string;
  value: number | string;
  fluctuation?: string;
  fluctuationValue?: string;
  color?: string;
  fontFamily?: string;
  externalStyles?: string;
  tooltip?: React.ReactElement;
}

export const CardComponent = ({
  label,
  value,
  fluctuation,
  fluctuationValue,
  color,
  fontFamily,
  externalStyles,
  tooltip,
}: ICardComponent) => {
  const [{ isHovered }, { setIsHovered }] = useCardState();

  return (
    <CardContainer
      externalStyles={externalStyles}
      content={
        <div
          className="flex-card-column-direction"
          style={{ cursor: tooltip ? "pointer" : "text" }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="flex-card">
            <span
              className={clsx("flex-center", "variant-body1")}
              style={{ fontFamily }}
            >
              {color && <Point color={color} />} {label}
            </span>
            {tooltip && (
              <div>{React.cloneElement(tooltip, { open: isHovered })}</div>
            )}
          </div>
          <div className="flat-body-container">
            <div className="flex-column-direction">
              <span className="variant-h3" style={{ fontFamily }}>
                {value}
              </span>
            </div>
            {fluctuation && (
              <FluctuationComponent
                label={fluctuation}
                value={fluctuationValue}
              />
            )}
          </div>
        </div>
      }
    />
  );
};
