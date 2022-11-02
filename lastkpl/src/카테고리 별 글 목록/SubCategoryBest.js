import { Link } from "react-router-dom";

function TimeBest({res1, rescolor1}) {
  return (
    <>
      <div className="section" id="timeBest">
        <div className="wrapper">
          <div className="tt_box">
            <h3 className="tt txt_center">
              <em className="fbold">{localStorage.getItem("catename")} BEST</em>
            </h3>
          </div>
          <div className="contain">
            <div className="product_list_box">
              <ul className="item-cont">
                {res1.map(({b_name, b_price, b_url, b_views, b_num}) => (
                  <Link to="/detail">
                    {localStorage.setItem("b_num", b_num)}
                    <li className="item-list slick-slide madeProudct">
                  <dl className="thumb">
                    <dt>
                      <div>
                        <img src={`http://54.200.255.83:3000/${b_url}`} alt="이미지"></img>
                      </div>
                    </dt>
                    <dd className="item_info">
                      <div className="item_top">
                        <p className="colorinfo">
                        {rescolor1.map(({b_color}) => (
                          <div
                            className="cloth-color"
                            style={{ backgroundColor: b_color }}
                          ></div>
                        ))}
                        </p>
                        <p className="listSubname">S, M, L, XL</p>
                      </div>
                      <div className="item_name">
                        <div className="namename">{b_name}</div>
                      </div>
                      <div className="item_prive">
                        <div className="price">{b_price}</div>
                      </div>
                      <div className="item_productview">
                        <div>조회 : {b_views}</div>
                      </div>
                      <div className="prd-ico"></div>
                    </dd>
                  </dl>
                </li>
                </Link>
                ))}
                
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TimeBest;
