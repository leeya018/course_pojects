import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';
import configureStore from './redux/store';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();
debugger
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
