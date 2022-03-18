import { ChakraProvider } from "@chakra-ui/react";
import CustomTheme from "./Style/Theme";
import "@fontsource/poppins";
import "@fontsource/roboto";
import ChakraLandingPage from "./pages/Chakra_LandingPage";

function App() {
  return (
    <ChakraProvider theme={CustomTheme}>
      <ChakraLandingPage />
    </ChakraProvider>
  )
}

export default App;