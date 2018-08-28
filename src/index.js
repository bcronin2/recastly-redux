import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import App from './components/App.js';
import searchYouTube from './lib/searchYouTube.js';
import store from './store/store.js';

ReactDOM.render(
  <Provider store={store}>
    <App searchYouTube={searchYouTube} />
  </Provider>,
  document.getElementById('app')
);
