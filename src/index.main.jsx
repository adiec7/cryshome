import * as React from 'react';
import { render } from 'react-dom';
import { store } from './Redux/Helpers';
import { Provider } from 'react-redux';
import { App } from './App/MainRoute';
import registerServiceWorker from './registerServiceWorker';

// setup fake backend
import { configureFakeBackend } from './Redux/Helpers';
configureFakeBackend();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
