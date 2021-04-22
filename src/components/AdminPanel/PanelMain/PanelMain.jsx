import {Switch, Route, useRouteMatch, Redirect} from "react-router-dom";
import React from "react";
import Statistics from "../Statistics/Statistics"
import CitizensList from "../CitizenList/CitizensList";

const PanelMain = () =>{

    const { path } = useRouteMatch();

    return(
        <Switch>
            <Route exact path={path}>
                <Redirect to={path + "/citizenslist"} />
            </Route>
            <Route exact path={path + "/statistics"}>
                <Statistics/>
            </Route>
            <Route exact path={path + "/citizenslist"}>
                <CitizensList/>
            </Route>
        </Switch>
    )
}

export default PanelMain