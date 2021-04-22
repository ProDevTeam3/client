import {Switch, Route, useRouteMatch, Redirect} from "react-router-dom";
import React from "react";
import Statistics from "../Statistics/Statistics"
import EditView from "../EditView/EditView";
import CitizensList from "../CitizenList/CitizensList";

const PanelMain = () =>{

    const { path } = useRouteMatch();

    return(
        <Switch>
            <Route exact path={path}>
                <Redirect to={path + "/citizenslist"} />
            </Route>
            <Route path={path + "/statistics"}>
                <Statistics/>
            </Route>
            <Route path={path + "/citizenslist"}>
                <CitizensList/>
            </Route>
            <Route path={path + "/editview"}>
                <EditView/>
            </Route>
        </Switch>
    )
}

export default PanelMain