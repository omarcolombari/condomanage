import { ChakraProvider } from "@chakra-ui/react";
import CustomTheme from "./Style/Theme";
import "@fontsource/poppins";
import "@fontsource/roboto";
import Finance from "./Pages/Finance";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <ChakraProvider theme={CustomTheme}>
      <Finance />
      <ToastContainer />
    </ChakraProvider>
  );
}

export default App;
