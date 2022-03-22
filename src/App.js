import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "@fontsource/poppins";
import "@fontsource/roboto";
import PageTenant from "./page/Tenant_Page";

function App() {

  return (
    <div className="App">
      
      <PageTenant/>
      <ToastContainer />
    </div>
  );

}

export default App;
