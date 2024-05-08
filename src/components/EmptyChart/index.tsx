import React from "react";
import clsx from "clsx";

export interface IEmptyChart {
  icon?: React.ReactElement | string;
  title?: string;
  description?: string;
  fontFamily?: string;
}

export const EmptyChart = ({
  icon,
  title,
  description,
  fontFamily,
}: IEmptyChart) => (
  <div className="empt-state-container">
    <div className="img-empty">
      {icon && typeof icon === "string" ? (
        <img src={icon} alt={title} className="menu-option-icon" />
      ) : (
        icon
      )}
    </div>
    <span
      className={clsx("variant-h3", "small-margin-button")}
      style={{ fontFamily: fontFamily }}
    >
      {title}
    </span>
    <span style={{ fontFamily: fontFamily }} className="variant-body1">
      {description}
    </span>
  </div>
);
