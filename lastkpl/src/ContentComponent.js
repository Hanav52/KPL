import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './RealMain.css'

// ImageSlide 함수
function ImageSlide() {
    return (
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src=""
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=Second slide&bg=282c34"
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=Third slide&bg=20232a"
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }

export default function CoComponent() {
    return (
        <div className='contentWrapper'>
            <div className='visual_box'>
                <ImageSlide/>
            </div>
            <div className='section' id='timeBest'>
                <div className='wrapper'>
                    <div className='tt_box'>
                        <h3 className='tt'>
                            <em className='fbold'>실시간 베스트</em>
                        </h3>
                        <h4 className='swiper_tt'>지금 가장 인기 있는 제품</h4>
                    </div>
                    <div className='contain'>
                        <div className='product_list_box'>
                            <ul className='item-cont'>
                                <li className='item-list slick-slide madeProudct'>
                                    <dl className='thumb'>
                                        <dt>
                                            <div><img src='blank'></img> </div>
                                        </dt>
                                        <dd className='item_info'>
                                            <div className='item_top'>
                                                <p className='colorinfo'>
                                                    <div className='cloth-color' style={{background: "black"}}>
                                                    </div>
                                                    <div className='cloth-color' style={{background: "black"}}>
                                                    </div>
                                                    <div className='cloth-color' style={{background: "black"}}>
                                                    </div>
                                                </p>
                                                <p className='listSubname'>S, M, L, XL</p>
                                            </div>
                                            <div className='item_name'>
                                                <div className='namename'>[r]F/W 조엘 자수 후드 맨투맨</div>
                                            </div>
                                            <div className='item_prive'>
                                                <span className='price'>29,800</span>
                                            </div>
                                            <div className='item_productview'>
                                                <div>조회수</div>
                                            </div>
                                            <div className='prd-ico'></div>
                                        </dd>
                                    </dl>
                                </li>
                                <li className='item-list slick-slide madeProudct'>
                                    <dl className='thumb'>
                                        <dt>
                                            <div><img src='blank'></img> </div>
                                        </dt>
                                        <dd className='item_info'>
                                            <div className='item_top'>
                                                <p className='colorinfo'>
                                                    <div className='cloth-color' style={{background: "black"}}>
                                                    </div>
                                                    <div className='cloth-color' style={{background: "black"}}>
                                                    </div>
                                                    <div className='cloth-color' style={{background: "black"}}>
                                                    </div>
                                                </p>
                                                <p className='listSubname'>S, M, L, XL</p>
                                            </div>
                                            <div className='item_name'>
                                                <div className='namename'>[r]F/W 조엘 자수 후드 맨투맨</div>
                                            </div>
                                            <div className='item_prive'>
                                                <span className='price'>29,800</span>
                                            </div>
                                            <div className='item_productview'>
                                                <div>조회수</div>
                                            </div>
                                            <div className='prd-ico'></div>
                                        </dd>
                                    </dl>
                                </li>
                                <li className='item-list slick-slide madeProudct'>
                                    <dl className='thumb'>
                                        <dt>
                                            <div><img src='blank'></img> </div>
                                        </dt>
                                        <dd className='item_info'>
                                            <div className='item_top'>
                                                <p className='colorinfo'>
                                                    <div className='cloth-color' style={{background: "black"}}>
                                                    </div>
                                                    <div className='cloth-color' style={{background: "black"}}>
                                                    </div>
                                                    <div className='cloth-color' style={{background: "black"}}>
                                                    </div>
                                                </p>
                                                <p className='listSubname'>S, M, L, XL</p>
                                            </div>
                                            <div className='item_name'>
                                                <div className='namename'>[r]F/W 조엘 자수 후드 맨투맨</div>
                                            </div>
                                            <div className='item_prive'>
                                                <span className='price'>29,800</span>
                                            </div>
                                            <div className='item_productview'>
                                                <div>조회수</div>
                                            </div>
                                            <div className='prd-ico'></div>
                                        </dd>
                                    </dl>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='section' id='TOP'>
                <div className='wrapper'>
                    <div className='tt_box'>
                        <h3 className='tt txt_center'>
                            <em className='fbold'>Top</em>
                        </h3>
                    </div>
                    <div className='contain'>
                        <div className='product_list_box'>
                                    <ul className='item-cont'>
                                        <li className='item-list slick-slide madeProudct'>
                                            <dl className='thumb'>
                                                <dt>
                                                    <div>이미지</div>
                                                </dt>
                                                <dd className='item_info'>
                                                    <div className='item_top'>
                                                        <p className='colorinfo'>
                                                            <div className='cloth-color'></div>
                                                        </p>
                                                        <p className='listSubname'>S, M, L, XL</p>

                                                    </div>
                                                    <div className='item_name'>
                                                        <div className='namename'>조엘 자수 후드 맨투맨</div>
                                                    </div>
                                                    <div className='item_prive'>
                                                        <div className='price'>"29,800"</div>
                                                    </div>
                                                    <div className='item_productview'>
                                                        <div>조회수</div>
                                                    </div>
                                                    <div className='prd-ico'></div>
                                                </dd>
                                            </dl>
                                        </li>
                                    </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}