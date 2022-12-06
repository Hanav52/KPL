import { BrowserRouter } from 'react-router-dom';
import '../RealMain.css'
import styled from "styled-components";

const Div = styled.div`
  width: 100px;
  height: 20px;
`;

export default function Footer() {
    return (
        <div className='footer'>
            <div className='wrapper'>
                <div className='footer_inner'>
                    <div className='ft_info_box'>
                        <h2 className='ft_logo'>
                            KPL
                        </h2>
                        <span className='ft_link'>
                            <div className='link'>홈</div>
                            <div className='link'>문의</div>
                        </span>
                        <p className='shop_info'>
                            <span>상호 : 주식회사 KPL</span>
                            <span>대표 : 이준기, 김승민, 박정우&nbsp;</span>
                            <span>개인정보 보호 책임자 : 김승민</span>
                            <br/>
                            <span>Email : wnsrl8329@gmail.com</span> 
                            <br/>
                        </p>
                        <p className='copy'>COPYRIGHT(C) ALL RIGHTS RESERVED.</p>
                    </div>
                    <div className='ft_info_box last'>
                        <dl className='ft_info'>
                            <dt className='fbold'>커뮤니티</dt>
                            <dd>
                                <span className='site_link'>
                                    <div>문의</div>
                                </span>
                                <span className='site_link'>
                                    <div>노션</div>
                                </span>
                                <span className='site_link'>
                                    <div>Jira</div>
                                </span>
                            </dd>
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    )
}