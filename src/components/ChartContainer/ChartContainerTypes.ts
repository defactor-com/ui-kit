import React from "react";

export interface IChartContainer {
  tooltip?: React.ReactElement;
  chartDescription?: string;
  content: React.ReactNode;
  externalStyles?: string;
  optionalStyles?: React.CSSProperties;
  chartSubtitle?: string;
  fontFamily?: string;
  haveFilter?: boolean;
}
