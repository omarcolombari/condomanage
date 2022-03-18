import { ChakraProvider } from '@chakra-ui/react';
import CustomTheme from './Style/Theme';
import '@fontsource/poppins';
import '@fontsource/roboto';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import DashboardUser from './Pages/DashboardUser';
import DashboardDemand from './Pages/DashboardDemand';

function App() {
  return (
    <ChakraProvider theme={CustomTheme}>
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {/* <DashboardUser></DashboardUser> */}
      <DashboardDemand />
    </ChakraProvider>
  );
}

export default App;
