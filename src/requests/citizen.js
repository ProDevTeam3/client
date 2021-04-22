import { defaultAxios } from "../config/axios";

const delCitizen = async (pesel) => {
  console.log(pesel);
  return await defaultAxios
    .delete(`/citizen/deleteCitizen/${pesel}`)
    .then((res) => {
      console.log(res.data);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export { delCitizen };
