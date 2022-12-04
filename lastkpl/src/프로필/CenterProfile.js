import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import styled from "styled-components";
import { getClothAPI, getCommentAPI } from "../API";
import '../RealMain.css'

const Div = styled.div`
  width: 70%; /* 가로 사이즈가 1200px 넘는 해상도에서는 max-width 설정 */
  height: 100%; /* align-items 등으로 수직 가운데 정렬을 위해, 알맞은 height 설정이 필요함 */
  padding: 0rem 4rem; /* 좌우 padding 을 살짝 주어서, 좌우에 딱 붙지 않도록 함 */
`;

export default function CenterProfile () {

    return (
        <Div>
            <div className="profilecontent">
                <div className="mypage">
                    <div className="section1">
                        <h2>회원정보</h2>
                        <div className="group">
                            <form className="formtest">
                                <input placeholder="이름"/>
                                <input placeholder="아이디"/>
                                <input placeholder="성별"/>
                                <input placeholder="키"/>cm
                                <input placeholder="몸무게"/>kg
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Div>
    )
}