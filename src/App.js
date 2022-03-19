import { ChakraProvider } from "@chakra-ui/react";
import CustomTheme from "./Style/Theme";
import "@fontsource/poppins";
import "@fontsource/roboto";
import { ToastContainer } from "react-toastify";
import ChakraSignupPage from "./pages/Chakra_Signup";

function App() {
  return (
    <ChakraProvider theme={CustomTheme}>
      <ChakraSignupPage />
      <ToastContainer position="top-left" />
    </ChakraProvider>
  )
}

export default App;