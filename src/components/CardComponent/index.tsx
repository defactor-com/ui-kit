import React from "react";
import clsx from "clsx";

import { CardContainer } from "../CardContainer";
import { FluctuationComponent } from "../FluctuationComponent";
import { Point } from "../Point";

export interface ICardComponent {
  label: string;
  value: number | string;
  fluctuation?: string;
  color?: string;
  fontFamily?: string;
  externalStyles?: string;
}

export const CardComponent = ({
  label,
  value,
  fluctuation,
  color,
  fontFamily,
  externalStyles,
}: ICardComponent) => (
  <CardContainer
    externalStyles={externalStyles}
    content={
      <div className="flex-column-direction">
        <span
          className={clsx("flex-center", "variant-body1")}
          style={{ fontFamily }}
        >
          {color && <Point color={color} />} {label}
        </span>
        <div className="flat-body-container">
          <div className="flex-column-direction">
            <span className="variant-h3" style={{ fontFamily }}>
              {value}
            </span>
          </div>
          {fluctuation && <FluctuationComponent label={fluctuation} />}
        </div>
      </div>
    }
  />
);
