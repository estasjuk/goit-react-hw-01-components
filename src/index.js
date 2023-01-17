//import React from 'react';
import ReactDOM from 'react-dom';
import { App } from 'components/App/App';
//import ReactDOM from 'react-dom/client';
import './index.css';
import { ThemeContext, ThemeProvider } from '@emotion/react';
import React from 'react';
import { theme } from './constants/theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
