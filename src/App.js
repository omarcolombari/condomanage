import { ChakraProvider } from "@chakra-ui/react";
import CustomTheme from "./Style/Theme";
import "@fontsource/poppins";
import "@fontsource/roboto";
import DashboardUser from "./Pages/DashboardUser";

function App() {
  return (
    <ChakraProvider theme={CustomTheme}>
      <DashboardUser></DashboardUser>
    </ChakraProvider>
  )
}

export default App;