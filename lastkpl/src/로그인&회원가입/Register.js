import React, { useState } from 'react';
import '../Main.css'
import Join from './RegisterTest';

export default function RegisterCopo() {
    return (
        <div className="container">
            <div className='regester-box'>
                <div className='register-box1'>
                    <div className='register-row'>
                        <div className='register-row-left'>
                        </div>
                        <div className='register-row-right'>
                            <Join/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}