import React from "react";
import "./App.css";
import AnkieterLogIn from "./components/AnkieterLogIn/AnkieterLogIn";
import AuthRoute from "./components/AuthRoute/AuthRoute";
import LogIn from "./components/LogIn/LogIn";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Form from "./components/Form/Form";
import { useAuth0 } from "@auth0/auth0-react";
import Authenticating from "./components/Authenticating/Authenticating";
import FormOfEmploymentChart from "./charts/FormOfEmploymentChart/FormOfEmploymentChart";

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
          <Route exact path="/form-of-employment" component={FormOfEmploymentChart}/>
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
