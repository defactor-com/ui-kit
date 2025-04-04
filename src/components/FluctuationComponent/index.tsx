import React from "react";
import clsx from "clsx";

import { IFluctuationComponent } from "./FluctiationComponentTypes";

export const FluctuationComponent = ({
  label,
  value,
}: IFluctuationComponent) => (
  <div className="fluctuation-container">
    {value && <span className="fluctuation-change-value">{value}</span>}
    <div
      className={clsx(
        "fluctuation-percentage-container",
        label.includes("+") ? "fluctuation-up" : "fluctuation-down"
      )}
    >
      <span className="fluctuation-label">{label}</span>
    </div>
  </div>
);
