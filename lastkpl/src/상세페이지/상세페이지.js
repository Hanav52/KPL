import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { getClothAPI, getCommentAPI } from "../API";
import BOT from "./상세페이지BOT";
import MID from "./상세페이지MID";
import TOP from "./상세페이지TOP";
import '../RealMain.css'
import { createStore } from "redux";
import { Provider } from "react-redux";

// redux
function reducer(currentState, action) {
  if(currentState === undefined){
    return {
      sort: "c_time,desc",
      categoryid: 0,
    }
  }
  const newSort = {...currentState};

  if(action.type === '최신순') {
    newSort.sort = 'c_time,desc'
  }
  else if(action.type === '오래된순') {
    newSort.sort = 'c_time,asc'
  }
  return newSort;
}
const store = createStore(reducer);

export default function DetailPage () {

// api 호출
  const ClothAPI = async () => {
    try {
      const response = await getClothAPI(1);
      setRes(response.data.data1)
      setResImage(response.data.data1[0].detailpicture_url)
    } catch (e) {
      console.error(e);
    }
  };
// 댓글 api 호출
  const CommentAPI = async () => {
    try {
      const response = await getCommentAPI(1, 1, 10, "c_time,desc");
      console.log(response)
    } catch (e) {
      console.error(e);
    }
  };


  useEffect(() => {
    ClothAPI();
    CommentAPI();
  }, [])

  const [res, setRes] = useState([]);
  const [resimage, setResImage] = useState([]);

    return (
        <BrowserRouter>
          <Provider store={store}>
            <div className="contentWrapper">
                <div className="contentWrap">
                    <div className="content">
                        <div className="shop_detail" id="productDetail">
                            <TOP res={res} resimage={resimage}/>
                            <MID resimage={resimage}/>
                            <BOT/>
                        </div>
                    </div>
                </div>
            </div>
          </Provider>
        </BrowserRouter>
    )
}