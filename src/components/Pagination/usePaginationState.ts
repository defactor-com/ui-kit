import { IFilterSelectedObject } from "../Table/TableTypes";

import { IUsePaginatioState } from "./PaginationTypes";

const usePaginationState = ({
  rowsPageSelected,
  totalRowsNumber,
  visiblePage,
  setFilters,
  filters,
}: IUsePaginatioState) => {
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

  return [
    {
      buildPaginationArrayMobile,
      buildPaginationArray,
    },
  ];
};

export default usePaginationState;
