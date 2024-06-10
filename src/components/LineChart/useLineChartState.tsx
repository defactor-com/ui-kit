import { useState } from "react";

import {
  LineChartDataType,
  SeriesDataType,
  ILineChartState,
  DataArrayType,
} from "./ChartsTypes";

const validateData = (data: DataArrayType[]) => {
  const values = data.map((item) => item.value);
  const allEqual = values.every((value) => value === values[0]);
  return allEqual;
};

const validateSeries = (series: SeriesDataType[]) => {
  return series.some((serie) => {
    console.log({ test: validateData(serie.data) });
    return validateData(serie.data);
  });
  return false;
};

const useLineChartState = ({ data, series }: ILineChartState) => {
  const [keyName, setKeyName] = useState("");
  const [tooltipActive, setTooltipActive] = useState(false);
  const isDuplicate = validateSeries(series);

  console.log({ isDuplicate });

  const getInitialData = (
    data: LineChartDataType[] | undefined,
    series: SeriesDataType[]
  ) => {
    const chartData: any =
      data?.map((item) => ({
        ...item,
        fluctuation: { percentage: "", value: "" },
      })) || [];
    const keyNames: string[] = [];
    const hideInitialStatus: Record<string, boolean> = {};

    series.forEach((element) => {
      keyNames.push(element.name);
      hideInitialStatus[element.name] = false;
      element.data.forEach((item, index) => {
        if (chartData[index]) {
          chartData[index][element.name] = item.value;
          chartData[index].fluctuation[element.name] = {
            value: item.fluctuationValue,
            percentage: item.fluctuation,
          };
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

  const handleOpenTooltip = (_dotProps: any, payload: any) => {
    setKeyName(payload.dataKey);
    setTooltipActive(true);
  };

  const handleCloseTooltip = () => {
    setTooltipActive(false);
  };

  const isHide = (keyName: string) => hide[keyName];

  const getColorId = (color: string) =>
    color.toLocaleLowerCase().replace(/ /g, "-");

  const missingData = !data?.length || !series.length;

  const formatDefaultValue = (value: number | string) => {
    return value
      .toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
      })
      .split(".")[0];
  };

  return [
    { chartData, keyNames, keyName, tooltipActive, missingData, isDuplicate },
    {
      isHide,
      setHide,
      handleOpenTooltip,
      handleCloseTooltip,
      getColorId,
      formatDefaultValue,
    },
  ];
};

export default useLineChartState;
