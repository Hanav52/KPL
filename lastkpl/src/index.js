import React from 'react';
import ReactDOM from 'react-dom/client';
import CoComponent from './ContentComponent';
import HeaderMenu from './Header';
import SignIn from './Login';
import App from './Redux/Props';
import RegisterCopo from './Register';
import Register from './Register';
import RegisterTest from './RegisterTest';
import Join from './RegisterTest';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CoComponent/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
