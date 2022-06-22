import React from 'react'
import './main.css'
import m2uBackGround from '../../assets/BackgroundVideo.mp4'
import m2uBackGround2 from '../../assets/M2U_person.jpg';
import { useEffect } from 'react';

const Main = () => {
    window.addEventListener('scroll',()=>{console.log("hi");});

    return (
        <section className="main">
            <div className="introduce">
                <video
                    autoPlay="autoPlay"
                    loop="loop"
                    muted="muted"
                    className='introduce_background'
                    src={m2uBackGround}
                    alt="M2U 사진"/>
                <div className="introduce_text">
                    <h1>M2UNIVERSE</h1>
                    <p>For those who love M2U and those who love him.</p>
                    <p className='arrow'>↓</p>
                </div>
            </div>

            <div className="scroll_m2u"></div>

            <div className="introduce_two">
                <div className="introduce_m2u"></div>
            </div>
        </section>
    )
}

export default Main