import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { getLogout } from '../API';

export default function LogoutUser() {

    const history = useHistory();

    const data = {
        id : localStorage.getItem("Id"),
        AccessToken : localStorage.getItem("AccessToken")
    }

    const LogoutUser = () => {
        axios.post("http://54.200.255.83:3000/auth/logout",data)
          .then(function (response) {
            localStorage.removeItem("Id");
            localStorage.removeItem("AccessToken");
            localStorage.removeItem("AccessTokenExpiresIn");
            localStorage.removeItem("RefreshToken");
            localStorage.removeItem("RefreshTokenExpiresIn");
            localStorage.setItem("State", false);
            alert(response.data.data);
            history.push("/");
            history.go(0);
          }).catch(function (error) {
            localStorage.removeItem("State")
            alert("로그인이 만료되었습니다.");
            history.push("/login");
            history.go(1);
            console.log(error)
          }).then(function() {
            localStorage.removeItem("State")
            
          });
      }

    return (
        <Link onClick={LogoutUser}>
            로그아웃
        </Link>
    )
}