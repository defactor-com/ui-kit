import React from "react";
import clsx from "clsx";

import { Container } from "../Container";

export interface IChartContainer {
  content: React.ReactNode;
  fontFamily?: string;
  chartSubtitle?: string;
  chartDescription?: string;
}

export const ChartContainer = ({
  chartSubtitle,
  chartDescription,
  fontFamily,
  content,
}: IChartContainer) => (
  <Container
    externalStyles="chart-container"
    content={
      <>
        <div className={clsx("flex-column-direction", "margin-bottom-high")}>
          {chartSubtitle && (
            <span className="variant-h3" style={{ fontFamily: fontFamily }}>
              {chartSubtitle}
            </span>
          )}
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
