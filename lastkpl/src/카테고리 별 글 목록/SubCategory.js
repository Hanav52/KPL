import React, { useEffect, useState } from "react";
import { Route, useHistory } from "react-router-dom";
import { getEachCategory, getEachSearchCategory } from "../API";
import "../RealMain.css";
import TimeBest from "./SubCategoryBest";
import Cloth from "./SubCategoryCloth";
import {useSelector} from 'react-redux';


// 원래 함수
export default function SubCategory() {

  const [res, setResponse] = useState([]);
  const [res1, setResponse1] = useState([]);
  const [rescolor, setResponseColor] = useState([]);
  const [rescolor1, setResponseColor1] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [item, setItem] = useState("");
  const searchItem = (event) => {
    setItem(event.target.value);
  };
  const ssort = useSelector((sort)=>sort.sort)
  const history = useHistory();
// api 호출
  const CategoryCloth = async (page, ssort) => {
    try {
      const response = await getEachCategory(
         localStorage.getItem("cateid"),
         page,
         12,
         ssort
      );
      console.log(response)
      setResponse(response.data.data1)
      setTotal(response.data.totalresult);
      for(let a = 0; a < response.data.data1.length; a++) {
        setResponseColor(response.data.data1[a].b_color);
    };
    } catch (e) {
      console.error(e);
    }
  };
//상단 best 부분 api 따로 호출
  const CategoryBest = async (page, ssort) => {
    try {
      const response = await getEachCategory(
         localStorage.getItem("cateid"),
         page,
         8,
         ssort
      );
      console.log(response)
      setResponse1(response.data.data1)
      for(let a = 0; a < response.data.data1.length; a++) {
        setResponseColor1(response.data.data1[a].b_color);
    };
    } catch (e) {
      console.error(e);
    }
  };

// 검색 api 호출
const fetchSearch = async () => {
  try {
    const response = await getEachSearchCategory(
      localStorage.getItem("cateid"),
      item,
      page,
      12,
      ssort
    )
    console.log(response)
      setResponse(response.data.data1)
      localStorage.setItem("total", response.data.totalresult)
      setTotal(response.data.totalresult);
      for(let a = 0; a < response.data.data1.length; a++) {
        setResponseColor(response.data.data1[a].b_color);
    };
  } catch (e) {
    console.log(e);
  }
};
// useEffect로 함수 상시 호출
  useEffect(() => {
    CategoryBest(page, ssort);
    CategoryCloth(page, ssort);
  }, [page, ssort]);

  return (
    <Route path='/cate'>
      <TimeBest res1={res1} rescolor1={rescolor1}/>
      <Cloth res={res} rescolor={rescolor} page={page} setPage={setPage} total={total} onChange={searchItem} onClick={fetchSearch}/>
    </Route>
  );
}
