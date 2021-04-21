import axios from "axios";

const getAllCitizens = async (page, limit) => {
    return await axios.get(`http://${process.env.REACT_APP_API_HOST}:${process.env.REACT_APP_API_PORT}/citizen/getCitizens`, {params:{
        page: page,
        limit: limit
    }})
    .then((res) => {
        // console.log(res);
        return res.data;
    })
    .catch((err) => {
        console.log(err);
    })
}

const getCitizen = async (pesel) => {
    return await axios.get(`http://${process.env.REACT_APP_API_HOST}:${process.env.REACT_APP_API_PORT}/citizen/getCitizen/${pesel}`)
    .then((res) => {
        // console.log(res);
        return res.data;
    })
    .catch((err) => {
        console.log(err);
    })
}

export {getAllCitizens, getCitizen};