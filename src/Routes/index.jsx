import { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";

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
            </Route>
            
            <Route path='/login' >
            </Route>
            
            <Route path='/signup' >
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

export default Routes