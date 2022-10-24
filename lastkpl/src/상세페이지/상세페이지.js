import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { getClothAPI } from "../API";
import BOT from "./상세페이지BOT";
import MID from "./상세페이지MID";
import TOP from "./상세페이지TOP";

export default function DetailPage () {

// api 호출
  const ClothAPI = async () => {
    try {
      const response = await getClothAPI(1);
      console.log(response.data.data1);
      setRes(response.data.data1)
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    ClothAPI();
  }, [])

  const [res, setRes] = useState([]);

    return (
        <BrowserRouter>
            <div className="contentWrapper">
                <div className="contentWrap">
                    <div className="content">
                        <div className="shop_detail" id="productDetail">
                            <TOP res={res}/>
                            <MID/>
                            <BOT/>
                        </div>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    )
}