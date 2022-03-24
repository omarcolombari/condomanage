import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '@fontsource/poppins';
import '@fontsource/roboto';
import { ChakraProvider } from '@chakra-ui/react';
import CustomTheme from './Style/Theme';
import './style.css';
import Routes from './Routes/index';

function App() {
  return (
    <ChakraProvider theme={CustomTheme}>
      <ToastContainer
        position='top-left'
      />
      <Routes />
    </ChakraProvider>
  );
}

export default App;
