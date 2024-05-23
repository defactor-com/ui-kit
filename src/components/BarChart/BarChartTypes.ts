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

export type BarChartHookData = {
  chartData: any;
  keyNames: string[];
  missingData: boolean;
};

export type BarChartHookCallbacks = {
  isHide: (keyName: string) => boolean;
  setHide: React.Dispatch<React.SetStateAction<Record<string, boolean>>>;
  getCoordinates: (max: number, gap: number) => number[];
};

export interface IBarChartState {
  data: string[];
  series: ChartSeriesType[];
}
