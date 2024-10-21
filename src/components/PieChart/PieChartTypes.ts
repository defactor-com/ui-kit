import { ReactNode } from "react";

import { IChart } from "../LineChart/ChartsTypes";
import { SxProps, Theme } from "@mui/material";

export type PieDataType = { value: number; name: string; color: string }[];

export interface IPieChart extends Omit<IChart, "colors"> {
  data: PieDataType;
  showLabels?: boolean;
  chartPosition?: string;
  internalContent?: ReactNode;
  sx?: SxProps<Theme> | undefined;
}
