import { ChakraProvider } from "@chakra-ui/react";
import CustomTheme from "./Style/Theme";
import "@fontsource/poppins";
import "@fontsource/roboto";
import ChakraLandingPage from "./pages/Chakra_Login";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <ChakraProvider theme={CustomTheme}>
      <ChakraLandingPage />
      <ToastContainer position="top-left" />
    </ChakraProvider>
  )
}

export default App;