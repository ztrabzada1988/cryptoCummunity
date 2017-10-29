import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './js/store';

import './css/App.css';
import App from './js/components/App';


const routes = (
  <Provider store={store} >
    <App />
  </Provider>
)
ReactDOM.render(routes, document.getElementById('root'));
registerServiceWorker();
