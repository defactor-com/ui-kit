import React from "react";
import clsx from "clsx";

import { Container } from "../Container";

export interface IChartContainer {
  tooltip?: React.ReactElement;
  chartDescription?: string;
  content: React.ReactNode;
  externalStyles?: string;
  chartSubtitle?: string;
  fontFamily?: string;
  haveFilter?: boolean;
}

export const ChartContainer = ({
  chartDescription,
  externalStyles,
  chartSubtitle,
  fontFamily,
  haveFilter,
  content,
  tooltip,
}: IChartContainer) => (
  <Container
    externalStyles={clsx(externalStyles, "chart-container")}
    content={
      <>
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
      </>
    }
  />
);
