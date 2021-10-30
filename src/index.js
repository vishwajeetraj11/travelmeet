import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { Auth0ProviderWithHistory } from './components/auth0/auth0-provider-with-history';
import './App.css'
import StyledEngineProvider from "@mui/material/StyledEngineProvider";
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';

const theme = createTheme({
  typography: {
    "fontFamily": `"Inter", "Helvetica", "Arial", sans-serif`,
    "fontSize": 14,
    "fontWeightLight": 300,
    "fontWeightRegular": 400,
    "fontWeightMedium": 500
  },
  palette: {
    primary: {
      main: '#8627E0',
    },
  }
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <StyledEngineProvider injectFirst>
        <BrowserRouter>
          <Auth0ProviderWithHistory>
            <App />
          </Auth0ProviderWithHistory>
        </BrowserRouter>
      </StyledEngineProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);