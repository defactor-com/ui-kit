import React from "react";
import clsx from "clsx";

import { CardContainer } from "../CardContainer";
import { FluctuationComponent } from "../FluctuationComponent";
import { Point } from "../Point";

export interface ICardComponent {
  label: string;
  value: number | string;
  fluctuation?: string;
  fluctuationValue?: string;
  color?: string;
  fontFamily?: string;
  externalStyles?: string;
  tooltip?: React.ReactElement;
  hoverBehavior?: boolean;
  handleChange: (newValue: boolean) => void;
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
  hoverBehavior = false,
  handleChange,
}: ICardComponent) => {
  return (
    <div
      style={{
        cursor: tooltip && hoverBehavior ? "pointer" : "text",
        width: "max-content",
      }}
      onMouseEnter={() => handleChange(true && hoverBehavior)}
      onMouseLeave={() => handleChange(false)}
    >
      <CardContainer
        externalStyles={externalStyles}
        content={
          <div className="flex-card-column-direction">
            <div className="flex-card">
              <span
                className={clsx("flex-center", "variant-body1")}
                style={{ fontFamily }}
              >
                {color && <Point color={color} />} {label}
              </span>
              {tooltip && <div>{tooltip}</div>}
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
    </div>
  );
};
