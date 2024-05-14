import { useState } from "react";

import { IUseTableState, IFilterSelectedObject } from "./TableTypes";

const useTableState = ({
  totalRowsNumber,
  rowsPageSelected,
  visiblePage,
  filters,
  setFilters,
}: IUseTableState) => {
  const [activeFilter, setActiveFilter] = useState(false);
  const [hoverItem, setHoverItem] = useState<number>(-1);
  const [isHovered, setIsHovered] = useState(false);

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

  const handleMouseEnter = (key: number) => {
    setHoverItem(key);

    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setHoverItem(-1);
    setIsHovered(false);
  };

  const updateData = () => {
    if (filters) {
      const data: Array<IFilterSelectedObject> = [];
      filters.forEach((filter) => {
        const element = document.getElementsByName(
          filter.label
        )[0] as HTMLInputElement;
        let selectFilter: IFilterSelectedObject = {
          label: filter.label,
          options: [],
        };
        if (filter.options) selectFilter.options = element.value.split(",");
        else selectFilter.options = element?.value || "";
        data.push(selectFilter);
      });
      setFilters(data);
    }
  };
  return [
    { activeFilter, hoverItem, isHovered },
    {
      setActiveFilter,
      buildPaginationArray,
      buildPaginationArrayMobile,
      handleMouseEnter,
      handleMouseLeave,
      updateData,
    },
  ];
};

export default useTableState;
