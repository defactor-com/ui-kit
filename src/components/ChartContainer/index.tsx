import React from "react";
import clsx from "clsx";

import { IChartContainer } from "./ChartContainerTypes";

export const ChartContainer = ({
  chartDescription,
  externalStyles,
  chartSubtitle,
  fontFamily,
  haveFilter,
  content,
  tooltip,
}: IChartContainer) => (
  <div className={clsx(externalStyles, "chart-container")}>
    <div
      className={clsx(
        "flex-column-direction",
        haveFilter ? "margin-bottom-high-filter" : "margin-bottom-high"
      )}
    >
      <div className="flex-description">
        {chartSubtitle && (
          <span className="variant-h3" style={{ fontFamily: fontFamily }}>
            {chartSubtitle}
          </span>
        )}
        {tooltip && <div>{tooltip}</div>}
      </div>
      {chartDescription && (
        <span className="variant-body2" style={{ fontFamily: fontFamily }}>
          {chartDescription}
        </span>
      )}
    </div>
    {content}
    <hr className="horizontal-line" />
  </div>
);
