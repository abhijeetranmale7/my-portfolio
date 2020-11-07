import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"

import Home from "./core/pages/Home"

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/my-portfolio" component={Home} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes
