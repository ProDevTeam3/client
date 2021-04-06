import React from "react";
import AnkieterLogIn from "../AnkieterLogIn/AnkieterLogIn";
import LogIn from "../LogIn/LogIn";
import { useAuth0 } from "@auth0/auth0-react";

const AuthRoute = () => {
  const { isAuthenticated } = useAuth0();
  // TODO: zmienić redirect w auth0
  // TODO: zmienić komponent/ścieżkę na formularz
  return isAuthenticated ? AnkieterLogIn : LogIn;
};

export default AuthRoute;
