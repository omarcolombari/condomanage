import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "@fontsource/poppins";
import "@fontsource/roboto";
import PageTenant from "./Pages/Tenant_Page";
import { ChakraProvider } from '@chakra-ui/react';
import CustomTheme from './Style/Theme';
import "./style.css"
import Routes from "./Routes/index";

function App() {
  return (
    <ChakraProvider theme={CustomTheme}>
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Routes/>
    </ChakraProvider>
  );

}

export default App;
