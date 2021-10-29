import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { Auth0ProviderWithHistory } from './components/auth0/auth0-provider-with-history';
import { StylesProvider } from '@mui/styles';
import './App.css'
import StyledEngineProvider from "@mui/material/StyledEngineProvider";

ReactDOM.render(
  <React.StrictMode>
  <StyledEngineProvider injectFirst>
      <BrowserRouter>
        <Auth0ProviderWithHistory>
          <App />
        </Auth0ProviderWithHistory>
      </BrowserRouter>
      </StyledEngineProvider>,
  </React.StrictMode>,
  document.getElementById('root')
);