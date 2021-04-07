import React from "react";
import "./App.css";
import LogIn from "./components/LogIn/LogIn";
import AnkieterLogIn from "./components/AnkieterLogIn/AnkieterLogIn";
import Formularz from "./components/Form/Form/Formularz";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/">
              <Redirect to="/login" />
            </Route>
            <Route path="/form" component={Formularz} />
            <Route path="/login/ankieter" component={AnkieterLogIn} />
            <Route exact path="/login" component={LogIn} />
          </Switch>
        </div>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
