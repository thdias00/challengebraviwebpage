import { Route, Switch } from "react-router-dom"
import Dashboard from "../pages/Dashboard"

const Routes = () => {
    return(
        <Switch>
            <Route exact path="/">
                <Dashboard/>
            </Route>
        </Switch>
    )
}

export default Routes;