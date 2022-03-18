import { ChakraProvider, Heading } from "@chakra-ui/react";
import CustomTheme from "./Style/Theme";
import "@fontsource/poppins";
import "@fontsource/roboto";
import Finance from "./pages/Finance";

function App() {
  return (
    <ChakraProvider theme={CustomTheme}>
      <Finance />
    </ChakraProvider>
  );
}

export default App;
