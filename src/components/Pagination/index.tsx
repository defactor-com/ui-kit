import React from "react";
import clsx from "clsx";

import rightIcon from "../../../public/assets/chevron_right.svg";
import leftIcon from "../../../public/assets/chevron_left.svg";
import { Button } from "../Button";

import usePaginationState from "./usePaginationState";
import { IPagination } from "./PaginationTypes";
import { Box, Typography, useTheme } from "@mui/material";
import { CustomDropdown } from "../CustomDropdown";

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
  const theme = useTheme();

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
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-end", // Align to the right
          pr: 4, // Adjust padding as needed
          gap: 1,
          position: "absolute", // Maintain right positioning
          right: 0, // Ensure it sticks to the right
          "@media (max-width: 600px)": {
            position: "relative",
            justifyContent: "center", // Center it on mobile
          },
        }}
      >
        <Typography
          color={theme.palette.grey[900]}
          variant="caption"
          fontWeight={500}
        >
          {rowsNumberLabel}
        </Typography>
        <Box sx={{ display: "flex" }}>
          <CustomDropdown
            menuItems={rowsPage?.map((option) => ({
              label: option.toString(),
              value: option,
            }))}
            value={rowsPageSelected.toString()}
            flexDirectionRow={true}
            paddingSize="4px"
            tooltipBgColor={theme.palette.primary.main}
            onChange={(str) => handleSelectedRowsPage(str)}
          />
        </Box>
      </Box>
    </div>
  );
};
