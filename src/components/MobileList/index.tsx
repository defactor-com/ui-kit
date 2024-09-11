import React from "react";
import { Box } from "@mui/material";

import { Container } from "../Container";
import { Pagination } from "../Pagination";

import { IMobileList } from "./MobileListTypes";

export const MobileList = ({
  rows,
  filters,
  rowsPage,
  nextPage,
  fontFamily,
  setFilters,
  visiblePage,
  rowsNumberLabel,
  totalRowsNumber,
  rowsPageSelected,
  handleSelectedPage,
  headerOptionalStyles,
  handleSelectedRowsPage,
}: IMobileList) => {
  return (
    <Box>
      {rows.map((item) => (
        <Container
          optionalStyles={{ padding: "0", marginBottom: "16px" }}
          content={
            <Box>
              <Box
                borderBottom="2px solid rgba(189, 189, 189, 0.5)"
                sx={headerOptionalStyles}
                padding={2}
              >
                {item.header}
              </Box>
              <Box padding={2}>{item.body}</Box>
              <Box padding={2}>{item.footer}</Box>
            </Box>
          }
        />
      ))}
      <Box pt={1}>
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
        />
      </Box>
    </Box>
  );
};
