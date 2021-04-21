import axios from "axios";

const getAllCitizens = async (page, limit) => {
  return await axios
    .get(`/citizen/getCitizens`, {
      params: {
        page: page,
        limit: limit,
      },
    })
    .then((res) => {
      // console.log(res);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

const getCitizen = async (pesel) => {
  return await axios
    .get(`/citizen/getCitizen/${pesel}`)
    .then((res) => {
      // console.log(res);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export { getAllCitizens, getCitizen };
