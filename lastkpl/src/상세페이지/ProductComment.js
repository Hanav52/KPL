import { Box } from "@mui/material";
import { Route, useHistory } from "react-router-dom";
import AddComment from "./AddComment";
import CommentSort from "./CommentSort";
import Pagination from "./Pagination";
import SaveComment from "./SaveComment";
import normalImag from '../프로필/normalimage.png'
import styled from "styled-components";

// img컴포넌트 style컴포넌트로 만들기
const Img = styled.img`
  width: 100px;
  height: 20px;
`;

export default function ProductComment({ rescomment, page, setPage, setDesc}) {

  return (
    <div id="content">
      <div className="products_reviews_list">
        <div className="widget_reviews js-pagination-list">
          <div className="widget_header_basic">
            <div className="widget_header_basic__title_container">
              <span className="widget_header_basic__title">REVIEW</span>
              <span className="widget_header_basic__reviews_count">({rescomment.totalresult})</span>
              <div className="widget_header_basic__description"></div>
            </div>
          </div>
          <div className="filter_sort_basic menu">
            <CommentSort setDesc={setDesc}/>
            <div className="filter_sort_basic__search">
              <div className="filter_sort_basic_search_input_container">
                  <AddComment/>
              </div>
            </div>
          </div>
          <div className="widget_reviews__body products_reviews_list__body">
            {rescomment.data1.map(({b_num, c_img, c_time, com_index, comment, id, u_img, u_num}) => (
              <div className="review_list_v2">
              <div className="review_list_v2__review_lcontent">
                <div className="review_list_v2__tag_section">
                  {c_time}
                </div>
                <div className="review_list_v2__content_section">
                  {comment}
                </div>
              </div>
              <div className="review_list_v2__review_rcontent">
                <div>
                  <Img src={normalImag} className="img-content" alt="댓글 이미지"/>
                </div>
                <div>
                  {id}
                </div>
              </div>
            </div>
             ))}
            <Pagination
                          total={rescomment.totalresult}
                          limit={5}
                          page={page}
                          setPage={setPage}
                  
                  />
          </div>
        </div>
      </div>

      
      </div>
  );
}
