import { ChakraProvider } from "@chakra-ui/react";
import Settings from "./Pages/Settings";
import CustomTheme from "./Style/Theme";
import "@fontsource/poppins";
import "@fontsource/roboto";

function App() {
  return (
    <div className="App">
      <ChakraProvider theme={CustomTheme}>
        <Settings /> 
      </ChakraProvider>
    </div>
  );
}

export default App;
