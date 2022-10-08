import { BrowserRouter } from "react-router-dom";
import BOT from "./상세페이지BOT";
import MID from "./상세페이지MID";
import TOP from "./상세페이지TOP";

export default function DetailPage () {
    return (
        <BrowserRouter>
            <div className="contentWrapper">
                <div className="contentWrap">
                    <div className="content">
                        <div className="shop_detail" id="productDetail">
                            <TOP/>
                            <MID/>
                            <BOT/>
                        </div>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    )
}