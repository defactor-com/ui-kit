import clsx from "clsx";
import React from "react";
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

import { ITable, IFilterObject, IHeaderObject } from "./TableTypes";
import useTableState from "./useTableState";

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
  const [
    { activeFilter, hoverItem, isHovered },
    {
      setActiveFilter,
      buildPaginationArray,
      buildPaginationArrayMobile,
      handleMouseEnter,
      handleMouseLeave,
      updateData,
    },
  ] = useTableState({
    totalRowsNumber,
    rowsPageSelected,
    visiblePage,
    filters,
    setFilters,
  });

  const RenderPagination = () => {
    const pages = buildPaginationArray && buildPaginationArray();
    let pagesMobile: number[] = [];
    if (buildPaginationArrayMobile && pages)
      pagesMobile = buildPaginationArrayMobile(pages);

    if (window.innerWidth > 600) {
      return (
        <>
          {pages?.map((item) => (
            <span
              className={clsx("variant-body1", "number-page-button")}
              style={{
                fontFamily: fontFamily,
                color: visiblePage === item ? "#26A66B" : "none",
                fontWeight: visiblePage === item ? "bold" : "normal",
                background: visiblePage === item ? "#EAF7F1" : "white",
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
                fontFamily: fontFamily,
                color: visiblePage === item ? "#26A66B" : "none",
                fontWeight: visiblePage === item ? "bold" : "normal",
                background: visiblePage === item ? "#EAF7F1" : "white",
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
                          externalStyles={clsx("button-style", "sort-button")}
                        />
                      )}
                    </div>
                  </th>
                ))}
                {haveOptions && filters && filters?.length > 0 && (
                  <th className="th-option">
                    <div className="center-element">
                      <Button
                        onClick={() =>
                          setActiveFilter && setActiveFilter(!activeFilter)
                        }
                        fontFamily={fontFamily}
                        icon={filterIcon}
                        variant="text"
                        externalStyles={clsx("button-style", "filter-button")}
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
                            onChange={() => updateData && updateData()}
                          />
                        ) : filter.type === "date" ? (
                          <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <MobileDatePicker
                              name={filter.label}
                              className="imput-calendar"
                              onAccept={() => updateData && updateData()}
                            />
                          </LocalizationProvider>
                        ) : (
                          <input
                            name={filter.label}
                            placeholder={filter.label}
                            className="input-filter"
                            onChange={() => updateData && updateData()}
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
                    onMouseEnter={() =>
                      handleMouseEnter && handleMouseEnter(index)
                    }
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
