import { ChakraProvider } from "@chakra-ui/react";
import Settings from "./Pages/Settings";

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <Settings />
      </ChakraProvider>
    </div>
  );
}

export default App;
