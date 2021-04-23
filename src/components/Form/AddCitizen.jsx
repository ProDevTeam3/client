import Form from "./Form";
import React from "react";
import { defaultAxios } from "../../config/axios";

const AddCitizen = () => {
  const axiosRequest = (values) =>
    defaultAxios.post("/citizen/addCitizen", values);

  const initialData = {};

  return <Form axiosRequest={axiosRequest} initialData={initialData} />;
};
export default AddCitizen;
