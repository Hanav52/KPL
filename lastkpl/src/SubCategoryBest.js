import axios from "axios";

function TimeBest() {
  return (
    <>
      <div className="section" id="timeBest">
        <div className="wrapper">
          <div className="tt_box">
            <h3 className="tt txt_center">
              <em className="fbold">TOP</em>
            </h3>
          </div>
          <div className="contain">
            <div className="product_list_box">
              <ul className="item-cont">
                <li className="item-list slick-slide madeProudct">
                  <dl className="thumb">
                    <dt>
                      <div>
                        <img src="" alt="이미지"></img>
                      </div>
                    </dt>
                    <dd className="item_info">
                      <div className="item_top">
                        <p className="colorinfo">
                          <div
                            className="cloth-color"
                            style={{ backgroundColor: `` }}
                          ></div>
                        </p>
                        <p className="listSubname">S, M, L, XL</p>
                      </div>
                      <div className="item_name">
                        <div className="namename">상품이름</div>
                      </div>
                      <div className="item_prive">
                        <div className="price">가격</div>
                      </div>
                      <div className="item_productview">
                        <div>조회수</div>
                      </div>
                      <div className="prd-ico"></div>
                    </dd>
                  </dl>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TimeBest;
