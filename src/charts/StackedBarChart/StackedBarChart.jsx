import React from "react";
import Chart from "react-apexcharts";
import gatherData from "./helper"
import generateOptions from "./options"

const StackedBarChart = ({data}) => {

  const series = gatherData(data)
  const options = generateOptions(series)

  return (
      <div style={{width: "50%", height: "70%"}}>
      <Chart options={options} series={series.series} type="bar" height="100%" width="100%"/>
      </div>
  );
};
export default StackedBarChart;