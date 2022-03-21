import { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import ChakraLandingPage from "../pages/Chakra_LandingPage";
import ChakraLoginPage from "../pages/Chakra_Login";
import ChakraSignupPage from "../pages/Chakra_Signup";
import DashboardUser from "../pages/DashboardUser";

const Routes = () => {

    //AUTENTICAÇÃO
    const [authenticaded, setAuthenticaded] = useState(false);
    const token = JSON.parse(localStorage.getItem('@CondoManage:token')) || "";
    
    useEffect(() => {
        // const token = JSON.parse(localStorage.getItem('@CondoManage:token'));
        if(token !== ""){
            return setAuthenticaded(true)
        }
    }, [token])

    return (
        <Switch>
            <Route exact path='/' >
                <ChakraLandingPage/>
            </Route>
            
            <Route path='/login' >
                <ChakraLoginPage authenticaded={authenticaded} setAuthenticaded={setAuthenticaded}/>
            </Route>
            
            <Route path='/signup' >
                <ChakraSignupPage/>
            </Route>

            <Route path='/dashboard' >
                <DashboardUser authenticaded={authenticaded} setAuthenticaded={setAuthenticaded}/>
            </Route>

            <Route path='/finances' >
            </Route>

            <Route path='/tenants' >
            </Route>

            <Route path='/settings' >
            </Route>  
        </Switch>
    )
}

export default Routes;