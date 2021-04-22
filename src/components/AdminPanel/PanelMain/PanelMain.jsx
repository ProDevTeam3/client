import { Switch, Route, useRouteMatch, Redirect } from "react-router-dom";
import React from "react";
import Statistics from "../Statistics/Statistics";
import CitizensList from "../CitizenList/CitizensList";
import EditView from "../EditView/EditView";

const PanelMain = () => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={path}>
        <Redirect to={path + "/citizenslist"} />
      </Route>
      <Route exact path={path + "/statistics"}>
        <Statistics />
      </Route>
      <Route exact path={path + "/citizenslist"}>
        <CitizensList />
      </Route>
      <Route path={path + "/citizenslist/"}>
        <EditView />
      </Route>
    </Switch>
  );
};

export default PanelMain;
