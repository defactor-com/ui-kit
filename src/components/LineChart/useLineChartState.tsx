import { useEffect, useState } from "react";

import {
  LineChartDataType,
  SeriesDataType,
  ILineChartState,
  DataArrayType,
  ValidatedSerie,
  FormatValueType,
} from "./ChartsTypes";

const validateData = (data: DataArrayType[], formatValue: FormatValueType) => {
  const values = data.map((item) => item.value);
  const allEqual = values.every(
    (value) => formatValue(value) === formatValue(values[0])
  );
  return allEqual;
};

const validateSeries = (
  series: SeriesDataType[],
  formatValue: FormatValueType
) => {
  const validatedSeries: ValidatedSerie[] = [];

  series.map((serie) => {
    validatedSeries.push({
      name: serie.name,
      isSameData: validateData(serie.data, formatValue),
    });
  });
  return validatedSeries;
};

const useLineChartState = ({
  data,
  series,
  formatValueAxisY,
}: ILineChartState) => {
  const [keyName, setKeyName] = useState("");
  const [tooltipActive, setTooltipActive] = useState(false);
  const validatedSeries = validateSeries(series, formatValueAxisY);
  const [tickCount, setTickCount] = useState(5);

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

  useEffect(() => {
    const hideSeries = Object.keys(hide).filter((clave) => hide[clave]);
    if (series.length - hideSeries.length === 1) {
      const value = series.filter((serie) => !isHide(serie.name))[0];
      const isSameData = validatedSeries.filter(
        (vSerie) => vSerie.name === value.name
      )[0].isSameData;
      if (isSameData) setTickCount(1);
    } else {
      setTickCount(5);
    }
  }, [hide]);

  return [
    {
      chartData,
      keyNames,
      keyName,
      tooltipActive,
      missingData,
      tickCount,
    },
    {
      isHide,
      setHide,
      handleOpenTooltip,
      handleCloseTooltip,
      getColorId,
    },
  ];
};

export default useLineChartState;
