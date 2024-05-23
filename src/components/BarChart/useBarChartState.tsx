import { useState } from "react";

import {
  ChartSeriesType,
  BarChartHookData,
  BarChartHookCallbacks,
  IBarChartState,
} from "./BarChartTypes";

const useBarChartState = ({
  data,
  series,
}: IBarChartState): [BarChartHookData, BarChartHookCallbacks] => {
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

  const missingData = !data.length || !series.length;

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
    { chartData, keyNames, missingData },
    { isHide, setHide, getCoordinates },
  ];
};

export default useBarChartState;
