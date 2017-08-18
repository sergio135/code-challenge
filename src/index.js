import React from 'react';
import ReactDOM from 'react-dom';
import App from './home/Home';

import './bootstrap.min.css';

const rootElement = document.getElementById('root');

ReactDOM.render(
  <App />,
  rootElement,
);

if (module.hot) {
  module.hot.accept('./home/Home', () => {
    const NextApp = require('./home/Home').default;
    ReactDOM.render(
      <NextApp />,
      rootElement,
    );
  });
}
