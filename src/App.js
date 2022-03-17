import { ChakraProvider } from "@chakra-ui/react";
import DashboardUser from "./Pages/DashboardUser";

function App() {
  return (
    <ChakraProvider>
      <DashboardUser/>
    </ChakraProvider>
  )
}

export default App;