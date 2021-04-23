import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { defaultAxios } from "../../config/axios";
import Form from "./Form";
import { getCitizen } from "../../requests/citizensList";
import { prepareToEdit } from "./helpers/prepareToEdit";
import Loading from "../Loading/Loading";
import { useAuth0 } from "@auth0/auth0-react";
import NoPermission from "../NoPermission/NoPermission";

const EditCitizen = () => {
  const [citizenData, setCitizenData] = useState(undefined);

  const { PESEL } = useParams();

  useEffect(() => {
    getCitizen(PESEL).then(setCitizenData);
  }, [PESEL]);

  const { user, isLoading, isAuthenticated } = useAuth0();

  if (!citizenData) {
    return <Loading text="Ładowanie danych..." />;
  }

  const axiosRequest = (values) =>
    defaultAxios.put(`/citizen/updateCitizen/${citizenData._id}`, values);

  if (
    isAuthenticated &&
    !isLoading &&
    user["https://prodevteam-spis.com/authorization"].groups.includes("Admin")
  ) {
    return (
      <Form
        axiosRequest={axiosRequest}
        initialData={prepareToEdit(citizenData)}
        isEdit
      />
    );
  } else {
    return <NoPermission />;
  }
};
export default EditCitizen;
