import React from "react";
import {Switch, Route } from 'react-router-dom';
import HomeContainer from "./components/HomeContainer";


const Routes = () => {

    return(

        <Switch>
            <Route
                exact path='/' component={HomeContainer}
            ></Route>
        </Switch>
    )
    }

export default Routes ;