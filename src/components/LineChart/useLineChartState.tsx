import { useState } from "react";

import { LineChartDataType, SeriesDataType } from ".";

const useLineChartState = ({
  data,
  series,
  dateFilter,
  filterFuntion,
}: {
  data: LineChartDataType[] | undefined;
  series: SeriesDataType[];
  dateFilter: string[] | undefined;
  filterFuntion?(filter: string): void;
}) => {
  const [keyName, setKeyName] = useState("");
  const [tooltipActive, setTooltipActive] = useState(false);
  const [currentFilter, setCurrentFilter] = useState(
    dateFilter?.slice(-1)[0] || ""
  );

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

  const handleChangeFilter = (
    event: React.SyntheticEvent,
    newValue: string
  ) => {
    setCurrentFilter(newValue);
    filterFuntion && filterFuntion(newValue);
  };

  return [
    { chartData, keyNames, keyName, tooltipActive, currentFilter },
    {
      isHide,
      setHide,
      handleOpenTooltip,
      handleCloseTooltip,
      getColorId,
      handleChangeFilter,
    },
  ];
};

export default useLineChartState;
