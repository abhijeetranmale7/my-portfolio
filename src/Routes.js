import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"

import Home from "./core/pages/Home"
import ProjectDetails from "./core/pages/ProjectDetails"

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/my-portfolio" component={Home} />
                <Route exact path="/project-details/:slug" component={ProjectDetails} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes
