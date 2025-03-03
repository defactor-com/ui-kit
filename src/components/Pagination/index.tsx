import React from "react";
import clsx from "clsx";

import { ChevronLeft, ChevronRight } from "@untitled-ui/icons-react";
import { Button } from "../Button";

import usePaginationState from "./usePaginationState";
import { IPagination } from "./PaginationTypes";
import { Box, Typography, useTheme } from "@mui/material";
import { CostomPaginationDropdown } from "../CostomPaginationDropdown";

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
  notVisibleNumColor,
  arrowColor,
  ofText,
  numColor,
  numSize,
}: IPagination) => {
  const theme = useTheme();

  const adjustedRowsPageSelected = Math.min(
    rowsPageSelected,
    totalRowsNumber || 0
  );

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
    const pages = buildPaginationArray ? buildPaginationArray() : [];
    const pagesMobile = buildPaginationArrayMobile(pages);

    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: 2,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {(window.innerWidth > 600 ? pages : pagesMobile).map((num) => (
          <Box
            key={num}
            sx={{
              display: "flex",
              cursor: "pointer",
              border:
                visiblePage === num
                  ? `1px solid ${theme.palette.secondary.main}`
                  : "none",
              borderRadius: 1,
              width: 28,
              height: 28,
              alignItems: "center",
              justifyContent: "center",
              background: visiblePage === num ? "white" : "white",
              fontWeight: visiblePage === num ? "bold" : "bold",
            }}
            onClick={() => handleSelectedPage && handleSelectedPage(num)}
          >
            <Typography
              variant="caption"
              fontWeight={500}
              lineHeight={1}
              color={
                visiblePage === num
                  ? theme.palette.secondary.main
                  : notVisibleNumColor || theme.palette.grey[600]
              }
            >
              {num}
            </Typography>
          </Box>
        ))}
      </Box>
    );
  };

  return (
    <div className="pagination-container">
      <Box flex="1">
        <Typography
          variant="caption"
          color={arrowColor || theme.palette.grey[400]}
          fontWeight={500}
        >
          {`${adjustedRowsPageSelected} ${ofText} ${totalRowsNumber}`}
        </Typography>
      </Box>
      <Box display="flex" flex="1">
        {totalRowsNumber > rowsPageSelected && nextPage ? (
          <div className="page-selector-container">
            <Button
              externalStyles={clsx("button-style", "padding-button")}
              onClick={() => nextPage("-")}
              fontFamily={fontFamily}
              icon={
                <ChevronLeft
                  width={16}
                  height={16}
                  color={arrowColor || theme.palette.grey[400]}
                />
              }
              variant="text"
            />
            <RenderPagination handleSelectedPage={handleSelectedPage} />
            <Button
              externalStyles={clsx("button-style", "padding-button")}
              onClick={() => nextPage("+")}
              fontFamily={fontFamily}
              icon={
                <ChevronRight
                  width={16}
                  height={16}
                  color={arrowColor || theme.palette.grey[400]}
                />
              }
              variant="text"
            />
          </div>
        ) : (
          <></>
        )}
      </Box>
      <Box
        display="flex"
        flex="1"
        sx={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-end",
          gap: 1,
          right: 0,
          "@media (max-width: 600px)": {
            position: "relative",
            justifyContent: "center",
          },
        }}
      >
        <Typography
          color={arrowColor || theme.palette.grey[400]}
          fontSize={numSize || "12px"}
          variant="caption"
          fontWeight={500}
        >
          {rowsNumberLabel}
        </Typography>
        <Box sx={{ display: "flex" }}>
          <CostomPaginationDropdown
            numColor={numColor || theme.palette.grey[700]}
            numSize={numSize || "12px"}
            menuItems={rowsPage?.map((option) => ({
              label: option.toString(),
              value: option,
            }))}
            value={rowsPageSelected.toString()}
            flexDirectionRow={true}
            paddingSize="8px"
            tooltipBgColor={theme.palette.primary.main}
            onChange={(str) => handleSelectedRowsPage(str)}
          />
        </Box>
      </Box>
    </div>
  );
};
