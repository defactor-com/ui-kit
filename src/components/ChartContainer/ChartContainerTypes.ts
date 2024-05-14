export interface IChartContainer {
  tooltip?: React.ReactElement;
  chartDescription?: string;
  content: React.ReactNode;
  externalStyles?: string;
  chartSubtitle?: string;
  fontFamily?: string;
  haveFilter?: boolean;
}
