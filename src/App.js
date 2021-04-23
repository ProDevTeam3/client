import React from "react";
import "./App.css";
import AnkieterLogIn from "./components/AnkieterLogIn/AnkieterLogIn";
import AuthRoute from "./components/AuthRoute/AuthRoute";
import LogIn from "./components/LogIn/LogIn";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Form from "./components/Form/Form";
import { useAuth0 } from "@auth0/auth0-react";
import Authenticating from "./components/Authenticating/Authenticating";
import AdminPanel from "./components/AdminPanel/AdminPanel";
import AddCitizen from "./components/Form/AddCitizen";
import EditCitizen from "./components/Form/EditCitizen";

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Authenticating />;
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
          <AuthRoute path="/form">
            <AddCitizen />
          </AuthRoute>
          <AuthRoute path="/edit/:PESEL">
            <EditCitizen />
          </AuthRoute>
          <AuthRoute children={AnkieterLogIn} exact path={"/login/ankieter"} />
          <Route exact path="/login" component={LogIn} />
          <Route path="/admin" component={AdminPanel} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
