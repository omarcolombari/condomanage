import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import App from './App';
import { ColorModeScript } from '@chakra-ui/react';
import Providers from "./Providers";
ReactDOM.render(
  ReactDOM.render(
    <React.StrictMode>
      <Providers>
        <ColorModeScript/>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Providers>
    </React.StrictMode>,
    document.getElementById("root")
  )
);
