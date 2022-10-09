import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";


export default function TOP () {

    const [age, setAge] = useState("");

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <div className="proudct_info_box">
            <div className="wrapper clearfix">
                <div className="product_img_box">
                    <div className="thumb clearfix">
                        <div  className="gallery-top gallery-container">

                        </div>
                        <div className="gallery-thumbs gallery-container">

                        </div>
                    </div>
                </div>
                <div className="product_txt_box">
                    <div className="prdInfoArea">
                        <div className="prdInfoAreaChild">
                            <form>
                                <div className="prdInfoCnt info">
                                    <div className="infoHeader">
                                        <h3 className="tit-prd">
                                            선데이 루즈핏 핸드메이드 자켓
                                        </h3>
                                    </div>
                                    <p className="listSubname">
                                        사이즈
                                    </p>
                                    <p className="price sell_price">
                                        <span className="lb">
                                            PRICE
                                        </span>
                                        <span className="price_sell">
                                            139000
                                        </span>
                                    </p>
                                    <div className="table-opt prdOption">
                                        <table summary="판매가격, 적립금, 주문수량, 옵션, 사이즈, 상품조르기, sns">
                                            <caption>상품 옵션</caption>
                                            <tbody>
                                                <tr>
                                                    <td colSpan="2" className="nopd">
                                                        <div className="opt-wrap" style={{marginTop: "0"}}>
                                                            <div className="tit blind">
                                                                기본옵션
                                                            </div>
                                                            <dl>
                                                                <dt>COLOR</dt>
                                                                <dd>
                                                                    <FormControl sx={{ m: 1, minWidth: 100 }}>
                                                                        <InputLabel id="demo-simple-select-autowidth-label">Age</InputLabel>
                                                                        <Select
                                                                        labelId="demo-simple-select-autowidth-label"
                                                                        id="demo-simple-select-autowidth"
                                                                        value={age}
                                                                        onChange={handleChange}
                                                                        autoWidth
                                                                        label="Age"
                                                                        >
                                                                        <MenuItem value="">
                                                                            <em>None</em>
                                                                        </MenuItem>
                                                                        <MenuItem value={10}>Twenty</MenuItem>
                                                                        <MenuItem value={21}>Twenty one</MenuItem>
                                                                        <MenuItem value={22}>Twenty one and a half</MenuItem>
                                                                        </Select>
                                                                    </FormControl>
                                                                </dd>
                                                            </dl>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td colSpan="2">
                                                        <dl style={{marginTop: "0"}}>
                                                            <dt>DELIVERY</dt>
                                                            <dd>
                                                                <FormControl sx={{ m: 1, minWidth: 100 }}>
                                                                        <InputLabel id="demo-simple-select-autowidth-label">Age</InputLabel>
                                                                        <Select
                                                                        labelId="demo-simple-select-autowidth-label"
                                                                        id="demo-simple-select-autowidth"
                                                                        value={age}
                                                                        onChange={handleChange}
                                                                        autoWidth
                                                                        label="Age"
                                                                        >
                                                                        <MenuItem value="">
                                                                            <em>None</em>
                                                                        </MenuItem>
                                                                        <MenuItem value={10}>Twenty</MenuItem>
                                                                        <MenuItem value={21}>Twenty one</MenuItem>
                                                                        <MenuItem value={22}>Twenty one and a half</MenuItem>
                                                                        </Select>
                                                                </FormControl>
                                                            </dd>
                                                        </dl>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td colSpan="2" style={{paddingTop: "0"}}>
                                                        <div className="MK_optAddWrap">
                                                            <span className="lb">QTY</span>
                                                            <div className="MK_innerQptWrap">
                                                                <div id="MK_innerOptScroll" className="line" style={{paddingTop: "0"}}>
                                                                    <ul id="MKinnerOpt_02" className="MK_inner-opt-cm">

                                                                    </ul>
                                                                    <ul id="MKinnerOpt_01" className="MK_inner-opt-cm">
                                                                        <li id="basic_0">
                                                                            <span className="MK_p-name">데님블루, S</span>
                                                                            <div className="MK_qty-ctrl">수량부분올리기</div>
                                                                            <div className="MK_btn-del">알림 기능 사용해서 x버튼 만들기</div>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <div id="MK_innerOptTotal">
                                                                    <p className="totalLeft">
                                                                        <span className="MK_txt-total">TOTAL</span>
                                                                    </p>
                                                                    <p className="totalRight">
                                                                        <span className="MK_total" id="MK_p_total">
                                                                            34800
                                                                        </span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="prd-btns">
                                        <button className="btn_buy">BUT IT NOW</button>
                                        <button className="btn_cart">ADD TO CART</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}