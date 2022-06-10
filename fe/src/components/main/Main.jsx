import React from 'react'
import './main.css'
import m2uprofile from '../../assets/M2Ulogo.jpg'

const Main = () => {
    return (
        <section className="main">
            <div className="introduce">
                <img src={m2uprofile} alt='M2U 프로필 사진'/>
                <div className="introduce_text">
                    <h1>M2U (Music To(2) You(U))</h1>
                    <p>대한민국의 작곡가<br/> 굉장히 넓은 장르 </p>
                </div>
            </div>

        </section>
    )
}

export default Main