import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import PropTypes from "prop-types";

const AuthRoute = ({ children, exact, path }) => {
  const { isAuthenticated } = useAuth0();
  return (
    <Route
      exact={exact}
      path={path}
      render={(location) =>
        isAuthenticated ? children : <Redirect to="/login" />
      }
    />
  );
};

AuthRoute.propTypes = {
  children: PropTypes.node,
  exact: PropTypes.bool,
  path: PropTypes.string,
};

export default AuthRoute;
