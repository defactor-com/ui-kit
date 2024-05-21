import React from "react";
import clsx from "clsx";

import { InformativeContainer } from "../InformativeContainer";
import { FluctuationComponent } from "../FluctuationComponent";
import { Point } from "../Point";

import { useCardState } from "./useCardState";
import { ICardComponent } from "./CardComponentTypes";

export const CardComponent = ({
  label,
  value,
  fluctuation,
  fluctuationValue,
  color,
  fontFamily,
  externalStyles,
  hoverBehavior = false,
  infoTooltip,
}: ICardComponent) => {
  const [{ tooltip }, { handleChange }] = useCardState(infoTooltip);

  const isPonter = tooltip && hoverBehavior;

  return (
    <InformativeContainer
      isPointer={isPonter}
      hoverBehavior={hoverBehavior}
      handleMouseEnter={handleChange}
      handleMouseLeave={handleChange}
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
  );
};
