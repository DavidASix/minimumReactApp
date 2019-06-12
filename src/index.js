import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);

if (module.hot) {
  module.hot.accept('./App', () => {
    // Get the updated code
    const NextApp = require('./App').default;
    render(NextApp);
  });
}