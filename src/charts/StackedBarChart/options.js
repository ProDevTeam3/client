const generateOptions = (series) => ({
  chart: {
    stacked: true,
  },
  plotOptions: {
    bar: {
      borderRadius: 4,
      horizontal: true,
      dataLabels: {
        position: "bottom",
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  xaxis: {
    categories: series.labels,
    labels: {
      formatter: function (val) {
        return val / 1000 + "k";
      },
    },
  },
  yaxis: {
    labels: {
      show: true,
      style: {
        fontFamily: "Helvetica, Arial, sans-serif",
        fontWeight: "bold",
      },
    },
  },
  tooltip: {
    enabled: true,
    x: {
      show: false,
    },
  },
});
export default generateOptions;
