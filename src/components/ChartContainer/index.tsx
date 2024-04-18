import React from "react";
import clsx from "clsx";

import { Container } from "../Container";

export interface IChartContainer {
  chartDescription?: string;
  content: React.ReactNode;
  externalStyles?: string;
  chartSubtitle?: string;
  fontFamily?: string;
  tooltip?: React.ReactElement;
}

export const ChartContainer = ({
  chartDescription,
  externalStyles,
  chartSubtitle,
  fontFamily,
  content,
  tooltip,
}: IChartContainer) => (
  <Container
    externalStyles={clsx(externalStyles, "chart-container")}
    content={
      <>
        <div className={clsx("flex-column-direction", "margin-bottom-high")}>
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
