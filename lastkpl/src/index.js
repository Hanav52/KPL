import React from 'react';
import ReactDOM from 'react-dom/client';
import Body from './메인/Body';
import HeaderMenu from './헤더/Header';
import SignIn from './로그인&회원가입/Login';
import reportWebVitals from './reportWebVitals';
import DetailPage from './상세페이지/상세페이지';
import Bascket from './장바구니/장바구니';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Bascket/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
