import { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import ChakraLandingPage from "../Pages/Chakra_LandingPage";
import ChakraLoginPage from "../Pages/Chakra_Login";
import ChakraSignupPage from "../Pages/Chakra_Signup";
import DashboardUser from "../Pages/DashboardUser";
import PageTenant from "../Pages/Tenant_Page";
import Finance from "../Pages/Finance";

const Routes = () => {
  const [authenticaded, setAuthenticaded] = useState(false);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("@CondoManage:token"));
    if (token) {
      return setAuthenticaded(true);
    }
  }, [authenticaded]);

  return (
    <Switch>
      <Route exact path="/">
        <ChakraLandingPage />
      </Route>

      <Route path="/login">
        <ChakraLoginPage
          authenticaded={authenticaded}
          setAuthenticaded={setAuthenticaded}
        />
      </Route>

      <Route path="/signup">
        <ChakraSignupPage />
      </Route>

      <Route path="/dashboard">
        <DashboardUser
          authenticaded={authenticaded}
          setAuthenticaded={setAuthenticaded}
        />
      </Route>

      <Route path="/finances">
        <Finance
          authenticaded={authenticaded}
          setAuthenticaded={setAuthenticaded}
        />
      </Route>

      <Route path="/tenants">
        <PageTenant
          authenticaded={authenticaded}
          setAuthenticaded={setAuthenticaded}
        />
      </Route>

      <Route path="/settings"></Route>
    </Switch>
  );
};

export default Routes;
