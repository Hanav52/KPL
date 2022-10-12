import { BrowserRouter } from "react-router-dom";
import BasketBody from "./장바구니구니";
import '../RealMain.css'

export default function Bascket () {
    return (
        <BrowserRouter>
            <div className="contentWrapper">
                <div className="contentWrap">
                    <div id="content" className="wrapper">
                        <BasketBody/>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    )
}