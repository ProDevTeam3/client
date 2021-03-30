import React from "react";
import './App.css';
import LogIn from "./components/LogIn/LogIn";
import AnkieterLogIn from "./components/AnkieterLogIn/AnkieterLogIn";
import { BrowserRouter, Route, Switch } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      
      <Switch>
        <Route exact path="/" component={LogIn}/>
        <Route path="/login/ankieter" 
        component={AnkieterLogIn}/>
        <Route exact path="/login" component={LogIn}/>
        
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
