import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import CustomTheme from './Styles/Theme';


ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={CustomTheme}>
      
     <ColorModeScript/>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);