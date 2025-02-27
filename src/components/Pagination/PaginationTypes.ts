import React from "react";
import { IFilterObject, IFilterSelectedObject } from "../Table/TableTypes";

export interface IPagination {
  fontFamily?: string;
  visiblePage?: number;
  totalRowsNumber: number;
  rowsPage?: Array<number>;
  rowsPageSelected: number;
  rowsNumberLabel?: string;
  filters?: Array<IFilterObject>;
  nextPage?(motion: string): void;
  handleSelectedPage?(selectedValue: number): void;
  setFilters: React.Dispatch<
    React.SetStateAction<Array<IFilterSelectedObject>>
  >;
  handleSelectedRowsPage(selectedValue: string): void;
  notVisibleNumColor?: string;
  arrowColor?: string;
  ofText?: string;
}

export interface IUsePaginatioState {
  visiblePage?: number;
  totalRowsNumber: number;
  rowsPageSelected: number;
  filters?: Array<IFilterObject>;
  setFilters: React.Dispatch<
    React.SetStateAction<Array<IFilterSelectedObject>>
  >;
}
