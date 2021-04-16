const minValue = (data) => {
  return data.reduce((value, x) => {
    return x.value <= value ? x.value : value;
  }, []);
};

const maxValue = (data) => {
  return data.reduce((value, x) => {
    return x.value >= value ? x.value : value;
  }, []);
};

// Temporary placeholder for map test data
const mapData = [
  {
    id: 0,
    name: "Polska",
    data: [
      { id: "72", value: 26 },
      { id: "73", value: 12 },
      { id: "74", value: 12 },
      { id: "75", value: 4 },
      { id: "76", value: 25 },
      { id: "77", value: 23 },
      { id: "78", value: 18 },
      { id: "79", value: 14 },
      { id: "80", value: 24 },
      { id: "81", value: 14 },
      { id: "82", value: 6 },
      { id: "83", value: 9 },
      { id: "84", value: 14 },
      { id: "85", value: 5.6 },
      { id: "86", value: 3.8 },
      { id: "87", value: 15.9 },
    ],
  },
  {
    id: 1,
    name: "Niemcy",
    data: [
      { id: "72", value: 4 },
      { id: "73", value: 6 },
      { id: "74", value: 12 },
      { id: "75", value: 4 },
      { id: "76", value: 25 },
      { id: "77", value: 23 },
      { id: "78", value: 8 },
      { id: "79", value: 14 },
      { id: "80", value: 2 },
      { id: "81", value: 14 },
      { id: "82", value: 6 },
      { id: "83", value: 3 },
      { id: "84", value: 34 },
      { id: "85", value: 18 },
      { id: "86", value: 2 },
      { id: "87", value: 15.9 },
    ],
  },
  {
    id: 2,
    name: "Ukraina",
    data: [
      { id: "72", value: 1 },
      { id: "73", value: 12 },
      { id: "74", value: 12 },
      { id: "75", value: 4 },
      { id: "76", value: 25 },
      { id: "77", value: 23 },
      { id: "78", value: 5 },
      { id: "79", value: 14 },
      { id: "80", value: 43 },
      { id: "81", value: 14 },
      { id: "82", value: 6 },
      { id: "83", value: 9 },
      { id: "84", value: 14 },
      { id: "85", value: 13 },
      { id: "86", value: 3.8 },
      { id: "87", value: 2 },
    ],
  },
  {
    id: 3,
    name: "Czechy",
    data: [
      { id: "72", value: 6 },
      { id: "73", value: 12 },
      { id: "74", value: 3 },
      { id: "75", value: 34 },
      { id: "76", value: 25 },
      { id: "77", value: 1 },
      { id: "78", value: 18 },
      { id: "79", value: 3 },
      { id: "80", value: 3 },
      { id: "81", value: 14 },
      { id: "82", value: 6 },
      { id: "83", value: 15 },
      { id: "84", value: 14 },
      { id: "85", value: 5.6 },
      { id: "86", value: 3.8 },
      { id: "87", value: 6 },
    ],
  },
  {
    id: 4,
    name: "Kongo",
    data: [
      { id: "72", value: 0 },
      { id: "73", value: 0 },
      { id: "74", value: 0 },
      { id: "75", value: 1.5 },
      { id: "76", value: 3.2 },
      { id: "77", value: 0 },
      { id: "78", value: 1.1 },
      { id: "79", value: 0 },
      { id: "80", value: 0 },
      { id: "81", value: 2.3 },
      { id: "82", value: 0 },
      { id: "83", value: 0 },
      { id: "84", value: 0 },
      { id: "85", value: 0 },
      { id: "86", value: 0 },
      { id: "87", value: 0 },
    ],
  },
];

export { minValue, maxValue, mapData };
