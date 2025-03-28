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
  color,
  fontFamily,
  fluctuation,
  infoTooltip,
  externalStyles,
  optionalStyles,
  fluctuationValue,
  hoverBehavior = false,
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
      optionalStyles={optionalStyles}
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
          {value && (
            <div className="flat-body-container">
              <div className="flex-column-direction">
                <span
                  className="variant-h3"
                  style={{ fontFamily, wordBreak: "break-all" }}
                >
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
          )}
        </div>
      }
    />
  );
};
