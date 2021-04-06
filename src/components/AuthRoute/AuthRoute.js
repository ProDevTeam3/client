import React from "react";
import { Redirect, Route } from "react-router-dom";

const AuthRoute = ({ authenticated, children, exact, path }) => {
  return (
    <Route
      exact={exact}
      path={path}
      render={(location) =>
        authenticated ? children : <Redirect to="/login" />
      }
    />
  );
};
export default AuthRoute;
