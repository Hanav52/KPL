
export default function BasketBody() {
  return (
    <>
      <h2 className="tit-mypage">장바구니</h2>
      <ul className="order_step">
        <li className="active">01 장바구니</li>
        <li className="">02 주문서 작성</li>
        <li className="">03 주문 완료</li>
      </ul>
      <div id="cartWrap">
        <div className="table-cart table-fill-prd cart_box">
          <table summary="번호, 사진, 제품명, 수량, 적립, 가격, 배송비, 취소">
            <colgroup>
              <col width="65" />
              <col width="130" />
              <col width="*" />
              <col width="100" />
              <col width="185" />
              <col width="140" />
              <col width="120" />
            </colgroup>
            <thead>
              <tr>
                <th scope="col">
                  <div className="tb-center">
                    <input
                      type="checkbox"
                      name="__allcheck"
                      onClick="all_basket_check(this, 1);"
                      className="MS_input_checkbox"
                      checked="checked"
                    />
                  </div>
                </th>
                <th scope="col">
                  <div className="tb-center"></div>
                </th>
                <th scope="col">
                  <div className="tb-center">상품명</div>
                </th>
                <th scope="col">
                  <div className="tb-center">수량</div>
                </th>
                <th scope="col">
                  <div className="tb-center">적립금</div>
                </th>
                <th scope="col">
                  <div className="tb-center">판매가</div>
                </th>
                <th scope="col">
                  <div className="tb-center">선택</div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="nbg">
                <td>
                  <div className="tb-center"></div>
                </td>
                <td>
                  <div className="tb-center">
                    <div className="thumb">
                      <a href="/shop/shopdetail.html?branduid=87249&amp;xcode=034&amp;mcode=&amp;scode=&amp;GfDT=aW13UQ%3D%3D">
                        <img
                          src="/shopimages/ranson01/0340030001143.gif?1661821987"
                          alt="상품 섬네일"
                          title="상품 섬네일"
                        />
                      </a>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="tb-left">
                    <a
                      href="/shop/shopdetail.html?branduid=87249&amp;xcode=034&amp;mcode=&amp;scode=&amp;GfDT=aW13UQ%3D%3D"
                      className="tb-bold"
                    >
                      [R]F/W 재키 핀턱 와이드 슬랙스
                    </a>
                    <div className="tb-opt">
                      <span className="tb-dl">
                        <span className="opt_dd">
                          COLOR : 블랙, SIZE : M(28~29)
                          <span className="MK_option_amount87249_1">1</span>개
                        </span>
                      </span>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="opt-spin">
                    <input
                      type="text"
                      name="amount"
                      value="1"
                      className="txt-spin"
                    />
                    <span className="btns">
                      <a className="btn-up" href="s:count_change(0, 0)">
                        +
                      </a>
                      <a className="btn-dw" href="s:count_change(1, 0)">
                        -
                      </a>
                    </span>
                  </div>
                </td>
                <td>
                  <div className="tb-center">
                    <span className="MK_reserve87249_1">340</span>
                  </div>
                </td>
                <td>
                  <div className="tb-center tb-bold tb-price">
                    <span>34,800원</span>
                  </div>
                </td>
                <td>
                  <div className="tb-center">
                    <span className="d-block">
                      <a
                        href="s:basket_wish_login();"
                        className="CSSbuttonWhite btn_select"
                      >
                        찜상품
                      </a>
                    </span>
                    <span className="d-block">
                      <a
                        href="s:send_basket(0, 'del')"
                        className="CSSbuttonWhite btn_select"
                      >
                        삭제하기
                      </a>
                    </span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="btn-order-ctrl">
          <div className="left">
            <a href="/html/mainm.html" className="CSSbuttonWhite">
              쇼핑계속하기
            </a>
          </div>
          <div className="right">
            <a href="s:basket_multidel(1)" className="CSSbuttonWhite">
              선택 상품 삭제
            </a>
            <a href="s:basket_clear();" className="CSSbuttonWhite">
              장바구니 비우기
            </a>
          </div>
        </div>
      </div>
      <div
        id="cartInfo"
        className="headroom headroom--top headroom--not-bottom"
      >
        <div className="tb-right tb-total" id="totalPriceArea">
          <table>
            <tbody>
              <tr>
                <th>총 상품금액</th>
                <td className="total_price_sell">34,800</td>
              </tr>

              <tr id="total_delivery_wrap">
                <th>총 배송비</th>
                <td className="total_delivery">2,500</td>
              </tr>
            </tbody>
          </table>

          <table className="foot">
            <tfoot>
              <tr>
                <th>결제예정금액</th>
                <td className="total_price">37,300</td>
              </tr>
            </tfoot>
          </table>
          <div className="delivery">
            50,000원 미만의 주문은 배송료를 청구합니다.
          </div>
        </div>
        <a href="s:multi_all_order();" className="CSSbuttonBlack btn">
          전체상품주문
        </a>
        <a href="s:multi_order()" className="CSSbuttonWhite btn">
          선택상품주문
        </a>
      </div>
    </>
  );
}
