import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { HashRouter } from 'react-router-dom';
import App from './App';
import { GlobalStyle } from './GlobalStyle';
import { theme } from './theme';
import store from './store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <HashRouter>
          <App />
        </HashRouter>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);