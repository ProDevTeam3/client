const gatherData = (data) => {
  return data.reduce(
    (acc, next) => ({
      labels: [...acc.labels, next.label],
      series: [
        ...acc.series.map((series_next, index) => ({
          name: series_next.name,
          data: [...series_next.data, next.values[index].value],
        })),
      ],
    }),
    {
      labels: [],
      series: [
        ...data[0].values.map((next) => ({
          name: next.name,
          data: [],
        })),
      ],
    }
  );
};
export default gatherData;
