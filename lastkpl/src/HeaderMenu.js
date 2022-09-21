import { Button } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Hcompo() {
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
                            <Link>로그인</Link>
                        </li>
                        <li>
                            <Link>회원가입</Link>
                        </li>
                        <li>
                            <Link>장바구니</Link>
                            <div className='user_bascket'>0</div>
                        </li>
                        <li>
                            <Link>마이페이지</Link>
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
                                <Button className='menu_btn close'>{/* menu_btn close open 클릭시 변경*/}
                                    <span className='line01'></span>
                                    <span className='line02'></span>
                                    <span className='line03'></span>
                                </Button>
                            </li>
                            <li>
                                <Link>NEW</Link>
                            </li>
                            <li>
                                <Link>BEST</Link>
                            </li>
                        </ul>
                        <ul className='nav'>
                            <li>
                                <Link>TOP</Link>
                                <div className='sub_nav'>
                                    <Link>티셔츠</Link>
                                    <Link>맨투맨&후디</Link>
                                    <Link>블라우스&셔츠</Link>
                                    <Link>니트</Link>
                                </div>
                            </li>
                            <li>
                                <Link>PANTS</Link>
                                <div className='sub_nav'>
                                    <Link>배기</Link>
                                    <Link>세미와이드</Link>
                                    <Link>와이드</Link>
                                    <Link>스트레이트</Link>
                                    <Link>트레이닝</Link>
                                    <Link>부츠</Link>
                                </div>
                            </li>
                            <li>
                                <Link>OUTER</Link>
                                <div className='sub_nav'>
                                    <Link>코트</Link>
                                    <Link>자켓</Link>
                                    <Link>점퍼</Link>
                                    <Link>가디건</Link>
                                    <Link>조끼</Link>
                                </div>
                            </li>
                            <li>
                                <Link>SKIRT</Link>
                                <div className='sub_nav'>
                                    <Link>스커트</Link>
                                </div>
                            </li>
                            <li>
                                <Link>Shoes&Bags</Link>
                                <div className='sub_nav'>
                                    <Link>신발</Link>
                                    <Link>가방</Link>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className='all_menu_box'>
                        <div className='all_menu_inner'>
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
                                    <li>
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