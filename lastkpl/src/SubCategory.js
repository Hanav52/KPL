import React, { useEffect, useState } from "react";
import { getEachCategory, getEachCategory1 } from "./API";
import "./RealMain.css";
import TimeBest from "./SubCategoryBest";
import Cloth from "./SubCategoryCloth";

export default function SubCategory() {

  const [res, setResponse] = useState([]);
  const [rescolor, setResponseColor] = useState([]);
  const Category = async () => {
    try {
      const response = await getEachCategory(
        "6",
        "1",
        "12",
        "b_price,desc"
      );
      console.log(response)
      setResponse(response.data.data1)
      for(let a = 0; a < response.data.data1.length; a++) {
        setResponseColor(response.data.data1[a].b_color);
    };
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    Category();
  }, []);

  // 정렬이랑 검색을 추가해야함 하지만 무한스크롤
  return (
    <div>
      <TimeBest res={res}/>
      <Cloth res={res} rescolor={rescolor}/>
    </div>
  );
}
