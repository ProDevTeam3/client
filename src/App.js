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
import StackedBarChart from "./charts/StackedBarChart/StackedBarChart";
import EditView from "./components/AdminPanel/EditView/EditView";
import AdminPanel from "./components/AdminPanel/AdminPanel";

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
            <Form />
          </AuthRoute>
          <AuthRoute children={AnkieterLogIn} exact path={"/login/ankieter"} />
          <Route exact path="/login" component={LogIn} />
          <Route exact path="/edit" component={EditView} />
          <Route exact path="/admin" component={AdminPanel} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
