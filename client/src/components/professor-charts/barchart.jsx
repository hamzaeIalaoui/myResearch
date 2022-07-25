import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Month", "Applied", "Left"],
  ["Jan", 1000, 400],
  ["Feb", 1170, 460],
  ["March", 660, 1120],
  ["April", 1030, 540],
];

export const options = {
  chart: {
    title: "The number of applied and left students on assignments per month",
  },
};

export function BarChart() {
  return (
    <Chart
      chartType="Bar"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}
