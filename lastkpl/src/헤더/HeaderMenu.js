import { Button } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { getMainCategory, getRecent } from '../API';
import '../RealMain.css'
import GetRefreshToken from '../RefreshToken';
import LogoutUser from '../로그인&회원가입/Logout';
import GetRefresh from '../로그인&회원가입/Logout';

export default function Hcompo() {

    const [state, setState] = useState(true)
    const [visible, setVisible] = useState(false)
    const history = useHistory();
    // 카테고리 API 저장
    const [newbest, setNewBest] = useState([]);
    const [category, setCategory] = useState([]);

    const Category = async (e) => {
        try {
            const response = await getMainCategory();
                setNewBest(response.data.data1);
                setCategory(response.data.data2);
        } catch (e) {
           console.error(e);
        }
    }
    useEffect(()=> {
        setVisible(localStorage.getItem("State"));
        Category();
    },[setVisible])

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
                            {!visible ? <Link className='abcd' to="/login">로그인</Link> : <LogoutUser/> }
                        </li>
                        <li>
                        {!visible ? <Link className='abcd' >회원가입</Link> : <Link className='abcd' >{localStorage.getItem("Id")}</Link> }
                        </li>
                        <li>
                            <Link className='abcd'><GetRefreshToken/></Link>
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
                        <Link to="/">KPL</Link>
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
                            {newbest.map(({categoryid, categoryname}) => (
                            <li key={categoryid}>
                                <Link className='item dot' to='/cate' onClick={()=> {localStorage.setItem("cateid", categoryid); localStorage.setItem("catename", categoryname); history.push('/cate'); history.go(0)}}>{categoryname}</Link>
                            </li>
                            ))}
                        </ul>
                        <ul className='nav'>
                        {category.map(({ categoryid, categoryname }) => (
                            <li>
                                <Link className='item' to='/cate' onClick={()=> {localStorage.setItem("cateid", categoryid); localStorage.setItem("catename", categoryname); history.push('/cate'); history.go(0)}}>{categoryname}</Link>
                            </li>
                        ))}
                        </ul>
                    </div>
                    <div className='all_menu_box' style={state ? {display: "none"} : {display: "block"}} >
                        <div className='all_menu_inner'>
                            <div className='menu_box'>
                                <ul className='menu_list'>
                                    {newbest.map(({categoryid, categoryname, subcategory}) => (
                                    <li key={categoryid}>
                                        <Link className='item' to='/cate' onClick={()=> {localStorage.setItem("cateid", categoryid); localStorage.setItem("catename", categoryname)}}>{categoryname}
                                        <span className='sub_item' to='/cate' onClick={()=> {localStorage.setItem("cateid", categoryid); localStorage.setItem("catename", categoryname)}}>{subcategory}</span>
                                        </Link>
                                    </li>
                                    ))}
                                </ul>
                            </div>
                            <div className='menu_box'>
                                <ul className='menu_list'>
                                    {category.map(({categoryid, categoryname, subcategory}) => (
                                    <li>
                                        <Link className='item' key={categoryid} to='/cate' onClick={()=> {localStorage.setItem("cateid", categoryid); localStorage.setItem("catename", categoryname)}}>{categoryname}</Link>
                                        <div className='sub_item'>
                                                <Link to='/cate' onClick={()=> {localStorage.setItem("cateid", categoryid); localStorage.setItem("catename", categoryname)}}>{subcategory}</Link>
                                        </div>
                                    </li>
                                ))}
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