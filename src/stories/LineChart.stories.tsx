import React, { useState } from "react";
import { Story } from "@storybook/react";

import { LineChart } from "../components/LineChart";
import {
  LineChartDataType,
  ILineChart,
  SeriesDataType,
  FormatValueType,
} from "../components/LineChart/ChartsTypes";
import AdmirationIcon from "../components/Icons/admirationIcon";

export default {
  title: "Charts/LineChart",
  component: LineChart,
};

const formatValue: FormatValueType = (
  value: number | string,
  options?: Intl.NumberFormatOptions
) => {
  let numeroStr = value.toString();

  let primerosDosDigitos = numeroStr.slice(0, 2);

  let restoDeLosDigitos = numeroStr.slice(2);

  let numeroDecimal = Number(primerosDosDigitos + "." + restoDeLosDigitos);

  let numeroRedondeado = Math.round(numeroDecimal / 5) * 5;

  return numeroRedondeado.toLocaleString();
};

const colors: string[] = ["#26A66B", "#5A5BEB", "#D21A4D"];

const series: SeriesDataType[] = [
  {
    name: "Total Available",
    data: [
      { value: 7000, fluctuation: "0%" },
      { value: 7000, fluctuation: "0%" },
      { value: 7000, fluctuation: "0%" },
      { value: 7000, fluctuation: "0%" },
      { value: 7000, fluctuation: "0%" },
    ],
  },
  {
    name: "Total Borrowed",
    data: [
      { value: 100, fluctuation: "+3.5%" },
      { value: 2300, fluctuation: "-0.8%" },
      { value: 300, fluctuation: "+1.8%" },
      { value: 3200, fluctuation: "+1.8%" },
      { value: 400, fluctuation: "+1.8%" },
    ],
  },
  {
    name: "Total Lent",
    data: [
      { value: 1200, fluctuation: "-0.5%" },
      { value: 6300, fluctuation: "+1.2%" },
      { value: 6500, fluctuation: "-1.1%" },
      { value: 6600, fluctuation: "-1.1%" },
      { value: 6700, fluctuation: "-1.1%" },
    ],
  },
];

const data: LineChartDataType[] = [
  {
    date: "May 19",
  },
  {
    date: "May 22",
  },
  {
    date: "May 26",
  },
  {
    date: "Jun 02",
  },
  {
    date: "Jun 11",
  },
];

const Template: Story<ILineChart> = (args) => {
  const [currentData, setCurrentData] = useState(data);
  const [currentFilter, setCurrentFilter] = useState("ALL");

  const agregarUnaHora = (fecha: string) => {
    var nuevaFecha = new Date(fecha);
    nuevaFecha.setHours(nuevaFecha.getHours() + 1);
    return nuevaFecha.toLocaleString("en-US", {
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
  };

  const filterFunction = (newValue: string) => {
    const newData: LineChartDataType[] = [];
    currentData.forEach((item) => {
      newData.push({ date: agregarUnaHora(item.date) });
    });
    setCurrentData(newData);
  };

  const handleChangeFilter = (newValue: string) => {
    setCurrentFilter(newValue);
    filterFunction(newValue);
  };

  return (
    <LineChart
      {...args}
      data={currentData}
      currentFilter={currentFilter}
      handleChangeFilter={handleChangeFilter}
      loaderComponent={
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <span>Loading...</span>
        </div>
      }
    />
  );
};

export const LineChartItem = Template.bind({});
LineChartItem.args = {
  formatValue,
  series,
  colors,
  dateFilter: ["1D", "7D", "1M", "ALL"],
  loading: false,
  emptyIcon: <AdmirationIcon />,
  emptyTitle: "No data to show",
  emptyDescription: "Data will be listed here when available. ",
  formatDate: (value) => new Date(value).toLocaleString(),
  formatValueAxisX: (value) => value.toLocaleString("en-US"),
  formatValueAxisY: (value) => formatValue(value),
};
