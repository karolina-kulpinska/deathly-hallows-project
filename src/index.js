import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { HashRouter } from 'react-router-dom';
import App from './App';
import { GlobalStyle } from './GlobalStyle';
import { theme } from './theme';
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <HashRouter>
          <App />
        </HashRouter>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
