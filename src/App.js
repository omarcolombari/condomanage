import "./style.css"
import { ChakraProvider } from "@chakra-ui/react";
import CustomTheme from "./Style/Theme";
import "@fontsource/poppins";
import "@fontsource/roboto";
import { ToastContainer } from "react-toastify";
import Routes from "./Routes";

function App() {
  return (
    <ChakraProvider theme={CustomTheme}>
      <ToastContainer position="top-left" />
      <Routes/>
    </ChakraProvider>
  )
}

export default App;