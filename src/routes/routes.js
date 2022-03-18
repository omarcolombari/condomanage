import { Route, Switch } from "react-router-dom"
import LoginContainer from "../Components/LoginContainer";
import LoginPageContainer from "../pages/Chakra_Login";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/">
                <LoginContainer />
            </Route>
            <Route path="/login">
                <Login />
            </Route>
            <Route path="/signup">
                <Signup />
            </Route>
        </Switch>
    )
}

export default Routes;