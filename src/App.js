import { ChakraProvider } from "@chakra-ui/react";
import CustomTheme from "./Style/Theme";
import "@fontsource/poppins";
import "@fontsource/roboto";

function App() {
  return (
    <ChakraProvider theme={CustomTheme}>
    </ChakraProvider>
  )
}

export default App;