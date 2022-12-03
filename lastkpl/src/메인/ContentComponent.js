import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { getRecent } from '../API';
import '../RealMain.css'
import normalImag from '../프로필/normalimage.png'
import styled from "styled-components";

const Img = styled.img`
  width: 100px;
  height: 550px;
`;
// ImageSlide 함수
function ImageSlide() {
    return (
      <Carousel>
        <Carousel.Item>
          <Img
            className="d-block w-100"
            src={normalImag}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Img
            className="d-block w-100"
            src={normalImag}
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Img
            className="d-block w-100"
            src={normalImag}
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

    const [cloth, setCloth] = useState([]);
    const [color, setColor] = useState([]);
    const [clothData2, setClothData2] = useState([]);
    const [colorData2, setColorData2] = useState([]);

    const Category = async () => {
        try {
            const response = await getRecent();
                setCloth(response.data1);
                for(let i = 0; i < response.data1.length; i++) {
                    setColor(response.data1[i].b_color);
                };
                setClothData2(response.data2);
                for(let a = 0; a < response.data2.length; a++) {
                    setColorData2(response.data2[a].b_color);
                };
        } catch (e) {
           console.error(e);
        }
    }
    useEffect(()=> {
        Category();
    },[])


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
                            {cloth.map(({b_name, b_price, b_views, b_url, id}) => (
                                <li className='item-list slick-slide madeProudct' key={id}>
                                    <dl className='thumb'>
                                        <dt>
                                            <div><img src={`http://54.200.255.83:3000/${b_url}`} alt="이미지"></img></div>
                                        </dt>
                                        <dd className='item_info'>
                                            <div className='item_top'>
                                                <p className='colorinfo'>
                                                    {color.map(({b_color}) => (
                                                    <div className='cloth-color' style={{backgroundColor: `${b_color}`}}>
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
                                    {clothData2.filter((number) => number.c_num === 1).map(({b_name, b_price, b_views, b_url, id}) => (
                                        <li className='item-list slick-slide madeProudct'>
                                            <dl className='thumb'>
                                                <dt>
                                                    <div><img src={`http://54.200.255.83:3000/${b_url}`} alt="이미지"></img></div>
                                                </dt>
                                                <dd className='item_info'>
                                                    <div className='item_top'>
                                                        <p className='colorinfo'>
                                                        {colorData2.map(({b_color}) => (
                                                            <div className='cloth-color' style={{backgroundColor: `${b_color}`}}>
                                                            </div>
                                                        ))}
                                                        </p>
                                                        <p className='listSubname'>S, M, L, XL</p>

                                                    </div>
                                                    <div className='item_name'>
                                                        <div className='namename'>{b_name}</div>
                                                    </div>
                                                    <div className='item_prive'>
                                                        <div className='price'>{b_price}</div>
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
                            <em className='fbold'>PANTS</em>
                        </h3>
                    </div>
                    <div className='contain'>
                        <div className='product_list_box'>
                                    <ul className='item-cont'>
                                    {clothData2.filter((number) => number.c_num === 2).map(({b_name, b_price, b_views, b_url, id}) => (
                                        <li className='item-list slick-slide madeProudct'>
                                            <dl className='thumb'>
                                                <dt>
                                                    <div><img src={`http://54.200.255.83:3000/${b_url}`} alt="이미지"></img></div>
                                                </dt>
                                                <dd className='item_info'>
                                                    <div className='item_top'>
                                                        <p className='colorinfo'>
                                                        {colorData2.map(({b_color}) => (
                                                            <div className='cloth-color' style={{backgroundColor: `${b_color}`}}>
                                                            </div>
                                                        ))}
                                                        </p>
                                                        <p className='listSubname'>S, M, L, XL</p>

                                                    </div>
                                                    <div className='item_name'>
                                                        <div className='namename'>{b_name}</div>
                                                    </div>
                                                    <div className='item_prive'>
                                                        <div className='price'>{b_price}</div>
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
                            <em className='fbold'>OUTER</em>
                        </h3>
                    </div>
                    <div className='contain'>
                        <div className='product_list_box'>
                                    <ul className='item-cont'>
                                    {clothData2.filter((number) => number.c_num === 3).map(({b_name, b_price, b_views, b_url, id}) => (
                                        <li className='item-list slick-slide madeProudct'>
                                            <dl className='thumb'>
                                                <dt>
                                                    <div><img src={`http://54.200.255.83:3000/${b_url}`} alt="이미지"></img></div>
                                                </dt>
                                                <dd className='item_info'>
                                                    <div className='item_top'>
                                                        <p className='colorinfo'>
                                                        {colorData2.map(({b_color}) => (
                                                            <div className='cloth-color' style={{backgroundColor: `${b_color}`}}>
                                                            </div>
                                                        ))}
                                                        </p>
                                                        <p className='listSubname'>S, M, L, XL</p>

                                                    </div>
                                                    <div className='item_name'>
                                                        <div className='namename'>{b_name}</div>
                                                    </div>
                                                    <div className='item_prive'>
                                                        <div className='price'>{b_price}</div>
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
                            <em className='fbold'>SKIRT</em>
                        </h3>
                    </div>
                    <div className='contain'>
                        <div className='product_list_box'>
                                    <ul className='item-cont'>
                                    {clothData2.filter((number) => number.c_num === 4).map(({b_name, b_price, b_views, b_url, id}) => (
                                        <li className='item-list slick-slide madeProudct'>
                                            <dl className='thumb'>
                                                <dt>
                                                    <div><img src={`http://54.200.255.83:3000/${b_url}`} alt="이미지"></img></div>
                                                </dt>
                                                <dd className='item_info'>
                                                    <div className='item_top'>
                                                        <p className='colorinfo'>
                                                        {colorData2.map(({b_color}) => (
                                                            <div className='cloth-color' style={{backgroundColor: `${b_color}`}}>
                                                            </div>
                                                        ))}
                                                        </p>
                                                        <p className='listSubname'>S, M, L, XL</p>

                                                    </div>
                                                    <div className='item_name'>
                                                        <div className='namename'>{b_name}</div>
                                                    </div>
                                                    <div className='item_prive'>
                                                        <div className='price'>{b_price}</div>
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
                            <em className='fbold'>SHOES&BAGS</em>
                        </h3>
                    </div>
                    <div className='contain'>
                        <div className='product_list_box'>
                                    <ul className='item-cont'>
                                    {clothData2.filter((number) => number.c_num === 5).map(({b_name, b_price, b_views, b_url, id}) => (
                                        <li className='item-list slick-slide madeProudct'>
                                            <dl className='thumb'>
                                                <dt>
                                                    <div><img src={`http://54.200.255.83:3000/${b_url}`} alt="이미지"></img></div>
                                                </dt>
                                                <dd className='item_info'>
                                                    <div className='item_top'>
                                                        <p className='colorinfo'>
                                                        {colorData2.map(({b_color}) => (
                                                            <div className='cloth-color' style={{backgroundColor: `${b_color}`}}>
                                                            </div>
                                                        ))}
                                                        </p>
                                                        <p className='listSubname'>S, M, L, XL</p>

                                                    </div>
                                                    <div className='item_name'>
                                                        <div className='namename'>{b_name}</div>
                                                    </div>
                                                    <div className='item_prive'>
                                                        <div className='price'>{b_price}</div>
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
            
        </div>
    )
}