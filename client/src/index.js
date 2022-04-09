import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
// import App from './App';
import AppTest from './AppTest';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <AppTest/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals