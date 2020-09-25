import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter, Route } from 'react-router-dom';
import App from './App';
import { store } from './store';

render(
  <Provider store={store}>
    <HashRouter>
      <Route exact path="/" component={App} />
    </HashRouter>
  </Provider>,
  document.getElementById('root'),
);
