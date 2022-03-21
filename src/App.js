
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import TenantsPage from "./components/Feature-tenants";
import "@fontsource/poppins";
import "@fontsource/roboto";

function App() {

  return (
    <div className="App">
      
       <TenantsPage/>
      <ToastContainer />
    </div>
  );

}

export default App;
