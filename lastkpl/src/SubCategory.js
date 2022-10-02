import React, { useEffect, useState } from "react";
import { createStore } from "redux";
import { useHistory } from "react-router-dom";
import { getEachCategory, getEachCategory1 } from "./API";
import "./RealMain.css";
import TimeBest from "./SubCategoryBest";
import Cloth from "./SubCategoryCloth";
import {Provider, useSelector, useDispatch, connect} from 'react-redux';


// 원래 함수
export default function SubCategory() {

  const [res, setResponse] = useState([]);
  const [rescolor, setResponseColor] = useState([]);
  const [page, setPage] = useState(1);
  const ssort = useSelector((sort)=>sort.sort)
  const history = useHistory();

  const Category = async (page) => {
    try {
      const response = await getEachCategory(
         1,
         page,
         12,
         ssort
      );
      console.log(response)
      const resCloth = res.concat(response.data.data1);
      setResponse(resCloth)
      for(let a = 0; a < response.data.data1.length; a++) {
        setResponseColor(response.data.data1[a].b_color);
    };
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    Category(page);
  }, [page]);

  // 정렬이랑 검색을 추가해야함 하지만 무한스크롤
  return (
    <div>
      <TimeBest res={res}/>
      <Cloth res={res} rescolor={rescolor} Page={() => {setPage(page + 1)}} page={page} setPage={setPage}/>
    </div>
  );
}
