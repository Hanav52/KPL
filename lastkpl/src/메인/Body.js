import { useState } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { createStore } from "redux";
import Footer from "../Footer/Footer";
import DetailPage from "../상세페이지/상세페이지";
import SubCategory from "../카테고리 별 글 목록/SubCategory";
import HeaderMenu from "../헤더/Header";
import Hcompo from "../헤더/HeaderMenu";
import CoComponent from "./ContentComponent";

// redux
function reducer(currentState, action) {
    if(currentState === undefined){
      return {
        sort: "b_views,desc",
        categoryid: 0,
      }
    }
    const newSort = {...currentState};
    const newCategoryid = {...currentState};

    if(action.type === '낮은 가격순') {
      newSort.sort = 'b_price,asc'
    }
    else if(action.type === '높은 가격순') {
        newSort.sort = 'b_price,desc'
    }
    else if(action.type === '최신순') {
        newSort.sort = 'b_time,desc'
    }
    else if(action.type === '조회순') {
        newSort.sort = 'b_views,desc'
    }
    return newSort;
  }
  const store = createStore(reducer);

export default function Body() {

    return(
        <>
        <BrowserRouter>
            <Provider store={store}>
              <Switch>
                <Route exact path='/'>
                  <Hcompo/>
                  <CoComponent/>
                </Route>
                <Route path='/cate'>
                  <Hcompo/>
                  <SubCategory/>
                </Route>
                <Route path='/detail'>
                  <Hcompo/>
                  <DetailPage/>
                </Route>
              </Switch>
            <Footer/>
            </Provider>
        </BrowserRouter>
        </>
    )
  }