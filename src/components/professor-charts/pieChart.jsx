import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Task", "Hours per Day"],
  ["Students by type of studying", 11],
  ["School of Humanities and Social Sciences ", 2],
  ["School of Business Administration", 2],
  ["others", 2], // CSS-style declaration
];

export const options = {
  pieHole: 0.9,
  is3D: false,
};

export function PieChart() {
  return (
    <Chart
      chartType="PieChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}
