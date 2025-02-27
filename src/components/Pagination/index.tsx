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
              background: visiblePage === num ? "#EAF7F1" : "white",
              fontWeight: visiblePage === num ? "bold" : "normal",
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
                  : theme.palette.grey[600]
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
          justifyContent: "flex-end",
          pr: 4,
          gap: 1,
          position: "absolute",
          right: 0,
          "@media (max-width: 600px)": {
            position: "relative",
            justifyContent: "center",
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
