import clsx from "clsx";
import React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import { Button } from "../Button";
import { DropDown } from "../DropDown";
import { Container } from "../Container";
import AdmirationIcon from "../Icons/admirationIcon";
import leftIcon from "../../../public/assets/chevron_left.svg";
import rightIcon from "../../../public/assets/chevron_right.svg";
import downIcon from "../../../public/assets/arrow-down-icon.svg";
import filterIcon from "../../../public/assets/filter-options-icon.svg";

import useTableState from "./useTableState";
import { ITable, IFilterObject, IHeaderObject } from "./TableTypes";

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
  headerbgColor,
  loaderComponent,
  rowsNumberLabel,
  totalRowsNumber,
  rowsPageSelected,
  emptyDescription,
  handleSelectedPage,
  handleSelectedRowsPage,
  emptyIcon = <AdmirationIcon />,
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
              onClick={() => handleSelectedPage && handleSelectedPage(item)}
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
              onClick={() => handleSelectedPage && handleSelectedPage(item)}
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
                  <th style={{ fontFamily: fontFamily }} key={item.label}>
                    <div
                      className={clsx("center-element", item.externalStyles)}
                      style={{ ...item.optionalStyles }}
                    >
                      {item.label}
                      {item.sortFunction && (
                        <Button
                          variant="text"
                          icon={downIcon}
                          fontFamily={fontFamily}
                          onClick={item.sortFunction}
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
                  {filters?.map((filter: IFilterObject) => (
                    <th key={filter.label} className="th-filter">
                      <div className="table-filter-container">
                        {filter.options ? (
                          <DropDown
                            fontFamily={fontFamily}
                            placeholder={filter.label}
                            options={filter.options}
                            onChange={() => updateData && updateData()}
                          />
                        ) : filter.type === "date" ? (
                          <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <MobileDatePicker
                              name={filter.label}
                              slotProps={{
                                textField: {
                                  InputProps: {
                                    style: { fontFamily: fontFamily },
                                  },
                                },
                              }}
                              className="input-calendar"
                              onAccept={() => updateData && updateData()}
                            />
                          </LocalizationProvider>
                        ) : (
                          <input
                            name={filter.label}
                            placeholder={filter.label}
                            className="input-filter"
                            style={{ fontFamily: fontFamily }}
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
                        className={clsx(itemRow.externalStyles)}
                        style={{ ...itemRow.optionalStyles }}
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
                {typeof emptyIcon === "string" ? (
                  <img src={emptyIcon} width={32} height={32} />
                ) : (
                  emptyIcon
                )}
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
