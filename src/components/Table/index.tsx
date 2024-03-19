import clsx from "clsx";
import React, { useState } from "react";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import { Button } from "../Button";
import { Container } from "../Container";
import { DropDown } from "../DropDown";
import leftIcon from "../../../public/assets/chevron_left.svg";
import rightIcon from "../../../public/assets/chevron_right.svg";
import downIcon from "../../../public/assets/arrow-down-icon.svg";
import filterIcon from "../../../public/assets/filter-options-icon.svg";
import approveIcon from "../../../public/assets/approve-icon.svg";
import admirationIcon from "../../../public/assets/admiration-icon.svg";

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

export interface IRowsObject {
  onClickRow?(): void;
  items: Array<React.ReactNode>;
}

export interface ITable {
  loading?: boolean;
  fontFamily?: string;
  emptyTitle?: string;
  visiblePage?: number;
  haveOptions?: boolean;
  headerbgColor?: string;
  totalRowsNumber: number;
  rowsNumberLabel?: string;
  rows: Array<IRowsObject>;
  rowsPage?: Array<number>;
  emptyDescription: string;
  rowsPageSelected: number;
  headers: Array<IHeaderObject>;
  filters: Array<IFilterObject>;
  nextPage?(motion: string): void;
  loaderComponent?: React.ReactNode;
  handleSelectedRowsPage(selectedValue: string): void;
  setFilters: React.Dispatch<
    React.SetStateAction<Array<IFilterSelectedObject>>
  >;
}

export const Table = ({
  rows,
  loading,
  headers,
  filters,
  rowsPage,
  nextPage,
  emptyTitle,
  fontFamily,
  haveOptions,
  visiblePage,
  headerbgColor,
  loaderComponent,
  rowsNumberLabel,
  totalRowsNumber,
  emptyDescription,
  rowsPageSelected,
  handleSelectedRowsPage,
  setFilters,
}: ITable) => {
  const [activeFilter, setActiveFilter] = useState(false);
  const buildPaginationArray = (): Array<number> => {
    const paginationArray = [];
    let amountElements = totalRowsNumber / rowsPageSelected;
    let count = 1;

    while (amountElements > 0) {
      paginationArray.push(count);
      count++;
      amountElements--;
    }

    return paginationArray;
  };

  const updateData = () => {
    const data: Array<IFilterSelectedObject> = [];
    filters.forEach((filter) => {
      const element = document.getElementsByName(
        filter.label
      )[0] as HTMLInputElement;
      let selectFilter: IFilterSelectedObject = {
        label: filter.label,
        options: [],
      };
      if (filter.options) selectFilter.options = element.value.split(",");
      else selectFilter.options = element?.value || "";
      data.push(selectFilter);
    });
    setFilters(data);
  };

  return (
    <Container
      externalStyles="remove-padding"
      content={
        <>
          <table>
            <thead
              style={{
                backgroundColor: headerbgColor
                  ? headerbgColor
                  : "rgba(38, 166, 107, 0.1)",
              }}
            >
              <tr>
                {headers.map((item: IHeaderObject) => (
                  <th key={item.label}>
                    <div className="center-element">
                      {item.label}
                      {item.sortFunction && (
                        <Button
                          onClick={item.sortFunction}
                          fontFamily={fontFamily}
                          icon={downIcon}
                          variant="text"
                          style={{
                            padding: "14px 18px 14px 8px",
                          }}
                          externalStyles="button-style"
                        />
                      )}
                    </div>
                  </th>
                ))}
                {haveOptions && (
                  <th className="th-option">
                    <div className="center-element">
                      <Button
                        onClick={() => setActiveFilter(!activeFilter)}
                        fontFamily={fontFamily}
                        icon={filterIcon}
                        variant="text"
                        style={{ padding: "8px 16px 8px 0px" }}
                        externalStyles="button-style"
                      />
                    </div>
                  </th>
                )}
              </tr>
              {activeFilter && (
                <tr className="tr-head">
                  {filters.map((filter: IFilterObject) => (
                    <th key={filter.label} className="th-filter">
                      <div className="filter-container">
                        {filter.options ? (
                          <DropDown
                            placeholder={filter.label}
                            options={filter.options}
                          />
                        ) : filter.type === "date" ? (
                          <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <MobileDatePicker
                              name={filter.label}
                              className="imput-calendar"
                            />
                          </LocalizationProvider>
                        ) : (
                          <input
                            name={filter.label}
                            placeholder={filter.label}
                            className="input-filter"
                          />
                        )}
                      </div>
                    </th>
                  ))}
                  <th className="th-option">
                    <div className="center-element">
                      <Button
                        onClick={() => updateData()}
                        fontFamily={fontFamily}
                        icon={approveIcon}
                        variant="text"
                        externalStyles="button-style"
                      />
                    </div>
                  </th>
                </tr>
              )}
            </thead>
            {(rows?.length > 0 || loading) && (
              <tbody>
                {rows?.map((row, index) => (
                  <tr
                    key={index}
                    onClick={row.onClickRow}
                    className={row.onClickRow ? "tr-action" : "tr-hightlight"}
                  >
                    {row.items.map((itemRow, indexRow) => (
                      <td key={indexRow}>{itemRow}</td>
                    ))}
                    <td className="td-void"></td>
                  </tr>
                ))}
                {!rows.length && (
                  <tr style={{ border: "2px solid red" }}>
                    {headers.map((item) => (
                      <td key={item.label}>{loaderComponent}</td>
                    ))}
                  </tr>
                )}
              </tbody>
            )}
          </table>
          {!rows?.length && !loading && (
            <div className="empt-state-container">
              <img src={admirationIcon} className="img-empty" />
              <span
                className={clsx("variant-h3", "small-margin-button")}
                style={{ fontFamily: fontFamily }}
              >
                {emptyTitle}
              </span>
              <span
                style={{ fontFamily: fontFamily }}
                className="variant-body1"
              >
                {emptyDescription}
              </span>
            </div>
          )}
          <div className="pagination-container">
            <div className="container-rows-per-page">
              <span
                className="variant-body1"
                style={{ fontFamily: fontFamily }}
              >
                {rowsNumberLabel}
              </span>
              <select
                className="select-item"
                onChange={(e) => handleSelectedRowsPage(e.target.value)}
              >
                {rowsPage?.map((item) => (
                  <option
                    style={{ fontFamily: fontFamily }}
                    className="variant-body1"
                    value={item}
                    key={item}
                  >
                    {item}
                  </option>
                ))}
              </select>
            </div>
            {totalRowsNumber > rowsPageSelected && nextPage ? (
              <div className="page-selector-container">
                <Button
                  onClick={() => nextPage("-")}
                  fontFamily={fontFamily}
                  icon={leftIcon}
                  variant="text"
                  externalStyles={clsx(
                    "button-style",
                    "arrow-button",
                    "left-arrow-button"
                  )}
                />
                {buildPaginationArray().map((item) => (
                  <span
                    className="variant-body1"
                    style={{
                      margin: "8px",
                      fontFamily: fontFamily,
                      textDecoration:
                        visiblePage === item ? "underline" : "none",
                      color: visiblePage === item ? "#26A66B" : "none",
                      fontWeight: visiblePage === item ? "bold" : "normal",
                      cursor: "pointer",
                    }}
                    key={item}
                    onClick={() => {}}
                  >
                    {item}
                  </span>
                ))}
                <Button
                  onClick={() => nextPage("+")}
                  fontFamily={fontFamily}
                  icon={rightIcon}
                  variant="text"
                  externalStyles={clsx(
                    "button-style",
                    "arrow-button",
                    "right-arrow-button"
                  )}
                />
              </div>
            ) : (
              <></>
            )}
          </div>
        </>
      }
    />
  );
};
