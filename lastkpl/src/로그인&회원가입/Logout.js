import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { getLogout } from '../API';

export default function LogoutUser() {

    const history = useHistory();

    const data = {
        id : localStorage.getItem("Id"),
    }

    const LogoutUser = () => {
        axios.post("http://54.200.255.83:3000/auth/logout", data, {
          headers: {
            'Authorization': `Bearer ` + localStorage.getItem("AccessToken")
          }})
          .then(function (response) {
            console.log(response)
            alert(response.data.logoutid + "님 안녕히가세요.");
            localStorage.clear();
            history.push("/");
            history.go(0);
          }).catch(function (error) {
            localStorage.clear()
            alert("로그인이 만료되었습니다.");
            history.push("/login");
            history.go(1);
            console.log(error)
          })
      }

    return (
        <Link onClick={LogoutUser} className="abcd">
            로그아웃
        </Link>
    )
}