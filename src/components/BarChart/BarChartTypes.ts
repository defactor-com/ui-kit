import { IChart } from "../LineChart/ChartsTypes";

export interface ChartSeriesType {
  name: string;
  data: number[];
}

export interface IBarChart extends IChart {
  data: string[];
  series: ChartSeriesType[];
  displayDirection?: "vertical" | "horizontal";
  dateFilter?: string[];
  color?: string;
  filterBgColor?: string;
  currentFilter?: string;
  handleChangeFilter?(filter: string): void;
}
