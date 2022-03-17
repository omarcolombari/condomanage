import { ChakraProvider } from "@chakra-ui/react";
import Modals from "./Components/Modals";

function App() {
  return (
    <ChakraProvider>
      <Modals/>
    </ChakraProvider>
  )
}

export default App;