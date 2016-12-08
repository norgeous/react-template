require('./component/common/style/main.scss');
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './App';
import AppState from './component/common/store/AppState';

const appState = new AppState();

ReactDOM.render(
  <AppContainer>
    <App store={appState} />
  </AppContainer>,
  document.getElementById('root')
);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;
    ReactDOM.render(
      <AppContainer>
        <NextApp store={appState} />
      </AppContainer>
      ,
      document.getElementById('root')
    );
  });
}