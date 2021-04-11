import React from "react";
import "./App.css";
import AnkieterLogIn from "./components/AnkieterLogIn/AnkieterLogIn";
import AuthRoute from "./components/AuthRoute/AuthRoute";
import LogIn from "./components/LogIn/LogIn";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Form from "./components/Form/Form";

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/">
              <Redirect to="/login" />
            </Route>
            <Route path="/form">
              <Form />
            </Route>
            <AuthRoute
              children={AnkieterLogIn}
              exact
              path={"/login/ankieter"}
            />
            <Route exact path="/login" component={LogIn} />
          </Switch>
        </div>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
