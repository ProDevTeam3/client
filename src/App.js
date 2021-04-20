import React from "react";
import "./App.css";
import AnkieterLogIn from "./components/AnkieterLogIn/AnkieterLogIn";
import AuthRoute from "./components/AuthRoute/AuthRoute";
import LogIn from "./components/LogIn/LogIn";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Form from "./components/Form/Form";
import { useAuth0 } from "@auth0/auth0-react";
import Authenticating from "./components/Authenticating/Authenticating";
import WorkingPerChart from "./charts/WorkingPerChart/WorkingPerChart";
import FormOfEmploymentChart from "./charts/FormOfEmploymentChart/FormOfEmploymentChart";
import IndustryChart from "./charts/IndustryChart/IndustryChart";
import CitizensList from "./components/Citizens/CitizensList";

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
          //! DO TESTÓW
          <Route exact path="/map-chart">
            <WorkingPerChart />
          </Route>
          //! DO TESTÓW
          <Route
            exact
            path="/form-of-employment"
            component={FormOfEmploymentChart}
          />
          //! DO TESTÓW
          <Route exact path="/citizens-list">
            <CitizensList />
          </Route>
          <Route exact path="/industry" component={IndustryChart} />
          <AuthRoute path="/form">
            <Form />
          </AuthRoute>
          <AuthRoute children={AnkieterLogIn} exact path={"/login/ankieter"} />
          <Route exact path="/login" component={LogIn} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
