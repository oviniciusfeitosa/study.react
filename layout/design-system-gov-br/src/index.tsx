import './index.css';
import '@govbr/dsgov/dist/dsgov.css';
import '@govbr/dsgov/dist/dsgov-base.css';

import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  
  <React.StrictMode>
    {/* <link rel="stylesheet" href="https://cdn.dsgovserprodesign.estaleiro.serpro.gov.br/design-system/fonts/rawline/css/rawline.css"/>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway:300,400,500,600,700,800,900&amp;display=swap"/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css"/> */}
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
