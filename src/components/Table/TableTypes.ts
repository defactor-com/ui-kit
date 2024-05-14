export interface IHeaderObject {
  label: string;
  sortFunction?(): void;
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

export interface IitemRow {
  activeAction: boolean;
  component: React.ReactNode;
}

export interface IRowsObject {
  onClickRow?(): void;
  items: Array<IitemRow>;
}

export interface ITable {
  loading?: boolean;
  fontFamily?: string;
  emptyTitle?: string;
  visiblePage?: number;
  primaryColor?: string;
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
  handleSelectedRowsPage(selectedValue: string): void;
  setFilters: React.Dispatch<
    React.SetStateAction<Array<IFilterSelectedObject>>
  >;
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
