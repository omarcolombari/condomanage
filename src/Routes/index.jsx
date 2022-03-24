import { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import DashboardPage from "../Pages/DashboardPage";
import DemandPage from "../Pages/DemandPage";
import FinancePage from "../Pages/FinancePage";
import TenantPage from "../Pages/TenantPage";
import SettingsPage from "../Pages/SettingsPage";
import LandingPage from "../Pages/LandingPage";
import LoginPage from "../Pages/LoginPage";
import SignupPage from "../Pages/SignupPage";

const Routes = () => {
  const [ authenticaded, setAuthenticaded ] = useState( false );
  
  useEffect(() => {
    const token =JSON.parse(localStorage.getItem("@CondoManage:token"))

    if (token) {
      return setAuthenticaded(true);
    }
  }, [authenticaded]);

  return (
    <Switch>
      <Route exact path="/">
        <LandingPage />
      </Route>

      <Route path="/login">
        <LoginPage
          authenticaded={authenticaded}
          setAuthenticaded={setAuthenticaded}
        />
      </Route>

      <Route path="/signup">
        <SignupPage 
          authenticaded={authenticaded}
          setAuthenticaded={setAuthenticaded}/>
      </Route>

      <Route path="/dashboard">
        <DashboardPage
          authenticaded={authenticaded}
          setAuthenticaded={setAuthenticaded}
        />
      </Route>

      <Route path="/finances">
        <FinancePage
          authenticaded={authenticaded}
          setAuthenticaded={setAuthenticaded}
        />
      </Route>

      <Route path="/tenants">
        <TenantPage
          authenticaded={authenticaded}
          setAuthenticaded={setAuthenticaded}
        />
      </Route>

      <Route path="/requires">
        <DemandPage
          authenticaded={authenticaded}
          setAuthenticaded={setAuthenticaded}
        />
      </Route>

      <Route path="/settings">
        <SettingsPage 
          authenticaded={authenticaded} 
          setAuthenticaded={setAuthenticaded} 
        />
      </Route>
    </Switch>
  );
};

export default Routes;
