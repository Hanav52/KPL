import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { getClothAPI, getCommentAPI } from "../API";
import '../RealMain.css'
import Hcompo from "../헤더/HeaderMenu";
import CenterProfile from "./CenterProfile";
import SideProfile from "./SideProfile";
import styled from "styled-components";

// img컴포넌트 style컴포넌트로 만들기
const Div = styled.div`
  width: 100%; /* 가로 사이즈가 1200px 넘는 해상도에서는 max-width 설정 */
  height: 100%; /* align-items 등으로 수직 가운데 정렬을 위해, 알맞은 height 설정이 필요함 */
  margin: 0 auto; /* 가운데 정렬: 동일 요소에 width 가 설정되어 있을 때에만 적용 */
  padding: 0rem 2rem; /* 좌우 padding 을 살짝 주어서, 좌우에 딱 붙지 않도록 함 */
  overflow: hidden; /* 넘치는 영역에 대해서는 표시안되도록 작성해야 함 */
`;

export default function MyProfile () {

    return (
        <BrowserRouter>
            <Div>
                <Hcompo/>
                <SideProfile></SideProfile>
                <CenterProfile></CenterProfile>
            </Div>
        </BrowserRouter>
    )
}