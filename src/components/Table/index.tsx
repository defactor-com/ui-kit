import clsx from "clsx";
import React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import { Button } from "../Button";
import { DropDown } from "../DropDown";
import { Container } from "../Container";
import { Pagination } from "../Pagination";
import AdmirationIcon from "../Icons/admirationIcon";
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
  notVisibleNumColor,
  arrowColor,
  ofText = "of",
  numColor,
  numSize
}: ITable) => {
  const [
    { activeFilter, hoverItem, isHovered },
    { setActiveFilter, handleMouseEnter, handleMouseLeave, updateData },
  ] = useTableState({
    rowsPageSelected,
    totalRowsNumber,
    visiblePage,
    setFilters,
    filters,
  });

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
          <Pagination
            handleSelectedRowsPage={handleSelectedRowsPage}
            handleSelectedPage={handleSelectedPage}
            rowsPageSelected={rowsPageSelected}
            totalRowsNumber={totalRowsNumber}
            rowsNumberLabel={rowsNumberLabel}
            visiblePage={visiblePage}
            setFilters={setFilters}
            fontFamily={fontFamily}
            nextPage={nextPage}
            rowsPage={rowsPage}
            filters={filters}
            notVisibleNumColor={notVisibleNumColor}
            arrowColor={arrowColor}
            ofText={ofText}
            numColor={numColor}
            numSize={numSize}
          />
        </>
      }
    />
  );
};
