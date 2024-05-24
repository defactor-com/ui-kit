import { TooltipProps } from "recharts";
import {
  NameType,
  ValueType,
} from "recharts/types/component/DefaultTooltipContent";

export interface LineChartDataType {
  date: string;
}

export interface DataArrayType {
  fluctuation: string;
  fluctuationValue?: string;
  value: number;
}

export interface SeriesDataType {
  data: DataArrayType[];
  name: string;
}

export type FormatValueType = (
  value: number | string,
  options?: Intl.NumberFormatOptions
) => string;

export interface IChart {
  emptyIcon?: React.ReactElement | string;
  formatValueAxisY?: FormatValueType;
  formatValueAxisX?: FormatValueType;
  loaderComponent?: React.ReactNode;
  formatValue?: FormatValueType;
  formatDate?: FormatValueType;
  emptyDescription?: string;
  fontFamily?: string;
  emptyTitle?: string;
  colors: string[];
  loading?: boolean;
}

export interface ILineChart extends IChart {
  handleChangeFilter?(filter: string): void;
  data: LineChartDataType[] | undefined;
  missingData?: boolean | undefined;
  series: SeriesDataType[];
  filterBgColor?: string;
  currentFilter?: string;
  dateFilter?: string[];
  color?: string;
}

export interface IRenderComponent extends IChart {
  handleOpenTooltip: ((_dotProps: any, payload: any) => void) | undefined;
  getColorId: ((color: string) => string) | undefined;
  isHide: ((keyName: string) => boolean) | undefined;
  handleCloseTooltip: (() => void) | undefined;
  tooltipActive: boolean | undefined;
  missingData: boolean | undefined;
  keyNames: string[] | undefined;
  keyName: string | undefined;
  chartData: any;
}

export interface CustomTooltipProps extends TooltipProps<ValueType, NameType> {
  formatValue: FormatValueType;
  formatDate?: FormatValueType;
  fontFamily?: string;
  colors: string[];
}

export interface LineChartTooltipProps extends CustomTooltipProps {
  keyName?: string;
}

export interface ILineChartState {
  data: LineChartDataType[] | undefined;
  series: SeriesDataType[];
}
