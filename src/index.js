import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import CustomTheme from './Style/Theme'

import Providers from './Providers';

ReactDOM.render(
  <React.StrictMode>
    <Providers>
    <ChakraProvider theme={CustomTheme}>
      
      <ColorModeScript/>
       <App />
     </ChakraProvider>
    </Providers>

  </React.StrictMode>,
  document.getElementById('root')
);