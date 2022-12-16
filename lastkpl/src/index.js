import React from 'react';
import ReactDOM from 'react-dom/client';
import Body from './메인/Body';
import HeaderMenu from './헤더/Header';
import SignIn from './로그인&회원가입/Login';
import reportWebVitals from './reportWebVitals';
import DetailPage from './상세페이지/상세페이지';
import Bascket from './장바구니/장바구니';
import MyProfile from './프로필/MyProfile';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Body/>
  </React.StrictMode>
);

reportWebVitals();
