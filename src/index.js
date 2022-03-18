import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ColorModeScript } from '@chakra-ui/react';
import Providers from './providers';

ReactDOM.render(
  <React.StrictMode>
    <Providers>
      <ColorModeScript />
      <App />
    </Providers>
  </React.StrictMode>,
  document.getElementById('root')
);
