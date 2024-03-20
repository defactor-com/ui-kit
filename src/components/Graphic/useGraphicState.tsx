import { useState } from "react";

import { GraphicDataType, SeriesDataType } from ".";

const useGraphicState = ({
  data,
  series,
}: {
  data: GraphicDataType[] | undefined;
  series: SeriesDataType[];
}) => {
  const getInitialData = (
    data: GraphicDataType[] | undefined,
    series: SeriesDataType[]
  ) => {
    const chartData: any =
      data?.map((item) => ({ ...item, fluctuation: {} })) || [];
    const keyNames: string[] = [];
    const hideInitialStatus: Record<string, boolean> = {};

    series.forEach((element) => {
      keyNames.push(element.name);
      hideInitialStatus[element.name] = false;
      element.data.forEach((item, index) => {
        if (chartData[index]) {
          chartData[index][element.name] = item.value;
          chartData[index].fluctuation[element.name] = item.fluctuation;
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
  const [keyName, setKeyName] = useState("");
  const [tooltipActive, setTooltipActive] = useState(false);

  const handleOpenTooltip = (_dotProps: any, payload: any) => {
    setKeyName(payload.dataKey);
    setTooltipActive(true);
  };

  const handleCloseTooltip = () => {
    setTooltipActive(false);
  };

  const isHide = (keyName: string) => hide[keyName]

  return [
    { chartData, keyNames, keyName, tooltipActive },
    { isHide, setHide, handleOpenTooltip, handleCloseTooltip },
  ];
};

export default useGraphicState;
