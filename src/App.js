import { ChakraProvider } from "@chakra-ui/react";
import Settings from "./Pages/Settings";
import GlobalStyle from './styles/global'

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <ChakraProvider>
        <Settings />
      </ChakraProvider>
    </div>
  );
}

export default App;
