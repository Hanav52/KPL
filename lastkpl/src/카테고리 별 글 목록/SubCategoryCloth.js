import Pagination from "./Pagination";
import Search from "./Search";
import Sort from "./Sort";

function Cloth({res, rescolor, page, setPage, total, onClick, onChange}) {

  return (
    <>
      <div className="section" id="TOP">
        <div className="wrapper">
          <div className="tt_box">
            <h3 className="tt txt_center">
              <em className="fbold">{localStorage.getItem("catename")}</em>
            </h3>
            <Sort/>
            <Search onClick={onClick} onChange={onChange}/>
          </div>
          <div className="contain">
            <div className="product_list_box">
              <ul className="item-cont">
                {res.map(({b_name, b_price, b_url, b_views}) => (
                    <li className="item-list slick-slide madeProudct">
                  <dl className="thumb">
                    <dt>
                      <div>
                        <img src={`http://35.89.73.172:3000/${b_url}`} alt="이미지"></img>
                      </div>
                    </dt>
                    <dd className="item_info">
                      <div className="item_top">
                        <p className="colorinfo">
                        {rescolor.map(({b_color}) => (
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
                ))}
                
              </ul>
            </div>
          </div>
          <Pagination
              total={total}
              limit={12}
              page={page}
              setPage={setPage}
            />
        </div>
      </div>
    </>
  );
}

export default Cloth;
