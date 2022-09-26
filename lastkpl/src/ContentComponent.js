import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { getRecent } from './API';
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

    const [data1, setData1] = useState([]);
    const [data2, setData2] = useState([]);

    const Category = async (e) => {
        try {
            const response = await getRecent();
                console.log(response.data.data1[0].b_color)
                setData1(response.data.data1)
                for(const i = 0; i < data1.length; i++) {
                    setData2(response.data.data1[i].b_color)
                }
        } catch (e) {
           console.error(e);
        }
    }
    useEffect(()=> {
        Category();
    },[])

    // const result1 = data1.filter((name) => name === 0);
    // const namelist = result1.map((rd) => (
    //     <div className='cloth-color' style={{background: `${rd.b_color}`}}>
    //     </div>
    // ));



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
                            {data1.map(({b_name, b_price, b_views, b_url, id}) => (
                                <li className='item-list slick-slide madeProudct' key={id}>
                                    <dl className='thumb'>
                                        <dt>
                                            <div><img src={b_url} alt="이미지"></img></div>
                                        </dt>
                                        <dd className='item_info'>
                                            <div className='item_top'>
                                                <p className='colorinfo'>
                                                    {data2.map(({b_color}) => (
                                                    <div className='cloth-color' style={{backgroundColor: `${b_color}`}}>
                                                    {b_color}
                                                    </div>
                                                    ))}
                                                </p>
                                                <p className='listSubname'>S, M, L, XL</p>
                                            </div>
                                            <div className='item_name'>
                                                <div className='namename'>{b_name}</div>
                                            </div>
                                            <div className='item_prive'>
                                                <span className='price'>{b_price}</span>
                                            </div>
                                            <div className='item_productview'>
                                                <div>{b_views}</div>
                                            </div>
                                            <div className='prd-ico'></div>
                                        </dd>
                                    </dl>
                                </li>
                            ))}
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