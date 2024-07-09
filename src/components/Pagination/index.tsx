import React from "react";
import clsx from "clsx";

import rightIcon from "../../../public/assets/chevron_right.svg";
import leftIcon from "../../../public/assets/chevron_left.svg";
import { Button } from "../Button";

import usePaginationState from "./usePaginationState";
import { IPagination } from "./PaginationTypes";

export const Pagination = ({
  handleSelectedRowsPage,
  handleSelectedPage,
  rowsPageSelected,
  rowsNumberLabel,
  totalRowsNumber,
  visiblePage,
  setFilters,
  fontFamily,
  rowsPage,
  nextPage,
  filters,
}: IPagination) => {
  const [{ buildPaginationArrayMobile, buildPaginationArray }] =
    usePaginationState({
      totalRowsNumber,
      rowsPageSelected,
      visiblePage,
      setFilters,
      filters,
    });

  const RenderPagination = ({
    handleSelectedPage,
  }: {
    handleSelectedPage?(selectedValue: number): void;
  }) => {
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
    <div className="pagination-container">
      <div className="container-rows-per-page">
        <span className="variant-body1" style={{ fontFamily: fontFamily }}>
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
            externalStyles={clsx("button-style", "padding-button")}
            onClick={() => nextPage("-")}
            fontFamily={fontFamily}
            icon={leftIcon}
            variant="text"
          />
          <RenderPagination handleSelectedPage={handleSelectedPage} />
          <Button
            externalStyles={clsx("button-style", "padding-button")}
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
  );
};
