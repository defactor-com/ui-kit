import { useState } from "react";

import { ChartSeriesType } from ".";

type BarChartHookData = {
  chartData: any;
  keyNames: string[];
  currentFilter: string;
};

type BarChartHookCallbacks = {
  isHide: (keyName: string) => boolean;
  setHide: React.Dispatch<React.SetStateAction<Record<string, boolean>>>;
  getCoordinates: (max: number, gap: number) => number[];
  handleChangeFilter: (event: React.SyntheticEvent, newValue: string) => void;
};

const useBarChartState = ({
  data,
  series,
  dateFilter,
  filterFuntion,
}: {
  data: string[];
  series: ChartSeriesType[];
  dateFilter: string[] | undefined;
  filterFuntion?(filter: string): void;
}): [BarChartHookData, BarChartHookCallbacks] => {
  const [currentFilter, setCurrentFilter] = useState(
    dateFilter?.slice(-1)[0] || ""
  );

  const getInitialData = (data: string[], series: ChartSeriesType[]) => {
    const chartData: any = data.map((name) => ({ name }));
    const keyNames: string[] = [];
    const hideInitialStatus: Record<string, boolean> = {};

    series.forEach((element) => {
      keyNames.push(element.name);
      hideInitialStatus[element.name] = false;
      element.data.forEach((item, index) => {
        if (chartData[index]) {
          chartData[index][element.name] = item;
        }
      });
    });

    return { chartData, keyNames, hideInitialStatus };
  };

  const getCoordinates = (max: number, gap: number) => {
    const horizontalLines = [];

    for (let index = 0; gap * index <= max; index++) {
      horizontalLines.push(gap * index + 5);
    }

    return horizontalLines;
  };

  const { chartData, hideInitialStatus, keyNames } = getInitialData(
    data,
    series
  );
  const [hide, setHide] = useState(hideInitialStatus);

  const isHide = (keyName: string) => hide[keyName];

  const handleChangeFilter = (
    event: React.SyntheticEvent,
    newValue: string
  ) => {
    setCurrentFilter(newValue);
    filterFuntion && filterFuntion(newValue);
  };

  return [
    { chartData, keyNames, currentFilter },
    { isHide, setHide, getCoordinates, handleChangeFilter },
  ];
};

export default useBarChartState;
