import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Component/App';
import reducers from './reducers';
import middleware from './middleware';
import {Provider} from 'react-redux'
import {createStore} from 'redux';
const store = createStore(reducers,middleware);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

