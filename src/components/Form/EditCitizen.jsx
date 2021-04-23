import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { defaultAxios } from "../../config/axios";
import Form from "./Form";
import { getCitizen } from "../../requests/citizensList";
import { prepareToEdit } from "./helpers/prepareToEdit";
import Loading from "../Loading/Loading";

const EditCitizen = () => {
  const [citizenData, setCitizenData] = useState(undefined);

  const { PESEL } = useParams();

  useEffect(() => {
    getCitizen(PESEL).then(setCitizenData);
  }, [PESEL]);

  if (!citizenData) {
    return <Loading text="Ładowanie danych..." />;
  }

  const axiosRequest = (values) =>
    defaultAxios.put(`/citizen/updateCitizen/${citizenData._id}`, values);

  return (
    <Form
      axiosRequest={axiosRequest}
      initialData={prepareToEdit(citizenData)}
      isEdit
    />
  );
};
export default EditCitizen;
