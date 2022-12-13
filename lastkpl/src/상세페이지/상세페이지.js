import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { getClothAPI, getCommentAPI } from "../API";
import BOT from "./상세페이지BOT";
import MID from "./상세페이지MID";
import TOP from "./상세페이지TOP";
import '../RealMain.css'

export default function DetailPage () {

  const [res, setRes] = useState([]);
  const [resimage, setResImage] = useState([]);
  const [rescomment, setResComment] = useState([]);
  const [page, setPage] = useState(1);
  const [desc, setDesc] = useState("c_time,desc")

// api 호출
  const ClothAPI = async () => {
    try {
      const response = await getClothAPI(localStorage.getItem("b_num"));
      console.log(response)
      setRes(response.data.data1)
      setResImage(response.data.data1[0].detailpicture_url)
    } catch (e) {
      console.error(e);
    }
  };
// 댓글 api 호출
  const CommentAPI = async (desc, page) => {
    try {
      const response = await getCommentAPI(localStorage.getItem("b_num"), page, 5, desc);
      console.log(response)
      setResComment(response.data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    ClothAPI();
    CommentAPI(desc, page);
  }, [desc, page])

    return (
        <BrowserRouter>
            <div className="contentWrapper">
                <div className="contentWrap">
                    <div className="content">
                        <div className="shop_detail" id="productDetail">
                            <TOP res={res} resimage={resimage}/>
                            <MID resimage={resimage} rescomment={rescomment} page={page} setPage={setPage} setDesc={setDesc}/>
                        </div>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    )
}