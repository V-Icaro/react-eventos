import React from 'react';
import ReactDOM from 'react-dom';
import Favicon from 'react-favicon';
import App from './App';


ReactDOM.render(
  <>
  <Favicon url="https://ncdn0.infojobs.com.br/logos/2012/03/30/197355.jpg" />
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </>,
  document.getElementById('root')
);

