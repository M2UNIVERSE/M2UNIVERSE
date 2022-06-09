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
                    <p>대한민국의 작곡가. 보기 드물게 독보적으로 장르 레인지가 넓은 작,편곡 스킬을 소유중인 사람이며, 최근 그의 유튜브 채널에 들어가보면 각종 EDM House, Trap, Dubstep. 그리고 보컬이 있는 POP을 장르별로 작품을 발표 하면서 동시에 관현악, 재즈, 심지어는 이 장르 저 장르들을 섞어서 특정 장르를 정의를 내리기 힘든 일종의 자신만의 하이브리드적(?) 세계관을 확장 중인 듯하다.</p>
                </div>
            </div>

        </section>
    )
}

export default Main