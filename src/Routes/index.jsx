import { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import ChakraLandingPage from "../Pages/Chakra_LandingPage";
import ChakraLoginPage from "../Pages/Chakra_Login";
import ChakraSignupPage from "../Pages/Chakra_Signup";

const Routes = () => {

    //AUTENTICAÇÃO
    const [authenticaded, setAuthenticaded] = useState(false)

    useEffect(() => {
        const token = JSON.parse(localStorage.getItem('@condomanage:token'))
        if(token){
            return setAuthenticaded(true)
        }
    }, [authenticaded])


    return (
        <Switch>
            <Route exact path='/' >
                <ChakraLandingPage/>
            </Route>
            
            <Route path='/login' >
                <ChakraLoginPage/>
            </Route>
            
            <Route path='/signup' >
                <ChakraSignupPage/>
            </Route>

            <Route path='/dashboard' >
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