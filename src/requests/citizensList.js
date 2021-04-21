import { defaultAxios } from "../config/axios";

const getAllCitizens = async (page, limit) => {
  return await defaultAxios
    .get(`/citizen/getCitizens`, {
      params: {
        page: page,
        limit: limit,
      },
    })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

const getCitizen = async (pesel) => {
  return await defaultAxios
    .get(`/citizen/getCitizen/${pesel}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export { getAllCitizens, getCitizen };
