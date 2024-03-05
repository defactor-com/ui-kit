import clsx from "clsx";
import React from "react";

import { Button } from "../Button";
import { Container } from "../Container";
import leftIcon from "../../../public/assets/chevron_left.svg";
import rightIcon from "../../../public/assets/chevron_right.svg";
import downIcon from "../../../public/assets/arrow-down-icon.svg";
import admirationIcon from "../../../public/assets/admiration-icon.svg";

export interface IHeaderObject {
  label: string;
  sortFunction?(): void;
}

interface IRowsObject {
  function?(): void;
  items: Array<React.ReactNode>;
}

export interface ITable {
  loading?: boolean;
  fontFamily?: string;
  emptyTitle?: string;
  visiblePage?: number;
  haveOptions?: boolean;
  headerbgColor?: string;
  rowsPage?: Array<number>;
  totalRowsNumber: number;
  rows: Array<IRowsObject>;
  emptyDescription: string;
  rowsPageSelected: number;
  headers: Array<IHeaderObject>;
  nextPage?(motion: string): void;
  loaderComponent?: React.ReactNode;
  handleSelectedRowsPage(selectedValue: string): void;
}

export const Table = ({
  rows,
  loading,
  headers,
  rowsPage,
  nextPage,
  emptyTitle,
  fontFamily,
  haveOptions,
  visiblePage,
  headerbgColor,
  loaderComponent,
  totalRowsNumber,
  emptyDescription,
  rowsPageSelected,
  handleSelectedRowsPage,
}: ITable) => {
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
                  : "rgba(0, 169, 101, 0.05)",
              }}
            >
              <tr>
                {headers.map((item: IHeaderObject) => (
                  <th key={item.label}>
                    <div className="center-element">
                      {item.label}
                      {item.sortFunction && (
                        <img
                          src={downIcon}
                          onClick={item.sortFunction}
                          className="margin-left-medium"
                        />
                      )}
                    </div>
                  </th>
                ))}
                {haveOptions && <th className="th-option" />}
              </tr>
            </thead>
            {(rows?.length > 0 || loading) && (
              <tbody>
                {rows?.map((row, index) => (
                  <tr
                    key={index}
                    onClick={row.function}
                    className={row.function ? "cursor-pointer" : ""}
                  >
                    {row.items.map((itemRow, indexRow) => (
                      <td key={indexRow}>{itemRow}</td>
                    ))}
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
          <div className="pagination-container">
            <div className="container-rows-per-page">
              <span
                className="variant-body1"
                style={{ fontFamily: fontFamily }}
              >
                Rows per page:
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
                />
                {buildPaginationArray().map((item) => (
                  <span
                    className="variant-body1"
                    style={{
                      margin: "0 8px",
                      fontFamily: fontFamily,
                      textDecoration:
                        visiblePage === item ? "underline" : "none",
                      color: visiblePage === item ? "#26A66B" : "none",
                      fontWeight: visiblePage === item ? "bold" : "normal",
                    }}
                    key={item}
                  >
                    {item}
                  </span>
                ))}
                <Button
                  onClick={() => nextPage("+")}
                  fontFamily={fontFamily}
                  icon={rightIcon}
                  variant="text"
                />
              </div>
            ) : (
              <></>
            )}
          </div>
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
        </>
      }
    />
  );
};
