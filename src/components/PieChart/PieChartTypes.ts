import { IChart } from "../LineChart/ChartsTypes";

export type PieDataType = { value: number; name: string; color: string }[];

export interface IPieChart extends Omit<IChart, "colors"> {
  data: PieDataType;
}
