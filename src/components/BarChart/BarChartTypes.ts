import { FormatValueType, IChart } from "../LineChart/ChartsTypes";

export interface ChartSeriesType {
  name: string;
  data: number[];
}

export interface IBarChart extends IChart {
  data: string[];
  color?: string;
  showXAxis?: boolean;
  dateFilter?: string[];
  filterBgColor?: string;
  currentFilter?: string;
  series: ChartSeriesType[];
  formatValueVertical?: FormatValueType;
  handleChangeFilter?(filter: string): void;
  displayDirection?: "vertical" | "horizontal";
}

export type BarChartHookData = {
  chartData: any;
  keyNames: string[];
  missingData: boolean;
};

export type BarChartHookCallbacks = {
  isHide: (keyName: string) => boolean;
  getCoordinates: (max: number, gap: number, space?: number) => number[];
  setHide: React.Dispatch<React.SetStateAction<Record<string, boolean>>>;
};

export interface IBarChartState {
  data: string[];
  series: ChartSeriesType[];
}
