import React from "react";
import clsx from "clsx";

export interface IFluctuationComponent {
  label: string;
}

export const FluctuationComponent = ({ label }: IFluctuationComponent) => (
  <div
    className={clsx(
      "fluctuation-container",
      label.includes("+") ? "fluctuation-up" : "fluctuation-down"
    )}
  >
    <span className="fluctuation-label">{label}</span>
  </div>
);
