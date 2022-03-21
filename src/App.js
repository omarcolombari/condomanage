import "./style.css"
import { ChakraProvider } from "@chakra-ui/react";
import CustomTheme from "./Style/Theme";
import "@fontsource/poppins";
import "@fontsource/roboto";
import Routes from "./Routes/index";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <ChakraProvider theme={CustomTheme}>
      <ToastContainer position="top-left" />
      <Routes/>
    </ChakraProvider>
  );
}

export default App;
