const generateOptions = (series) => ({
  plotOptions: {
    bar: {
      borderRadius: 4,
      horizontal: true,
      dataLabels: {
        position: "bottom",
      },
    },
  },
  fill: {
    type: "solid",
    colors: ["#248bcc"],
  },
  dataLabels: {
    enabled: true,
    textAnchor: "start",
    formatter: function (val, opt) {
      return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val;
    },
    offsetX: 0,
  },
  xaxis: {
    categories: series.labels,
  },
  yaxis: {
    labels: {
      show: false,
      style: {
        fontFamily: "Helvetica, Arial, sans-serif",
        fontWeight: "bold",
      },
    },
  },
  tooltip: {
    enabled: false,
  },
});
export default generateOptions;
