import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { getEachCategory } from './API';
import './RealMain.css'



export default function SubCategory() {

    const Category = async () => {
        try {
            const response = await getEachCategory();
                console.log(response);
        } catch (e) {
           console.error(e);
        }
    }
    useEffect(()=> {
        Category();
    },[])


    return (
        <div>
        </div>
    )
}