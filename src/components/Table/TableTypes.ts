import React from "react";

export interface IHeaderObject {
  label: string;
  sortFunction?(): void;
  externalStyles?: string;
}

export interface IFilterObject {
  label: string;
  options?: Array<string>;
  type?: "multiple" | "date";
}

export interface IFilterSelectedObject {
  label: string;
  options?: Array<string> | string;
}

export interface IItemRow {
  activeAction: boolean;
  externalStyles?: string;
  component: React.ReactNode;
}

export interface IRowsObject {
  onClickRow?(): void;
  items: Array<IItemRow>;
}

export interface ITable {
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
  headers: Array<IHeaderObject>;
  filters?: Array<IFilterObject>;
  nextPage?(motion: string): void;
  loaderComponent?: React.ReactNode;
  emptyIcon?: React.ReactNode | string;
  handleSelectedPage?(selectedValue: number): void;
  setFilters: React.Dispatch<
    React.SetStateAction<Array<IFilterSelectedObject>>
  >;
  handleSelectedRowsPage(selectedValue: string): void;
}

export interface IUseTableState {
  totalRowsNumber: number;
  rowsPageSelected: number;
  visiblePage: number | undefined;
  filters: IFilterObject[] | undefined;
  setFilters: React.Dispatch<
    React.SetStateAction<Array<IFilterSelectedObject>>
  >;
}
