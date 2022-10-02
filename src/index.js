import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// sends the app class to the front end html found in public
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
