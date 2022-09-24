import { Button } from '@mui/material';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './RealMain.css'

export default function Hcompo() {

    const [state, setState] = useState(true)

    return (
        <div className="header">
            <div className='header_top'>
                <div className='wrapper'>
                    <ul className='gnd'>
                        <li>
                            <div className='searchArea'>
                                <div className='search'>
                                    검색이 들어가야함
                                </div>
                            </div>
                        </li>
                        <li>
                            <Link className='abcd'>로그인</Link>
                        </li>
                        <li>
                            <Link className='abcd'>회원가입</Link>
                        </li>
                        <li>
                            <Link className='abcd'>장바구니</Link>
                            <div className='user_bascket'>0</div>
                        </li>
                        <li>
                            <Link className='abcd'>마이페이지</Link>
                        </li>
                    </ul>    
                </div>                
            </div>
            <div className='header_mid'>    
                <div className='wrapper'>
                    <h1 className='hd_logo'>
                        <Link>KPL</Link>
                    </h1>
                </div>            
            </div>
            <div className='header_btm'>
                <div className='wrapper'>
                    <div className='nav_box'>
                        <ul className='nav point'>
                            <li>
                                <button className={state ? "menu_btn close" : "menu_btn close open"} onClick={() => {setState(!state);}}>{/* menu_btn close open 클릭시 변경*/}
                                    <span className='line01'></span>
                                    <span className='line02'></span>
                                    <span className='line03'></span>
                                </button>
                            </li>
                            <li>
                                <Link className='item dot'>NEW</Link>
                            </li>
                            <li>
                                <Link className='item dot'>BEST</Link>
                            </li>
                        </ul>
                        <ul className='nav'>
                            <li>
                                <Link className='item'>TOP</Link>
                                <div className='sub_nav'>
                                    <Link className='sub_item'>티셔츠</Link>
                                    <Link className='sub_item'>맨투맨&후디</Link>
                                    <Link className='sub_item'>블라우스&셔츠</Link>
                                    <Link className='sub_item'>니트</Link>
                                </div>
                            </li>
                            <li>
                                <Link className='item'>PANTS</Link>
                                <div className='sub_nav'>
                                    <Link className='sub_item'>배기</Link>
                                    <Link className='sub_item'>세미와이드</Link>
                                    <Link className='sub_item'>와이드</Link>
                                    <Link className='sub_item'>스트레이트</Link>
                                    <Link className='sub_item'>트레이닝</Link>
                                    <Link className='sub_item'>부츠</Link>
                                </div>
                            </li>
                            <li>
                                <Link className='item'>OUTER</Link>
                                <div className='sub_nav'>
                                    <Link className='sub_item'>코트</Link>
                                    <Link className='sub_item'>자켓</Link>
                                    <Link className='sub_item'>점퍼</Link>
                                    <Link className='sub_item'>가디건</Link>
                                    <Link className='sub_item'>조끼</Link>
                                </div>
                            </li>
                            <li>
                                <Link className='item'>SKIRT</Link>
                                <div className='sub_nav'>
                                    <Link className='sub_item'>스커트</Link>
                                </div>
                            </li>
                            <li>
                                <Link className='item'>Shoes&Bags</Link>
                                <div className='sub_nav'>
                                    <Link className='sub_item'>신발</Link>
                                    <Link className='sub_item'>가방</Link>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className='all_menu_box' style={state ? {display: "none"} : {display: "block"}} >
                        <div className='all_menu_inner'>
                            <div className='menu_box'>
                                <ul className='menu_list'>
                                    <li>
                                        <Link className='item'>NEW
                                        <span className='sub_item'>신상품 매일 자정 오픈</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className='item'>BEST
                                        <span className='sub_item'>가장 많이 조회한 상품</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className='menu_box'>
                                <ul className='menu_list'>
                                    <li>
                                        <Link className='item'>TOP</Link>
                                        <div className='sub_item'>
                                            <Link>티셔츠</Link>
                                            <Link>맨투맨&후디</Link>
                                            <Link>블라우스&셔츠</Link>
                                            <Link>니트</Link>
                                        </div>
                                    </li>
                                    <li>
                                        <Link className='item'>PANTS</Link>
                                        <div className='sub_item'>
                                            <Link>배기</Link>
                                            <Link>세미와이드</Link>
                                            <Link>와이드</Link>
                                            <Link>스트레이트</Link>
                                            <Link>트레이닝</Link>
                                            <Link>부츠</Link>
                                        </div>
                                    </li>
                                    <li>
                                        <Link className='item'>OUTER</Link>
                                        <div className='sub_item'>
                                            <Link>코트</Link>
                                            <Link>자켓</Link>
                                            <Link>점퍼</Link>
                                            <Link>가디건</Link>
                                            <Link>조끼</Link>
                                        </div>
                                    </li>
                                    <li>
                                        <Link className='item'>SKIRT</Link>
                                        <div className='sub_item'>
                                            <Link>스커트</Link>
                                        </div>
                                    </li>
                                    <li className='flexNone'>
                                        <Link className='item'>Shoes&Bags</Link>
                                        <div className='sub_item'>
                                            <Link>신발</Link>
                                            <Link>가방</Link>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className='menu_box'>
                                <dl className='personal_list'>
                                    <dt>
                                        <Link>MYPAGE</Link>
                                    </dt>
                                    <dd>
                                        <Link>장바구니</Link>
                                        <Link>프로필</Link>
                                        <Link>최근주문내역</Link>
                                    </dd>
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>                
            </div>
        </div>
    )
}