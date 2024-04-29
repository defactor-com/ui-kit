import { useState } from "react";

import { ChartSeriesType } from ".";

const useBarChartState = ({
  data,
  series,
}: {
  data: string[];
  series: ChartSeriesType[];
}) => {
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

  const { chartData, hideInitialStatus, keyNames } = getInitialData(
    data,
    series
  );
  const [hide, setHide] = useState(hideInitialStatus);

  const isHide = (keyName: string) => hide[keyName];

  return [
    { chartData, keyNames },
    { isHide, setHide },
  ];
};

export default useBarChartState;
