import React from "react";
import "./App.css";
import LogIn from "./components/LogIn/LogIn";
import AnkieterLogIn from "./components/AnkieterLogIn/AnkieterLogIn";
import { useAuth0 } from "@auth0/auth0-react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  const { isAuthenticated } = useAuth0();
  return (
    <ChakraProvider>
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/">
              <Redirect to="/login" />
            </Route>
            // TODO: zmienić komponent/ścieżkę na formularz // TODO: zmienić
            redirect w auth0
            <Route
              path="/login/ankieter"
              component={isAuthenticated ? AnkieterLogIn : LogIn}
            />
            <Route exact path="/login" component={LogIn} />
          </Switch>
        </div>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
