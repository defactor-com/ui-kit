import clsx from "clsx";
import React, { useState } from "react";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import { Button } from "../Button";
import { Container } from "../Container";
import { DropDown } from "../DropDown";
import AdmirationIcon from "../Icons/admirationIcon";
import leftIcon from "../../../public/assets/chevron_left.svg";
import rightIcon from "../../../public/assets/chevron_right.svg";
import downIcon from "../../../public/assets/arrow-down-icon.svg";
import filterIcon from "../../../public/assets/filter-options-icon.svg";

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

export const Table = ({
  rows,
  loading,
  headers,
  filters,
  rowsPage,
  nextPage,
  emptyTitle,
  fontFamily,
  setFilters,
  haveOptions,
  visiblePage,
  primaryColor,
  headerbgColor,
  loaderComponent,
  rowsNumberLabel,
  totalRowsNumber,
  emptyDescription,
  rowsPageSelected,
  handleSelectedRowsPage,
  rowsHoverColor = "rgba(38, 166, 107, 0.1)",
}: ITable) => {
  const [activeFilter, setActiveFilter] = useState(false);
  const [hoverItem, setHoverItem] = useState<number>(-1);
  const [isHovered, setIsHovered] = useState(false);

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

  const buildPaginationArrayMobile = (pages: Array<number>) => {
    const paginationArray = [];
    const isVisible = (element: number) => element === visiblePage;
    const baseIndex = pages.findIndex(isVisible);

    if (pages[baseIndex - 1]) {
      if (pages[baseIndex + 1]) {
        paginationArray.push(pages[baseIndex - 1]);
        paginationArray.push(pages[baseIndex]);
        paginationArray.push(pages[baseIndex + 1]);
      } else {
        pages[baseIndex - 2] && paginationArray.push(pages[baseIndex - 2]);
        paginationArray.push(pages[baseIndex - 1]);
        paginationArray.push(pages[baseIndex]);
      }
    } else {
      paginationArray.push(pages[baseIndex]);
      pages[baseIndex + 1] && paginationArray.push(pages[baseIndex + 1]);
      pages[baseIndex + 2] && paginationArray.push(pages[baseIndex + 2]);
    }

    return paginationArray;
  };

  const handleMouseEnter = (key: number) => {
    setHoverItem(key);

    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setHoverItem(-1);
    setIsHovered(false);
  };

  const updateData = () => {
    if (filters) {
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
    }
  };

  const RenderPagination = () => {
    const pages = buildPaginationArray();
    const pagesMobile = buildPaginationArrayMobile(pages);

    if (window.innerWidth > 600) {
      return (
        <>
          {pages.map((item) => (
            <span
              className={clsx("variant-body1", "number-page-button")}
              style={{
                margin: "8px",
                fontFamily: fontFamily,
                color: visiblePage === item ? "#26A66B" : "none",
                fontWeight: visiblePage === item ? "bold" : "normal",
                background: visiblePage === item ? "#EAF7F1" : "white",
                cursor: "pointer",
              }}
              key={item}
              onClick={() => {}}
            >
              {item}
            </span>
          ))}
        </>
      );
    } else {
      return (
        <>
          {pagesMobile.map((item) => (
            <span
              className={clsx("variant-body1", "number-page-button")}
              style={{
                margin: "8px",
                fontFamily: fontFamily,
                color: visiblePage === item ? "#26A66B" : "none",
                fontWeight: visiblePage === item ? "bold" : "normal",
                background: visiblePage === item ? "#EAF7F1" : "white",
                cursor: "pointer",
              }}
              key={item}
              onClick={() => {}}
            >
              {item}
            </span>
          ))}
        </>
      );
    }
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
                {haveOptions && filters && filters?.length > 0 && (
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
              {activeFilter && filters && (
                <tr className="tr-head">
                  {filters.map((filter: IFilterObject) => (
                    <th key={filter.label} className="th-filter">
                      <div className="filter-container">
                        {filter.options ? (
                          <DropDown
                            placeholder={filter.label}
                            options={filter.options}
                            onChange={() => updateData()}
                          />
                        ) : filter.type === "date" ? (
                          <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <MobileDatePicker
                              name={filter.label}
                              className="imput-calendar"
                              onAccept={() => updateData()}
                            />
                          </LocalizationProvider>
                        ) : (
                          <input
                            name={filter.label}
                            placeholder={filter.label}
                            className="input-filter"
                            onChange={() => updateData()}
                          />
                        )}
                      </div>
                    </th>
                  ))}
                  <th className="th-option" />
                </tr>
              )}
            </thead>
            {(rows?.length > 0 || loading) && (
              <tbody>
                {rows?.map((row, index) => (
                  <tr
                    key={index}
                    onMouseLeave={handleMouseLeave}
                    onMouseEnter={() => handleMouseEnter(index)}
                    className={row.onClickRow ? "tr-action" : undefined}
                    style={{
                      backgroundColor:
                        isHovered && hoverItem === index
                          ? rowsHoverColor
                          : "initial",
                    }}
                  >
                    {row.items.map((itemRow, indexRow) => (
                      <td
                        onClick={
                          itemRow.activeAction ? row.onClickRow : undefined
                        }
                        key={indexRow}
                      >
                        {itemRow.component}
                      </td>
                    ))}
                    <td className="td-void"></td>
                  </tr>
                ))}
                {!rows.length && (
                  <tr>
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
              <div className="img-empty">
                <AdmirationIcon color={primaryColor} />
              </div>
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
                  externalStyles={clsx("button-style", "padding-button")}
                />
                <RenderPagination />
                <Button
                  onClick={() => nextPage("+")}
                  fontFamily={fontFamily}
                  icon={rightIcon}
                  variant="text"
                  externalStyles={clsx("button-style", "padding-button")}
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
