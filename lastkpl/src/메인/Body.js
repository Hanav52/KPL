import { useState } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { createStore } from "redux";
import Footer from "../Footer/Footer";
import SignIn from "../로그인&회원가입/Login";
import RegisterTest from "../로그인&회원가입/RegisterTest";
import DetailPage from "../상세페이지/상세페이지";
import SubCategory from "../카테고리 별 글 목록/SubCategory";
import MyProfile from "../프로필/MyProfile";
import HeaderMenu from "../헤더/Header";
import Hcompo from "../헤더/HeaderMenu";
import CoComponent from "./ContentComponent";

// redux
function reducer(currentState, action) {
    if(currentState === undefined){
      return {
        sort: "b_views,desc",
        categoryid: localStorage.getItem("cateid"),
      }
    }
    const newSort = {...currentState};

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
                  <Footer/>
                </Route>
                <Route path='/login'>
                  <SignIn/>
                </Route>
                <Route path='/register'>
                  <RegisterTest/>
                </Route>
                <Route path='/cate'>
                  <Hcompo/>
                  <SubCategory/>
                  <Footer/>
                </Route>
                <Route path='/detail'>
                  <Hcompo/>
                  <DetailPage/>
                  <Footer/>
                </Route>
                <Route path='/profile'>
                  <Hcompo/>
                  <MyProfile/>
                  <Footer/>
                </Route>
              </Switch>
            </Provider>
        </BrowserRouter>
        </>
    )
  }