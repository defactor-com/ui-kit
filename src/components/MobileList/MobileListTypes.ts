import { SxProps, Theme } from "@mui/material";
import { IFilterObject, IFilterSelectedObject } from "../Table/TableTypes";

export interface IRowsObject {
  onClickRow?(): void;
  body?: React.ReactNode;
  header: React.ReactNode;
  footer?: React.ReactNode;
}

export interface IMobileList {
  loading?: boolean;
  fontFamily?: string;
  emptyTitle?: string;
  visiblePage?: number;
  haveOptions?: boolean;
  headerbgColor?: string;
  rowsHoverColor?: string;
  totalRowsNumber: number;
  rowsNumberLabel?: string;
  rows: Array<IRowsObject>;
  rowsPage?: Array<number>;
  emptyDescription: string;
  rowsPageSelected: number;
  filters?: Array<IFilterObject>;
  nextPage?(motion: string): void;
  loaderComponent?: React.ReactNode;
  emptyIcon?: React.ReactNode | string;
  headerOptionalStyles?: SxProps<Theme>;
  handleSelectedPage?(selectedValue: number): void;
  setFilters: React.Dispatch<
    React.SetStateAction<Array<IFilterSelectedObject>>
  >;
  handleSelectedRowsPage(selectedValue: string): void;
}
