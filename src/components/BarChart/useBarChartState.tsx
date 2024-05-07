import { useState } from "react";

import { ChartSeriesType } from ".";

type BarChartHookData = {
  chartData: any;
  keyNames: string[];
};

type BarChartHookCallbacks = {
  isHide: (keyName: string) => boolean;
  setHide: React.Dispatch<React.SetStateAction<Record<string, boolean>>>;
  getCoordinates: (max: number, gap: number) => number[];
};

const useBarChartState = ({
  data,
  series,
}: {
  data: string[];
  series: ChartSeriesType[];
}): [BarChartHookData, BarChartHookCallbacks] => {
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

  return [
    { chartData, keyNames },
    { isHide, setHide, getCoordinates },
  ];
};

export default useBarChartState;
