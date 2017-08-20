import React from 'react';
import ReactDOM from 'react-dom';
import Router from './Router';

import './bootstrap.min.css';

const rootElement = document.getElementById('root');

ReactDOM.render(
  <Router />,
  rootElement,
);

if (module.hot) {
  module.hot.accept('./Router', () => {
    const NextApp = require('./Router').default;
    ReactDOM.render(
      <NextApp />,
      rootElement,
    );
  });
}
