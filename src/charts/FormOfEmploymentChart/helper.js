const gatherData = (data) => {
    return Object.keys(data).reduce((acc, next) => ({
        labels: [...acc.labels, next],
        data: [...acc.data, data[next]]
    }),
    {labels: [], data: []})
}
export default gatherData;