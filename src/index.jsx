import React from 'react';
import { ThemeProvider } from 'styled-components';
import ReactDOM from 'react-dom/client';
import { GlobalStyle } from './styles/global-styles';
import { theme } from './styles/theme';
import Home from './templates/App';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <Home />
    <GlobalStyle />
    </ThemeProvider>  
  </React.StrictMode>
);

