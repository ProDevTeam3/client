const gatherData = (data) => {
  return data.reduce(
    (acc, next) => ({
      labels: [...acc.labels, next.nationality],
      series: [
        ...acc.series.map((series_next, index) => ({
          name: series_next.name,
          data: [...series_next.data, next.industries[index].value],
        })),
      ],
    }),
    {
      labels: [],
      series: [
        ...data[0].industries.map((next) => ({
          name: next.name,
          data: [],
        })),
      ],
    }
  );
};
export default gatherData;
