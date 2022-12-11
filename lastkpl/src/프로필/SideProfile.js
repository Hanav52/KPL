import { useEffect, useState } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import { getClothAPI, getCommentAPI } from "../API";
import '../RealMain.css'
import styled from "styled-components";
import UpdateIntro from "./UpdateUser";
import DeleteUser from "./DeleteUser";
import Bascket from "../장바구니/장바구니";

const Div = styled.div`
  width: 30%; /* 가로 사이즈가 1200px 넘는 해상도에서는 max-width 설정 */
  height: 100%; /* align-items 등으로 수직 가운데 정렬을 위해, 알맞은 height 설정이 필요함 */
  padding: 0rem 2rem; /* 좌우 padding 을 살짝 주어서, 좌우에 딱 붙지 않도록 함 */
`;
const DD = styled.dd`
margin-bottom: 50px
`;
const Li = styled.li`
margin-bottom: 5px;
`;
const Ul = styled.ul`
padding: 0;
margin: 0;
`;


export default function SideProfile ({profile}) {

    return (
            <Div>
                <div className="aside">
                    <div className="asideMenu">
                        <div className="mypage">
                            <h2>마이페이지</h2>
                            <dl>
                                <DD>
                                    <h3>쇼핑정보</h3>
                                    <Ul>
                                        <Li>
                                            <Link className="pagea"></Link>
                                        </Li>
                                    </Ul>
                                </DD>
                                <DD>
                                    <h3>고객센터</h3>
                                    <Ul>
                                        <Li>
                                            <Link className="pagea">문의</Link>
                                        </Li>
                                    </Ul>
                                </DD>
                                <DD>
                                    <h3>회원정보</h3>
                                    <Ul>
                                        <Li>
                                            {/* <Link className="pagea">회원정보 변경</Link> */}
                                            <UpdateIntro profile={profile}/>
                                        </Li>
                                        <Li>
                                            {/* <Link className="pagea">회원탈퇴</Link> */}
                                            <DeleteUser/>
                                        </Li>
                                    </Ul>
                                </DD>
                            </dl>
                        </div>
                    </div>
                </div>
            </Div>
    )
}