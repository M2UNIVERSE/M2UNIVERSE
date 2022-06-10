import React from 'react'
import './main.css'
import m2uperson from '../../assets/M2U_person.jpg';

const Main = () => {
    return (
        <section className="main">
            <div className="introduce">
                <img className='introduce_person_img' src={m2uperson} alt="M2U 사진" />
            </div>
        </section>
    )
}

export default Main